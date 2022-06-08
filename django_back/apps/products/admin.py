from django.contrib import admin

from .models import Category, Product
#voy a crear productos de prueba con esto
admin.site.register(Category)
admin.site.register(Product)