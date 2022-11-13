from rest_framework import serializers
from .models import Order, Costumer, Company, Delivery, OrderItems


class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'


class CostumerSerializer(serializers.ModelSerializer):
    company = CompanySerializer()

    class Meta:
        model = Costumer
        fields = ('user_id', 'login', 'name', 'company')


class DeliveredSerializer(serializers.ModelSerializer):
    class Meta:
        model = Delivery
        fields = '__all__'


class ItemsSerializer(serializers.ModelSerializer):
    delivered = DeliveredSerializer(many=True)

    class Meta:
        model = OrderItems
        fields = '__all__'


class OrderSerializer(serializers.ModelSerializer):
    costumer = CostumerSerializer()
    items = ItemsSerializer( many=True)

    class Meta:
        model = Order
        fields = '__all__'
