# Generated by Django 5.1.2 on 2024-10-20 02:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('social', '0009_rename_notification_notification_notification_type_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='uploads/post_photos'),
        ),
    ]
