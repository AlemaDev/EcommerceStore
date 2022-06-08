from django.db import models
from django.core.files import File # esto lo usamos para crear thumbnails y eso

from io import BytesIO #esto lo agregamos porque vamos a manejar imagenes
from PIL import Image #esto es de pillow


#un primer ejemplo de modelo podria ser asi
#producto debe referenciar un vendedor tambien

class Category(models.Model):
    name = models.CharField(max_length=255)
    slug = models.SlugField() #this is the address version of the name
    
    class Meta:#these are options for the model
        ordering = ('name',)
    
    def __str__(self):
        return self.name
    
    def get_absolute_url(self):
        return f'/{self.slug}/'

class Product(models.Model):
    category = models.ForeignKey(Category, related_name='products', on_delete=models.CASCADE) # on_delete sirve para que cuando eliminemos una categoria se eliminen los productos asociados
    name = models.CharField(max_length=255)
    slug = models.SlugField() #this is the address version of the name
    description = models.TextField(blank=True, null=True)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    image = models.ImageField(upload_to='uploads/', blank=True, null=True)
    thumbnail = models.ImageField(upload_to='uploads/', blank=True, null=True)
    date_added = models.DateTimeField(auto_now_add=True)

    class Meta:#these are options for the model
        ordering = ('-date_added',) #asi lo ordenamos de forma descendente

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return f'/{self.category.slug}/{self.slug}/'

    def get_image(self):
        if self.image:
            return 'http://127.0.0.1:8000' + self.image.url
        return ''

    def get_thumbnail(self):
        if self.thumbnail:
            return 'http://127.0.0.1:8000' + self.thumbnail.url
        else:
            if self.image:
                self.thumbnail = self.make_thumbnail(self.image)
                self.save()
                return 'http://127.0.0.1:8000' + self.thumbnail.url
            else:
                return ''

    def make_thumbnail(self, image, size=(300, 200)):
        img = Image.open(image)
        img.convert('RGB')
        img.thumbnail(size)
        thumb_io = BytesIO()
        img.save(thumb_io, 'JPEG', quality=85)
        thumbnail = File(thumb_io, name=image.name)
        return thumbnail
