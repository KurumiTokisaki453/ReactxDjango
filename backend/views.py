from rest_framework import viewsets
from .serializer import TaskSerializer,ClienteSerializer
from .models import Task,Cliente

# Crea tus vistas (views) aquí.

class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all() 

class ClienteView(viewsets.ModelViewSet):
    serializer_class = ClienteSerializer
    queryset = Cliente.objects.all()