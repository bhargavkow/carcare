# Generated by Django 5.1.1 on 2024-09-23 09:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_carbrand_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='carbrand',
            name='name',
            field=models.CharField(choices=[('audi', 'Audi'), ('mercedes', 'Mercedes'), ('lamborghini', 'Lamborghini'), ('bmw', 'BMW'), ('porsche', 'Porsche'), ('toyota', 'Toyota'), ('maruti', 'Maruti'), ('suzuki', 'Suzuki'), ('nissan', 'Nissan'), ('ford', 'Ford'), ('chevrolet', 'Chevrolet'), ('volkswagen', 'Volkswagen'), ('hyundai', 'Hyundai'), ('kia', 'Kia'), ('mazda', 'Mazda'), ('lexus', 'Lexus')], max_length=50),
        ),
    ]
