import pandas as pd
from django.http import JsonResponse
from django.conf import settings
import os

def get_csv_data(request):
    csv_path = os.path.join(settings.BASE_DIR, "stripe/static/data/stripe_payments.csv")
    df = pd.read_csv(csv_path)
    
    # Convert start_date to datetime
    df['start_date'] = pd.to_datetime(df['start_date'])
    
    # Extract the month and year for grouping
    df['month'] = df['start_date'].dt.month_name()
    df['year'] = df['start_date'].dt.year
    
    # Define the month order
    month_order = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ]
    
    # Group by plan and month, sum the price for each group
    monthly_data = df[df['plan'] == 'monthly'].groupby(['month', 'year']).agg({'price': 'sum'}).reset_index()
    yearly_data = df[df['plan'] == 'yearly'].groupby(['month', 'year']).agg({'price': 'sum'}).reset_index()

    # Sort the data by month order
    monthly_data['month'] = pd.Categorical(monthly_data['month'], categories=month_order, ordered=True)
    yearly_data['month'] = pd.Categorical(yearly_data['month'], categories=month_order, ordered=True)

    monthly_data = monthly_data.sort_values(['year', 'month'])
    yearly_data = yearly_data.sort_values(['year', 'month'])

    # Create a dictionary to accumulate ARR for each month
    arr_data = {month: {'monthly': 0, 'yearly': 0} for month in month_order}

    # Process monthly data (directly adds price to monthly ARR)
    for _, row in monthly_data.iterrows():
        arr_data[row['month']]['monthly'] += row['price']

    # Process yearly data (divide the price by 12 for monthly contribution)
    for _, row in yearly_data.iterrows():
        arr_data[row['month']]['yearly'] += row['price'] / 12  # Spread yearly price across 12 months

    # Convert the aggregated ARR data into the required structure
    monthly = []
    yearly = []
    
    for month in month_order:
        monthly.append({
            'x': month[:3],  # Abbreviate month to 3 letters
            'y': arr_data[month]['monthly'],
        })
        yearly.append({
            'x': month[:3],  # Abbreviate month to 3 letters
            'y': round(arr_data[month]['yearly'], 2),
        })

    # Construct the final data in the required format
    data = [
        {
            'id': 'Yearly',
            'color': 'hsl(220, 60%, 40%)',
            'data': yearly,
        },
        {
            'id': 'Monthly',
            'color': 'hsl(205 100% 50%)',
            'data': monthly,
        },
    ]

    # Return the data as a JSON response
    return JsonResponse(data, safe=False)
