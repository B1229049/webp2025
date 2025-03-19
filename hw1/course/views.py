from rest_framework import status
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework.decorators import api_view
from django.core.serializers.json import DjangoJSONEncoder
import json
import logging

from .models import Course
logger = logging.getLogger("django")

@api_view(['GET'])
def addcourse(request):
    Department = request.GET.get('Department', '')
    Course_Title = request.GET.get('Course_Title', '')
    Instructor = request.GET.get('Instructor', '')

    new_Course = Course()
    new_Course.Department = Department
    new_Course.Course_Title = Course_Title
    new_Course.Instructor = Instructor
    new_Course.save()
    logger.debug(" ************ myhello_api: " + Department)
    if Department:
        return Response({"data": Department + " insert:"}, status=status.HTTP_200_OK)
    else:
        return Response({"res": "parameter: name is None"}, 
                        status=status.HTTP_400_BAD_REQUEST
                        )
    
@api_view(['GET'])
def courselist(request):
    courses = Course.objects.all().values()
    return JsonResponse(list(courses), safe=False)
