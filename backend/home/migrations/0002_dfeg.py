# Generated by Django 3.2.23 on 2023-11-20 10:36

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('home', '0001_load_initial_data'),
    ]

    operations = [
        migrations.CreateModel(
            name='Dfeg',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('vaw1', models.BigIntegerField()),
                ('vaw2', models.CharField(max_length=255)),
                ('vaw3', models.TextField()),
            ],
        ),
    ]
