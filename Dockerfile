FROM python:3.8-alpine

ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

RUN mkdir /mapping_violence

WORKDIR /mapping_violence

COPY ./requirements.txt .

RUN apk add gcc libc-dev libffi-dev libffi libressl postgresql-libs 
RUN apk add --virtual .build-deps --no-cache postgresql-dev gcc python3-dev musl-dev && \
        pip install --no-cache-dir -r requirements.txt && \
        apk --purge del .build-deps 



COPY . .


