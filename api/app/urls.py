from django.urls import path

import main.views
from main.views import OrderViewSet
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('orders/', OrderViewSet.as_view()),
]
