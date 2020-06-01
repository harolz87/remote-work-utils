"""Employees URLs."""

# Django
from django.urls import include, path

# Django REST Framework
from rest_framework.routers import DefaultRouter

# Views
from .views import employees as employee_views

router = DefaultRouter()
router.register(r'employees', employee_views.EmployeeViewSet, basename='employees')

urlpatterns = [
    path('', include(router.urls))
]