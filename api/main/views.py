
from rest_framework import generics
from rest_framework.response import Response
from .serializers import OrderSerializer
from .models import Order


class OrderViewSet(generics.ListCreateAPIView):
    """
    A simple ViewSet for listing or retrieving users.
    """
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


