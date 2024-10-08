from django.conf import settings
from django.http import HttpResponse
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny
from django.contrib.auth.hashers import make_password
from django.contrib.auth import authenticate, login, logout
from .models import CarBrand, CarModel, CarServiceRequest
from .serializers import CarBrandSerializer, CarModelSerializer, CarServiceRequestSerializer
from django.core.mail import send_mail


class RegisterView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        email = request.data.get('email')

        if not username or not password or not email:
            return Response({'error': 'All fields are required'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            user = User.objects.create(
                username=username,
                email=email,
                password=make_password(password)
            )
            return Response({'message': 'User registered successfully'}, status=status.HTTP_201_CREATED)
        except:
            return Response({'error': 'Username already exists'}, status=status.HTTP_400_BAD_REQUEST)


class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        if not username or not password:
            return Response({'error': 'Please provide both username and password'}, status=status.HTTP_400_BAD_REQUEST)

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)


class CarBrandList(APIView):
    def get(self, request):
        brands = CarBrand.objects.all()
        serializer = CarBrandSerializer(brands, many=True)
        return Response(serializer.data)


class CarModelList(APIView):
    def get(self, request, brand_id):
        models = CarModel.objects.filter(brand__id=brand_id)
        serializer = CarModelSerializer(models, many=True)
        return Response(serializer.data)


class CarServiceRequestCreate(APIView):
    def post(self, request):
        serializer = CarServiceRequestSerializer(data=request.data)
        if serializer.is_valid():
            service_request = serializer.save()
            send_email(service_request)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LogoutView(APIView):
    def post(self, request):
        logout(request)  # Log the user out
        return Response({'message': 'Successfully logged out.'}, status=200)


def send_email(service_request):
    subject = 'Service Request Confirmation'
    message = (
        f'Thank you {service_request.name} for booking our service!\n'
        f'Service Name: {service_request.service_name}\n'
        f'Total Amount: {service_request.service_price}\n'
    )
    recipient_list = [service_request.email]
    email_from = settings.EMAIL_HOST_USER

    try:
        send_mail(subject, message, email_from, recipient_list)
        print('Email sent successfully.')
    except Exception as e:
        print(f'Error sending email: {str(e)}')
