from django.db import models

class Course(models.Model):
    Department = models.CharField(max_length=100)
    Course_Title = models.CharField(max_length=100)
    Instructor = models.CharField(max_length=100)
