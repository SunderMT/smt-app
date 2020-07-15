FROM node:10.19.0

RUN yes | npm install -g @angular/cli

COPY smt-app /home/node/app

EXPOSE 4422

CMD [ "ng", "serve" , "--host=0.0.0.0", "--port", "4422"]