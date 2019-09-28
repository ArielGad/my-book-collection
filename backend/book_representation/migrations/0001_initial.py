# Generated by Django 2.1.11 on 2019-09-28 19:27

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('author', models.CharField(max_length=140)),
                ('date_published', models.DateField()),
                ('language', models.CharField(max_length=140)),
                ('title', models.CharField(max_length=140)),
                ('wiki_link', models.URLField(blank=True)),
            ],
        ),
    ]
