"""Employees serializers."""

# Django REST Framework
from rest_framework import serializers

# Models
from rwu.users.models import User
from rwu.employees.models import Employee


class EmployeeModelSerializer(serializers.ModelSerializer):
    """Employee model serializer."""

    class Meta:
        """Meta class."""

        model = Employee
        fields = (
            'id',
            'name',
        )


class EmployeeCreateSerializer(serializers.ModelSerializer):
    """Employee create serializer.
    
    Handle create data and employee creation.
    """

    name = serializers.CharField(min_length=2, max_length=50)

    email = serializers.EmailField()

    title = serializers.CharField(min_length=2, max_length=50)

    schedule = serializers.CharField(min_length=2, max_length=50)

    apps = serializers.CharField(min_length=2, max_length=100)

    def validate(self, data):
        """Verify data."""
        
        return data

    def create(self, data):
        """Handle employee creation."""
        # employee = Employee.create(**data)
        employee = Employee.objects.create_employee(**data)
        return employee

    # class Meta:

    #     model = Employee

    #     fields = (
    #         'name',
    #         'email',
    #         'title',
    #         'schedule',
    #         'apps'
    #     )