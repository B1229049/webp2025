# Generated by Django 5.1.7 on 2025-03-12 11:44

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Department', models.CharField(max_length=100)),
                ('Course_Title', models.CharField(max_length=100)),
                ('Instructor', models.CharField(max_length=100)),
            ],
        ),
    ]
