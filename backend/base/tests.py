import email
from django.test import TestCase
from base.models import Product, Review
from base.serializers import ProductSerializer
from django.contrib.auth.models import User

# Create your tests here.
class TestProducts(TestCase):
    def setUp(self):
        Product.objects.create(name='test')
        Product.objects.create(name='test1')
    
    
class TestRegister(TestCase):
    def setUp(self):
        User.objects.create(first_name='TestPerson',email='Test@email.com')
        User.objects.create(first_name='TestPerson',email='Test@email.com')


class TestUserDetails(TestCase):
    def setUp(self):
        User.objects.create(first_name='TestPerson',email='Test@email.com')
        User.objects.create(first_name='TestPerson',email='Test@email.com')
    def setUp(self):
        TestPerson = User.objects.get(name='TestPerson')
        self.assertEqual(TestPerson.email)

class TestOrderDetails(TestCase):
    def setUp(self):
        Product.objects.create(user='test')
        Product.objects.create(name='test1')
    def setUp(self):
        TestPerson = User.objects.get(name='TestPerson')
        print(TestPerson)
