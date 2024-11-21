import pandas as pd
from django.http import JsonResponse
from django.conf import settings
import os

def get_csv_data(request):
    csv_path = os.path.join(settings.BASE_DIR, "stripe/static/data/stripe_payments.csv")
    df = pd.read_csv(csv_path)
    df['start_date'] = pd.to_datetime(df['start_date'])
 
    grouped = df.groupby('start_date').sum().reset_index()

    # Convert to JSON
    data = grouped.to_dict(orient="records")
    return JsonResponse(data, safe=False)
