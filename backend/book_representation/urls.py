from django.urls import path

from . import views

urlpatterns = [
    path('', views.ListOfBooks.as_view()),
    path('<int:pk>/', views.DetailBook.as_view()),
]