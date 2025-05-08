from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from django.views.decorators.http import require_http_methods
from rest_framework import permissions
from django.http import JsonResponse


@permission_classes((permissions.IsAuthenticated,))
@require_http_methods(["GET"])
@api_view(["GET"])
def example_endpoint(request):
    """
    Example endpoint that returns a JSON response.
    """
    data = {
        "message": "Hello, this is an example endpoint!",
        "user": request.user.username,
    }
    return JsonResponse(data, status=200)
