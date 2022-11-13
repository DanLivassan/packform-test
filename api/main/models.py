from django.db import models


class Company(models.Model):
    company_id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=50)


class Costumer(models.Model):
    user_id = models.CharField(max_length=20, unique=True)
    login = models.CharField(max_length=20, unique=True)
    name = models.CharField(max_length=50)
    company = models.ForeignKey(Company)


class Order(models.Model):
    id = models.IntegerField(primary_key=True)
    costumer = models.ForeignKey(Costumer)
    order_name = models.CharField(max_length=20, unique=True)
    created_at = models.DateTimeField()


class OrderItems(models.Model):
    id = models.IntegerField(primary_key=True)
    order = models.ForeignKey(Order)
    price_per_unit = models.FloatField()
    quantity = models.IntegerField()
    product = models.CharField(max_length=20)


class Delivery(models.Model):
    id = models.IntegerField(primary_key=True)
    order_item = models.ForeignKey(OrderItems)
    delivered_quantity = models.IntegerField()
