from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from mainapp.views import UserViewSet, TodoViewSet, TodoProjectViewSet, ProjectViewSet

router = DefaultRouter()

router.register('user_base', UserViewSet)
router.register('todo_base', TodoViewSet)
router.register('pj_base', ProjectViewSet)
router.register('pj_to_users_base', TodoProjectViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('viewsets_api/', include(router.urls)),
]
