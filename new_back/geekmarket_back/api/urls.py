from django.urls import path
from api.views_fbv import category_list, category_detail, product_list, product_detail, category_product, phone_list
# from api.views_crud import category_list, category_detail, product_list, product_detail, top_ten_products,
# category_vacancies
from api.views_crud import top_ten_products
from rest_framework_jwt.views import obtain_jwt_token


urlpatterns = [
    path('login/', obtain_jwt_token),
    path('categories/', category_list),
    path('categories/<int:category_id>', category_detail),
    path('products/', product_list),
    path('products/<int:product_id>', product_detail),
    path('categories/<int:pk>/products', category_product),
    path('products/top', top_ten_products),
    path('phones/', phone_list)
]