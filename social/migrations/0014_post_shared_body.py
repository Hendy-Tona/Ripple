# Generated by Django 5.1.2 on 2024-10-20 07:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('social', '0013_tag_comment_tags_post_tags'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='shared_body',
            field=models.TextField(blank=True, null=True),
        ),
    ]
