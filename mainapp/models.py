from django.db import models
from django.contrib.auth.models import User


class Project(models.Model):
    name = models.CharField(max_length=32, unique=True)

    def __str__(self):
        return self.name


class ToDo(models.Model):
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)


class TodoProject(models.Model):
    project_id = models.ForeignKey(Project, on_delete=models.CASCADE)
    todo_id = models.ForeignKey(ToDo, on_delete=models.CASCADE)
