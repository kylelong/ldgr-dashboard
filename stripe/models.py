from django.db import models

class StripeData(models.Model):
    date = models.DateField()
    revenue = models.FloatField()
