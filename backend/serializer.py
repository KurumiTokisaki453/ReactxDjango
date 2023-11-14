from rest_framework import serializers
from .models import Task, Cliente

# Ejemplos con Task,Cliente.
class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = '__all__'