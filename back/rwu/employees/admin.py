"""Employee models admin."""

# Django
from django.contrib import admin
from django.db  import models

# Models
from rwu.employees.models import Employee


# class Employee(models.Model):
#     """User model admin."""

#     list_display = ('name', 'email', 'title', 'schedule', 'is_active')
#     list_filter = ('is_active', 'created', 'modified')


admin.site.register(Employee)