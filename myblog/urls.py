from django.urls import path, re_path

from . import views
app_name = 'blog'
urlpatterns = [
    re_path(r'^home/$', views.home_page, name = 'home'),
    path('article/<int:article_id>/', views.article_page, name = 'article_page'),
    path('new_article/<int:article_id>/', views.new_article, name = 'new_article'),
    path('edit_article/', views.edit_article, name = 'edit_article')
]