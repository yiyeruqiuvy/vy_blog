from django.db import models


class Article(models.Model):
    title = models.CharField('标题', max_length = 16,default = 'ttitle')
    content = models.TextField('内容', null=True)
    pub_time = models.DateTimeField('写作时间', null=True)
    a_id = models.IntegerField('序号', null=True)
    def __str__(self):
        return self.title