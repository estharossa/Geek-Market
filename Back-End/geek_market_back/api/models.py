from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=300)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
        }


class Product(models.Model):
    name = models.CharField(max_length=300)
    description = models.TextField(default='Product descriptions')
    image = models.CharField(max_length=300)
    price = models.FloatField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'image': self.image,
            'price': self.price,
            'category': self.category.name
        }

class User(models.Model):
    Name = models.CharField(max_length=300)
    Surname = models.CharField(max_length=300)
    login = models.CharField(max_length=300)
    password = models.CharField(max_length=300)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.Name,
            'description': self.Surname,
            'image': self.login,
            'price': self.password
        }

class Admin(models.Model):
    nickname = models.CharField(max_length=300)
    login = models.CharField(max_length=300)
    password = models.CharField(max_length=300)

    def to_json(self):
        return {
            'id': self.id,
            'nickname': self.nickname,
            'login': self.login,
            'password': self.password
        }

