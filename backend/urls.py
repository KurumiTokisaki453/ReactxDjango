from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from . import views

router = routers.DefaultRouter()
router.register(r"task", views.TaskView, "task")

client = routers.DefaultRouter()
client.register(r"cliente", views.ClienteView, "cliente")

urlpatterns = [
    path("urls-v1/", include(router.urls)),
    path("urls-v2/", include(client.urls)),
    path("docs/", include_docs_urls(title="Backend API")),
]