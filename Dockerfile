FROM danlynn/ember-cli:2.12.1

RUN npm cache clean -f
RUN npm install -g n
RUN n 7.8.0
RUN ln -sf /usr/local/n/versions/node/7.8.0/bin/node /usr/bin/node

COPY package.json package.json
RUN npm install

COPY . /myapp

CMD ["ember","server"]
EXPOSE 4200