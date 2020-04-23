from django.urls import path
from api.views_fbv import category_list, category_detail, product_list, product_detail, category_product
from api.views_crud import category_list, category_detail, product_list, product_detail, top_ten_products, \
    category_vacancies

urlpatterns = [
    path('categories/', category_list),
    path('categories/<int:category_id>', category_detail),
    path('products/', product_list),
    path('products/<int:product_id>', product_detail),
    path('categories/<int:pk>/products', category_product),
    path('products/top', top_ten_products)
]