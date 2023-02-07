# Generated by Django 4.1.5 on 2023-02-02 23:27

import django.contrib.gis.db.models.fields
import django.contrib.gis.geos.point
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('crimes', '0002_alter_crime_location'),
    ]

    operations = [
        migrations.AddField(
            model_name='crime',
            name='coordinates',
            field=django.contrib.gis.db.models.fields.PointField(default=django.contrib.gis.geos.point.Point(0.0, 0.0), geography=True, srid=4326),
        ),
        migrations.AlterField(
            model_name='crime',
            name='location',
            field=models.CharField(max_length=250),
        ),
    ]