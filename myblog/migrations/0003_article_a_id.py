# Generated by Django 2.2.2 on 2019-06-18 01:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myblog', '0002_auto_20190617_1205'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='a_id',
            field=models.IntegerField(null=True, verbose_name='序号'),
        ),
    ]
