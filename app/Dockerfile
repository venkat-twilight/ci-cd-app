FROM node:alpine
WORKDIR /app
COPY . /app
COPY package.json .
# ENV PATH="./node_modules/.bin:$PATH"
RUN npm install
COPY . .
EXPOSE 3000
# RUN npm run build
CMD ["npm", "start"]

# ==========================================

# FROM node:alpine AS build
# WORKDIR /app/build

# COPY package.json package.json
# COPY package-lock.json package-lock.json
# RUN npm ci

# COPY public/ public
# COPY src/ src
# RUN npm run build