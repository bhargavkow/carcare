from django.db import models

class CarBrand(models.Model):
    CAR_BRAND = [
        ('audi', 'Audi'),
        ('mercedes', 'Mercedes'),
        ('lamborghini', 'Lamborghini'),
        ('bmw', 'BMW'),
        ('porsche', 'Porsche'),
        ('toyota', 'Toyota'),
        ('maruti', 'Maruti'),
        ('suzuki', 'Suzuki'),
        ('nissan', 'Nissan'),
        ('ford', 'Ford'),
        ('chevrolet', 'Chevrolet'),
        ('volkswagen', 'Volkswagen'),
        ('hyundai', 'Hyundai'),
        ('kia', 'Kia'),
        ('mazda', 'Mazda'),
        ('lexus', 'Lexus'),
    ]
    name = models.CharField(max_length=50, choices=CAR_BRAND)

    def __str__(self):
        return self.name

class CarModel(models.Model):
    brand = models.ForeignKey(CarBrand, on_delete=models.CASCADE, related_name='models')
    name = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.brand.name} {self.name}"

class CarServiceRequest(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone_number = models.CharField(max_length=15)
    car_brand = models.ForeignKey(CarBrand, on_delete=models.CASCADE)
    car_model = models.ForeignKey(CarModel, on_delete=models.CASCADE)
    
    SERVICE_CHOICES = [
        ('oil_change', 'Oil Change'),
        ('tire_rotation', 'Tire Rotation'),
        ('brake_inspection', 'Brake Inspection'),
        ('engine_repair', 'Engine Repair'),
        ('car_wash', 'Car Wash'),
    ]

    service_name = models.CharField(max_length=50, choices=SERVICE_CHOICES)
    service_price = models.DecimalField(max_digits=10, decimal_places=2)
    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.service_name} - ${self.service_price}"
