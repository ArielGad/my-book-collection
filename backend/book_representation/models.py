from django.db import models


class Book(models.Model):
    author = models.CharField(max_length=140)
    date_published = models.DateField()
    language = models.CharField(max_length=140)
    title = models.CharField(max_length=140)
    wiki_link = models.URLField(blank=True)

    def __str__(self):
        return '{self.title} - {self.author}'.format(self=self)
