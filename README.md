# mysql-expressjs
REST API Express JS y MySQL

My name is Alex Principe. I'm a Full stack developer who shares programming code with the community.
This repo contains a little example of rest api build using javascript and express js and MySQL- MVC.
![alt text](https://github.com/arvprincipe/mysql-expressjs/blob/master/img/api.jpg?raw=true)

## 👋 Say Hello

Instagram: [@arvprincipe](https://www.instagram.com/arvprincipe/) - My favorite place to post & share stories<br>
Facebook: [@arvprincipeweb](https://www.facebook.com/arvprincipeweb) - Catch all my posts & where I announce things<br>
Linkedin: [@arvprincipe](https://www.linkedin.com/in/arvprincipe/) - My profile to contact<br>


## Download & Share

Absolutely!! You are welcome to dowload and share my code. . If you've gotten any value from my content and would like to help me reach more people, please do share!

## Contribution

Yes! Anyone is welcome to contribute to the quality of this content. Please feel free to submit a PR request for typo fixes, spelling corrections, explanation improvements, etc.


## start the project

- clone this repo
```bash
npm install
```
- Configure you database credentials

- init server
```bash
npm start
```

test the http paths
- http://<host>:<poort>/api/products  GET

- http://<host>:<poort>/api/products  POST
```json
{
  "name": "ACER LAPTOP",
  "description": "Laptop A515-55-52W0 de Acer.",
  "price": "2300",
  "brand": "Acer"
}
```

- http://<host>:<poort>/api/products  PUT
```json
{
  "productId": 2,
  "name": "ACER LAPTOP",
  "description": "Laptop A515-55-52W0 de Acer",
  "price": "2300",
  "brand": "Acer"
}
```

- http://<host>:<poort>/api/products/:productId DELETE