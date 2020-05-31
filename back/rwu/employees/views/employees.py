"""Employees view."""

# Django
from django.core import serializers

# Django REST Framework
from rest_framework import mixins, status, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

# Permissions
from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated
)
from rwu.users.permissions import IsAccountOwner

# Serializers
from rwu.employees.serializers.employees import EmployeeModelSerializer, EmployeeCreateSerializer

# Models
from rwu.users.models import User
from rwu.employees.models import Employee

class EmployeeViewSet(mixins.RetrieveModelMixin,
                  mixins.UpdateModelMixin,
                  viewsets.GenericViewSet):
    """Employee view set.

    Handle create and list.
    """

    def get_permissions(self):
        """Assign permissions based on action."""
        if self.action in ['create']:
            permissions = [IsAuthenticated, IsAccountOwner]
        else:
            permissions = [AllowAny]

        return [p() for p in permissions]

    @action(detail=False, methods=['post'])
    def new(self, request):
        """Employee create."""
        employee = Employee()
        employee.name = request.data['name']
        employee.email = request.data['email']
        employee.title = request.data['title']
        employee.schedule = request.data['schedule']
        employee.apps = request.data['apps']

        user_id = request.data['user']
        employee.user = User.objects.get(pk=int(user_id))

        employee.save()

        data = EmployeeModelSerializer(employee).data
        return Response(data, status=status.HTTP_201_CREATED)

    @action(detail=False, methods=['get'])
    def get(self, request):
        """Employee show list"""
        user = int(request.data['user'])

        employees = Employee.objects.filter(user=user)

        data = {
            'error':'',
            'body':''
        }

        if not employees:
            data['error'] = 'Not found'            
            return Response(data, status=status.HTTP_400_BAD_REQUEST)

        employees_json = serializers.serialize('json', employees) 

        data['body'] = employees_json

        return Response(data, status=status.HTTP_200_OK)
        

