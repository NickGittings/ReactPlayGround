from django.db import models

# Create your models here.
class City(models.Model):
    id = models.BigIntegerField
    name = models.CharField(max_length=20)
    state = models.CharField(max_length=20)

    def _str_(self):
        return self.name