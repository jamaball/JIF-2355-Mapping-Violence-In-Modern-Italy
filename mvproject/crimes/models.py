from django.db import models
from django.contrib.gis.db import models
from django.contrib.gis.geos import Point

# Create your models here.
class Crime(models.Model):
    id = models.IntegerField(primary_key=True)
    date = models.DateField()
    location = models.CharField(max_length=250)
    weapon = models.CharField(max_length=250)
    conviction = models.CharField(max_length=250)
    description = models.TextField()
    coordinates = models.PointField(geography=True, default=Point(0.0, 0.0))
    def __str__(self):
        return self.id
