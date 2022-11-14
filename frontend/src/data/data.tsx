export const data = {
    "count": 10,
    "next": "http://localhost:8000/orders/?limit=5&offset=5",
    "previous": null,
    "results": [
        {
            "id": 1,
            "costumer": {
                "user_id": "ivan",
                "login": "ivan",
                "name": "Ivan Ivanovich",
                "company": {
                    "company_id": 1,
                    "name": "Roga & Kopyta"
                }
            },
            "items": [
                {
                    "id": 1,
                    "delivered": [
                        {
                            "id": 1,
                            "delivered_quantity": 5,
                            "order_item": 1
                        }
                    ],
                    "price_per_unit": 1.3454,
                    "quantity": 10,
                    "product": "Corrugated Box",
                    "order": 1
                },
                {
                    "id": 11,
                    "delivered": [],
                    "price_per_unit": 45.2334,
                    "quantity": 20,
                    "product": "Hand sanitizer",
                    "order": 1
                }
            ],
            "order_name": "PO #001-I",
            "created_at": "2020-01-02T15:34:12Z"
        },
        {
            "id": 2,
            "costumer": {
                "user_id": "ivan",
                "login": "ivan",
                "name": "Ivan Ivanovich",
                "company": {
                    "company_id": 1,
                    "name": "Roga & Kopyta"
                }
            },
            "items": [
                {
                    "id": 2,
                    "delivered": [
                        {
                            "id": 2,
                            "delivered_quantity": 11,
                            "order_item": 2
                        }
                    ],
                    "price_per_unit": 23.14,
                    "quantity": 11,
                    "product": "Corrugated Box",
                    "order": 2
                },
                {
                    "id": 12,
                    "delivered": [],
                    "price_per_unit": 0.0,
                    "quantity": 21,
                    "product": "Hand sanitizer",
                    "order": 2
                }
            ],
            "order_name": "PO #002-I",
            "created_at": "2020-01-15T17:34:12Z"
        },
        {
            "id": 3,
            "costumer": {
                "user_id": "ivan",
                "login": "ivan",
                "name": "Ivan Ivanovich",
                "company": {
                    "company_id": 1,
                    "name": "Roga & Kopyta"
                }
            },
            "items": [
                {
                    "id": 3,
                    "delivered": [
                        {
                            "id": 3,
                            "delivered_quantity": 12,
                            "order_item": 3
                        }
                    ],
                    "price_per_unit": 123.0345,
                    "quantity": 12,
                    "product": "Corrugated Box",
                    "order": 3
                },
                {
                    "id": 13,
                    "delivered": [],
                    "price_per_unit": 273.1234,
                    "quantity": 22,
                    "product": "Hand sanitiZER",
                    "order": 3
                }
            ],
            "order_name": "PO #003-I",
            "created_at": "2020-01-05T05:34:12Z"
        },
        {
            "id": 4,
            "costumer": {
                "user_id": "ivan",
                "login": "ivan",
                "name": "Ivan Ivanovich",
                "company": {
                    "company_id": 1,
                    "name": "Roga & Kopyta"
                }
            },
            "items": [
                {
                    "id": 4,
                    "delivered": [
                        {
                            "id": 4,
                            "delivered_quantity": 3,
                            "order_item": 4
                        },
                        {
                            "id": 13,
                            "delivered_quantity": 5,
                            "order_item": 4
                        }
                    ],
                    "price_per_unit": 0.0,
                    "quantity": 13,
                    "product": "Corrugated Box",
                    "order": 4
                },
                {
                    "id": 14,
                    "delivered": [],
                    "price_per_unit": 11.45,
                    "quantity": 23,
                    "product": "Hand sanitizer",
                    "order": 4
                }
            ],
            "order_name": "PO #004-I",
            "created_at": "2020-02-02T15:34:12Z"
        },
        {
            "id": 5,
            "costumer": {
                "user_id": "ivan",
                "login": "ivan",
                "name": "Ivan Ivanovich",
                "company": {
                    "company_id": 1,
                    "name": "Roga & Kopyta"
                }
            },
            "items": [
                {
                    "id": 5,
                    "delivered": [],
                    "price_per_unit": 100.0,
                    "quantity": 14,
                    "product": "Corrugated Box",
                    "order": 5
                },
                {
                    "id": 15,
                    "delivered": [],
                    "price_per_unit": 12.467,
                    "quantity": 24,
                    "product": "Hand sanitizer",
                    "order": 5
                }
            ],
            "order_name": "PO #005-I",
            "created_at": "2020-01-03T10:34:12Z"
        }
    ]
}