from django.urls import path, include
from .api import RegisterAPI
from knox import views as knox_views
from .api import LoginAPI

urlpatterns = [
    path('api/auth', include('knox.urls')),
    path('api/auth/register', RegisterAPI.as_view()),
    path('api/auth/login', LoginAPI.as_view())
]