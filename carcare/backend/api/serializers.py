from rest_framework import serializers
from .models import CarBrand, CarModel, CarServiceRequest

class CarBrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarBrand
        fields = '__all__'

class CarModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarModel
        fields = '__all__'

class CarServiceRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarServiceRequest
        fields = '__all__'
