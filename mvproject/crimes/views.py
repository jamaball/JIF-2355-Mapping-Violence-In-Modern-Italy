from django.shortcuts import render
from rest_framework.decorators import api_view
from . models import *
from .serializer import *
from rest_framework.response import Response

# Create your views here.
@api_view(['GET',])
def get(request):
    data = Crime.objects.all()
    serializer = MvSerializer(data, context={'request': request}, many=True)

    return Response(serializer.data)