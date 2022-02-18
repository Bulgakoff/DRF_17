from django.contrib.auth.models import User
from rest_framework.serializers import ModelSerializer
from .models import Project, ToDo, TodoProject


class UserModelSerializer(ModelSerializer):  # 1
    class Meta:
        model = User
        fields = "__all__"


class ProjectModelSerializer(ModelSerializer):  # 2
    class Meta:
        model = Project
        fields = "__all__"


class ToDoModelSerializer(ModelSerializer):  # 3
    user_id = UserModelSerializer()
    class Meta:
        model = ToDo
        fields = "__all__"


class TodoProjectModelSerializer(ModelSerializer):  # 4
    project_id = ProjectModelSerializer()
    todo_id = ToDoModelSerializer()

    class Meta:
        model = TodoProject
        fields = "__all__"


