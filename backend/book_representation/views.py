from common.utils import get_wiki_link
from rest_framework import generics
from .models import Book
from .serializers import BookSerializer


class ListOfBooks(generics.ListCreateAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

    def post(self, request, *args, **kwargs):
        request.data['wiki_link'] = get_wiki_link(request.data['title'])
        return self.create(request, *args, **kwargs)


class DetailBook(generics.RetrieveUpdateDestroyAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
