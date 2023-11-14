from django.db import models

# Create your models here.
class Task(models.Model):
    title = models.CharField(max_length=200)
    descripcion = models.TextField(blank=True)
    done = models.BooleanField(default=False)

    def __str__(self): # para ejecutar y mostrar el título en la clase.
        return self.title

class Cliente(models.Model):
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    ruc = models.CharField(max_length=13)
    direccion = models.CharField(max_length=200)
    fecha_nacimiento = models.DateField()
    usuario = models.CharField(max_length=100)
    contrasena = models.CharField(max_length=255, default='temporal_password')

    def __str__(self):
        return self.nombre + " " + self.usuario
