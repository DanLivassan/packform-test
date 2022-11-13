from django.core.management.base import BaseCommand
from main.models import OrderItems, Order, Costumer, Company, Delivery
import csv

COMPANIES_FILE = 'main/management/commands/data/Test task - Postgres - customer_companies.csv'
COSTUMER_FILE = 'main/management/commands/data/Test task - Postgres - customers.csv'
ORDERS_FILE = 'main/management/commands/data/Test task - Postgres - orders.csv'
ORDER_ITEMS_FILE = 'main/management/commands/data/Test task - Postgres - order_items.csv'
DELIVERY_FILE = 'main/management/commands/data/Test task - Postgres - deliveries.csv'


class Command(BaseCommand):
    help = 'Import all data from csv files at ./data directory'

    def handle(self, *args, **options):
        print('Starting...')
        print('Importing Companies...')
        Command.import_companies()
        print('Importing Costumers...')
        Command.import_costumers()
        print('Importing Orders...')
        Command.import_orders()
        print('Importing Orders Items...')
        Command.import_orders_items()
        print('Importing Deliveries...')
        Command.import_deliveries()
        print('Finish')

    @staticmethod
    def import_companies():
        with open(COMPANIES_FILE) as file:
            data = csv.reader(file)
            next(data, None)
            for row in data:
                raw_data = {'company_id': int(row[0]), 'name': row[1]}
                Company.objects.create(**raw_data)

    @staticmethod
    def import_costumers():
        with open(COSTUMER_FILE) as file:
            data = csv.reader(file)
            next(data, None)
            for row in data:
                raw_data = {'user_id': row[0], 'login': row[1], 'password': row[2], 'name': row[3],
                            'company_id': int(row[4])}
                Costumer.objects.create(**raw_data)

    @staticmethod
    def import_orders():
        with open(ORDERS_FILE) as file:
            data = csv.reader(file)
            next(data, None)
            for row in data:
                raw_data = {'id': int(row[0]), 'created_at': row[1], 'order_name': row[2], 'costumer_id': row[3],
                            }
                Order.objects.create(**raw_data)

    @staticmethod
    def import_orders_items():
        with open(ORDER_ITEMS_FILE) as file:
            data = csv.reader(file)
            next(data, None)
            for row in data:
                raw_data = {'id': int(row[0]), 'order_id': int(row[1]),
                            'price_per_unit': float(row[2]) if len(row[2]) > 0 else 0,
                            'quantity': int(row[3]), 'product': row[4]
                            }
                OrderItems.objects.create(**raw_data)

    @staticmethod
    def import_deliveries():
        with open(DELIVERY_FILE) as file:
            data = csv.reader(file)
            next(data, None)
            for row in data:
                raw_data = {'id': int(row[0]), 'order_item_id': int(row[1]),
                            'delivered_quantity': int(row[2]),
                            }
                Delivery.objects.create(**raw_data)
