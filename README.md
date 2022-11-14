# packform-test
Full-stack Software Engineer test

Configure the env file inside **api/app** path

Unpack the [csv file](https://s3.us-west-1.amazonaws.com/packform.documents/recruiting/test_data.tar.gz) on api/main/management/commands/data

With the virtual env activated run the on backend (at api/ path):

Create a file at *api/app/.env* with the custom content of *api/app/.env.sample*

`./manage.py migrate`

`python manage.py import_data`

`./manage.py runserver`

At the frontend path you can run:

`yarn install`

`yarn start`