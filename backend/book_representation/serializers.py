from rest_framework import serializers
from .models import Book


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'author',
            'date_published',
            'language',
            'title',
            'wiki_link',
        )
        model = Book
