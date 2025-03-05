from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Create your views here.

# def myIndex(request):
#     my_name = request.POST.get('name', "CGU")
#     return HttpResponse("hello " + my_name)

class HelloApiView(APIView):
    def get(self, request):
        my_name = request.GET.get('name', None)
        if my_name:
            retValue = {}
            retValue['data'] = 'Hello ' + my_name
            return Response(retValue, status=status.HTTP_200_OK)
        else:
            return Response(
                {"res": "parameter: name is None"},
                status = status.HTTP_400_BAD_REQUEST
            )

