# Generated by Django 4.1.3 on 2022-11-13 21:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Company',
            fields=[
                ('company_id', models.IntegerField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Costumer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_id', models.CharField(max_length=20, unique=True)),
                ('login', models.CharField(max_length=20, unique=True)),
                ('name', models.CharField(max_length=50)),
                ('company', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.company')),
            ],
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('order_name', models.CharField(max_length=20, unique=True)),
                ('created_at', models.DateTimeField()),
                ('costumer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.costumer')),
            ],
        ),
        migrations.CreateModel(
            name='OrderItems',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('price_per_unit', models.FloatField()),
                ('quantity', models.IntegerField()),
                ('product', models.CharField(max_length=20)),
                ('order', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.order')),
            ],
        ),
        migrations.CreateModel(
            name='Delivery',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('delivered_quantity', models.IntegerField()),
                ('order_item', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.orderitems')),
            ],
        ),
    ]
