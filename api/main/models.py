from django.db import models


class Company(models.Model):
    company_id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=50)


class Costumer(models.Model):
    user_id = models.CharField(max_length=20, primary_key=True)
    login = models.CharField(max_length=20, unique=True)
    password = models.CharField(max_length=20, default='')
    name = models.CharField(max_length=50)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)


class Order(models.Model):
    id = models.IntegerField(primary_key=True)
    costumer = models.ForeignKey(Costumer, on_delete=models.CASCADE, default='')
    order_name = models.CharField(max_length=20)
    created_at = models.DateTimeField()


class OrderItems(models.Model):
    id = models.IntegerField(primary_key=True)
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='items')
    price_per_unit = models.FloatField()
    quantity = models.IntegerField()
    product = models.CharField(max_length=20)


class Delivery(models.Model):
    id = models.IntegerField(primary_key=True)
    order_item = models.ForeignKey(OrderItems, on_delete=models.CASCADE, related_name='delivered')
    delivered_quantity = models.IntegerField()
