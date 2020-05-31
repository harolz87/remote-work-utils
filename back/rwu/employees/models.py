"""Employees model."""

# Django
from django.db import models

#Utilities
from rwu.utils.models import RwuModel

#models
from rwu.users.models.users import User

class Employee(RwuModel):
    """Employee model.

    Extend from rwu's base model, create a foreign key with user id.
    """
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField('name', max_length=50)
    email = models.EmailField('email address', max_length=50)
    title = models.CharField('title at company', max_length=50)
    schedule = models.CharField('schedule job', max_length=50)
    apps = models.CharField('Apps assigned', max_length=100, default='[]')

    is_active = models.BooleanField(default=True)

    REQUIRED_FIELDS = ['name', 'email', 'title', 'schedule']

    # @classmethod
    # def create(cls, **kwargs):
    #     obj = cls(**kwargs)
    #     return obj

    def __str__(self):
        """Return name and email."""
        return self.name + " - " + self.email

    def get_short_name(self):
        """Return name."""
        return self.name

    class Meta:
        """Meta option."""

        abstract = False