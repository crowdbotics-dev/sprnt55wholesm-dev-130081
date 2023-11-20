from django.conf import settings
from django.db import models


class Dfeg(models.Model):
    "Generated Model"
    vaw1 = models.BigIntegerField()
    vaw2 = models.CharField(
        max_length=255,
    )
    vaw3 = models.TextField()
