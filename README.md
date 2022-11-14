# packform-test
Full-stack Software Engineer test

Configure the env file inside **api/app** path

Unpack the [csv file](https://www.linkedin.com/safety/go?url=https%3A%2F%2Fs3.us-west-1.amazonaws.com%2Fpackform.documents%2Frecruiting%2Ftest_data.tar.gz&trk=flagship-messaging-web&messageThreadUrn=urn%3Ali%3AmessagingThread%3A2-YTIxMTAwMmYtMWM2MC00ZDQzLWFmMGItMWRhZDI2NzlhZmJjXzAxMA%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BcT9s0D6LRq%2BAK9jb2Mb3qA%3D%3D) on api/main/management/commands/data

With the virtual env activated run the on backend (at api/ path):

Create a file at *api/app/.env* with the custom content of *api/app/.env.sample*

`./manage.py migrate`

`python manage.py import_data`

`./manage.py runserver`

At the frontend path you can run:

`yarn install`

`yarn start`