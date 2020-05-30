"""Django models utilities. """

# Django
from django.db import models

class RwuModel(models.Model):
    """Remote work utils base model.

    RwuModel acts as an abstract base class from which every
    other mopdel in the project will inherit. This class provides
    every table with the following attributes:
        + created (DateTime)): Store the datetime the object was created.
        + modified (DateTime): Store the last datetime the object was modified.
    """

    created = models.DateTimeField(
        'created at',
        auto_now_add=True,
        help_text='Date time on wich the object was created.'
    )

    modified = models.DateTimeField(
        'modified at',
        auto_now=True,
        help_text='Date time on wich the object was modified.'
    )

    class Meta:
        """Meta option."""

        abstract = True

        get_latest_by = 'created'
        ordering = ['-created', '-modified']
