from django.contrib.auth.models import User
from django.shortcuts import render
from rest_framework import viewsets

from .models import Project, TodoProject, ToDo
from .serializer import ProjectModelSerializer, UserModelSerializer, \
    ToDoModelSerializer, TodoProjectModelSerializer


# ===== for User (User) ===========================================
# ViewSets (наборы представлений) позволяют объединять
# несколько представлений в один набор. (или нет)

class UserViewSet(viewsets.ModelViewSet):
    # permission_classes = [AllowAny]
    serializer_class = UserModelSerializer
    queryset = User.objects.all()


# ===========ToD o=======================
class TodoViewSet(viewsets.ModelViewSet):
    # permission_classes = [AllowAny]
    serializer_class = ToDoModelSerializer
    queryset = ToDo.objects.all()


# ==============Project===============================
class ProjectViewSet(viewsets.ModelViewSet):
    # permission_classes = [AllowAny]
    serializer_class = ProjectModelSerializer
    queryset = Project.objects.all()


# ==============TodoProject===============================
class TodoProjectViewSet(viewsets.ModelViewSet):
    # permission_classes = [AllowAny]
    serializer_class = TodoProjectModelSerializer
    queryset = TodoProject.objects.all()