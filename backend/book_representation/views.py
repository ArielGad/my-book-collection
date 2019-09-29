from rest_framework import generics

from .models import Book
from .serializers import BookSerializer


class ListOfBooks(generics.ListCreateAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer


class DetailBook(generics.RetrieveUpdateDestroyAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
