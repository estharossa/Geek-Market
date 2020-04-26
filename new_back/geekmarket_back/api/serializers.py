from rest_framework import serializers
from api.models import Product, Category


class CategorySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()

    def create(self, validated_data):
        category = Category.objects.create(name=validated_data.get('name'))
        return category

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.save()
        return instance


class CategorySerializer2(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name')


class ProductSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    description = serializers.CharField()
    image = serializers.CharField()
    price = serializers.FloatField()
    category_id = serializers.IntegerField(write_only=True)

    def create(self, validated_data):
        category = Category.objects.create(name=validated_data.get('name'),
                                           description=validated_data.get('description'),
                                           image=validated_data.get('image'),
                                           price=validated_data.get('price'),
                                           category_id=validated_data.get('category_id'))
        return category

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.name = validated_data.get('description', instance.description)
        instance.name = validated_data.get('image', instance.image)
        instance.name = validated_data.get('price', instance.price)
        instance.name = validated_data.get('category_id', instance.category_id)
        instance.save()
        return instance


class ProductSerializer2(serializers.ModelSerializer):
    # Nested Serializers
    # company = CompanySerializer2(read_only=True)
    category_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = Product
        fields = ('id', 'name', 'description', 'image', 'price', 'category_id',)


class CategoryWithProductsSerializer(serializers.ModelSerializer):
    # products = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    # products = serializers.StringRelatedField(many=True, read_only=True)
    products = ProductSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = ('id', 'name', 'products',)
