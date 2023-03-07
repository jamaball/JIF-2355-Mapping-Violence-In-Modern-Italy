# Generated by Django 4.1.5 on 2023-03-03 21:53

import django.contrib.gis.db.models.fields
import django.contrib.gis.geos.point
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('crimes', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='crime',
            name='coordinates',
            field=django.contrib.gis.db.models.fields.PointField(default=django.contrib.gis.geos.point.Point(0.0, 0.0), geography=True, srid=4326),
        ),
    ]
