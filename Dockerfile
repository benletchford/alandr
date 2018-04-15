FROM python:3

WORKDIR /usr/src/app

COPY server server
COPY www/build www/build

RUN pip install --no-cache-dir -r server/requirements.txt

CMD [ "python", "./server/alandr.py", "--data-directory=/data", "--host=0.0.0.0", "--port=80" ]
