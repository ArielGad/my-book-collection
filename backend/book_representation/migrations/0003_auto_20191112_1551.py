# Generated by Django 2.1.11 on 2019-11-12 15:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('book_representation', '0002_auto_20190929_1145'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='date_published',
            field=models.IntegerField(),
        ),
    ]