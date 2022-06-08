#! /bin/bash
## use with source "filename"

read -p "Do you want to run the django app too? [y/n]" answer
if [[ $answer = y ]] ; then
    source venv/bin/activate && cd django_back && python3 manage.py runserver
else
    source venv/bin/activate
fi