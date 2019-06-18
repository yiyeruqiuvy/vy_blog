from django.shortcuts import render

from django.http import HttpResponse

from . import models


def home_page(request):
    articles = models.Article.objects.all()
    return render(request, 'myblog/blog.html', {'articles':articles})

def article_page(request, article_id):
    articles = models.Article.objects.all()
    article = models.Article.objects.get(pk = article_id)
    return render(request, 'myblog/article_page.html',{'article':article, 'articles':articles})

def new_article(request, article_id):
    if(str(article_id) == '0'):
        return render(request, 'myblog/new_article.html')
    else:
        article = models.Article.objects.get(pk = article_id)
        return render(request, 'myblog/new_article.html',{'article':article})

def edit_article(request):
    title = request.POST.get('title','title')
    content = request.POST.get('content', 'content')

    article_id = request.POST.get('article_id', '0')
    if(article_id == '0'):
        models.Article.objects.create(title=title, content=content)
        articles = models.Article.objects.all()
        return render(request, 'myblog/blog.html', {'articles':articles})
    else:
        article = models.Article.objects.get(pk = article_id)
        article.title = title
        article.content = content
        article.save()
        return render(request, 'myblog/article_page.html', {'article':article})


