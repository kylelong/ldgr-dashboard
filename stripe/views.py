import pandas as pd
from django.http import JsonResponse
from django.conf import settings
import os

# Caculates running ARR  for each month based on yearly & monthly plans

def get_csv_data(request):
    csv_path = os.path.join(settings.BASE_DIR, "stripe/static/data/stripe_payments.csv")
    df = pd.read_csv(csv_path)
    
    # Convert dates to datetime
    df['start_date'] = pd.to_datetime(df['start_date'])
    df['end_date'] = pd.to_datetime(df['end_date'])
    
    month_order = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ]
    
    # Initialize ARR data structure
    arr_data = {month: {'monthly': 0, 'yearly': 0} for month in month_order}

    # For each month, calculate total ARR from active subscriptions
    for month_name in month_order:
        # Create a date for the first of the current month in 2024
        current_month = pd.to_datetime(f'2024-{month_order.index(month_name) + 1}-01')
        
        # Filter active subscriptions for this month
        active_monthly = df[
            (df['plan'] == 'monthly') & 
            (df['start_date'] <= current_month) & 
            (df['end_date'] >= current_month)
        ]
        
        active_yearly = df[
            (df['plan'] == 'yearly') & 
            (df['start_date'] <= current_month) & 
            (df['end_date'] >= current_month)
        ]
        
        # Calculate ARR for monthly subscriptions
        for _, sub in active_monthly.iterrows():
            duration_days = (sub['end_date'] - sub['start_date']).days
            daily_rate = sub['price'] / duration_days
            arr_data[month_name]['monthly'] += daily_rate * 365
        
        # Calculate ARR for yearly subscriptions
        for _, sub in active_yearly.iterrows():
            arr_data[month_name]['yearly'] += sub['price']

    # Format data for response
    monthly = []
    yearly = []
    
    for month in month_order:
        monthly.append({
            'x': month[:3],
            'y': round(arr_data[month]['monthly'], 2)
        })
        yearly.append({
            'x': month[:3],
            'y': round(arr_data[month]['yearly'], 2)
        })

    data = [
        {
            'id': 'Yearly',
            'color': 'hsl(220, 60%, 40%)',
            'data': yearly
        },
        {
            'id': 'Monthly',
            'color': 'hsl(205 100% 50%)',
            'data': monthly
        }
    ]

    return JsonResponse(data, safe=False)