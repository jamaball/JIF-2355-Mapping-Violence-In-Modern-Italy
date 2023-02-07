from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.decorators import parser_classes
from rest_framework import viewsets
from rest_framework.parsers import JSONParser
from django.http import JsonResponse
from rest_framework import status
from . models import *
from .serializer import *
from rest_framework.response import Response

from crimes.models import Crime
from crimes.serializer import MvSerializer

# Create your views here.
@api_view(['GET','POST'])
def handle(request, format=None):
    if (request.method == 'GET'):
        data = Crime.objects.all()
        serializer = MvSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)
    if (request.method == 'POST'):
        crime_data = JSONParser().parse(request)
        mv_serializer = MvSerializer(data=crime_data)
        if mv_serializer.is_valid():
            mv_serializer.save()
            return JsonResponse(mv_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(mv_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# # @api_view(['POST'])
# # @parser_classes([JSONParser])
# # def post(request, format=None):
# #     """
# #     A view that can accept POST requests with JSON content.
# #     """
# #     return Response({'received data': request.data})

# # def get_points(request):
# #  cur = get_cursor()
# #  cur.execute(
# #   SELECT json_build_object(
# #   ‘type’, ‘Feature’,
# #   ‘geometry’, ST_AsGeoJSON(the_geom :: geometry) :: json,
# #   ‘properties’, json_build_object(
# #   ‘name’, name
# #   )
# #   ) jsonb FROM point_table; 
# #   )
# #  points = cur.fetchone()
# #  json_points = points[0]
# #   return JsonResponse(json_points)