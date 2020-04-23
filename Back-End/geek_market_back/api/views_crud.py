import json
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from api.models import Category
from api.models import Product


@csrf_exempt
def category_list(request):
    if request.method == 'GET':
        categories = Category.objects.all()
        categories_json = [category.to_json() for category in categories]
        return JsonResponse(categories_json, safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        category = Category.objects.create(name=data.get('name'),)
        return JsonResponse(category.to_json())


def category_detail(request, category_id):
    try:
        category = Category.objects.get(id=category_id)
    except Category.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    return JsonResponse(category.to_json())


def product_list(request):
    products = Product.objects.all()
    products_json = [product.to_json() for product in products]
    return JsonResponse(products_json, safe=False)


def product_detail(request, product_id):
    try:
        product = Product.objects.get(id=product_id)
    except Product.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    return JsonResponse(product.to_json())


def category_vacancies(request, category_id):
    try:
        category = Category.objects.get(id=category_id)
    except Category.DoesNotExitst as e:
        return JsonResponse({'error': str(e)})
    products = category.product_set.all()
    products_json = [product.to_json() for product in products]
    return JsonResponse(products_json, safe=False)


def top_ten_products(request):
    products = Product.objects.order_by('-price')[:5]
    products_json = [product.to_json() for product in products]
    return JsonResponse(products_json, safe=False)