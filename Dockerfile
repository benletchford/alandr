FROM python:3

WORKDIR /usr/src/app

COPY server server
COPY www/build www/build

RUN pip install --no-cache-dir -r server/requirements.txt

CMD [ "python", "./server/alandr.py" ]
