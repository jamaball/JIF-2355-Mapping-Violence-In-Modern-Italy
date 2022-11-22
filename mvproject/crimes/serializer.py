from rest_framework import serializers
from . models import *
  
class MvSerializer(serializers.ModelSerializer):
    class Meta:
        model = Crime
        fields = ['id', 'date', 'location', 'weapon', 'conviction', 'description']