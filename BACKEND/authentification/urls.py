from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.HomeView.as_view(), name='get'),
    path('logout/', views.LogoutView.as_view(), name='logout')
]
