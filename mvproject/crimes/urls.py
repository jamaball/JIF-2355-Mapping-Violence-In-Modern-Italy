from django.urls import path, re_path, include
from crimes import views

 
urlpatterns = [ 
    path('api/crimes', views.handle, name="handle")
]