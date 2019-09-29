from rest_framework import serializers
from .models import Book


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'author',
            'title',
            'date_published',
        )
        model = Book
