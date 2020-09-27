'use strict'

const pool = require('../config/connection')
const Product = require('../models/Product')

const getProducts = async (request, response) => {
  pool.getConnection()
    .then(async conn => {
      let [rows, fields] = await conn.query(`select * from products;`)
      response.status(200).send({
        result: rows,
        status: 200
      })
    })
}

const insertProducts = (request, response) => {
  const { name, description, price, brand } = request.body
  let model = new Product(name, description, price, brand)

  pool.getConnection()
    .then(async conn => {
      try {
        let sql = `INSERT INTO products (name, description, price, brand) values (?,?,?,?)`
        let result = await conn.query(sql, Object.values(model))

        response.status(200).send({
          result: result,
          status: 200
        })
      } catch (error) {
        console.log(error);
      }
    })
}

const updateProducts = (request, response) => {
  const { productId, name, description, price, brand } = request.body
  let model = new Product(name, description, price, brand)

  pool.getConnection()
    .then(async conn => {
      try {
        let sql = `UPDATE products SET name=?, description=?, price=?, brand=? WHERE productId=?`
        model['productId'] = productId
        let result = await conn.query(sql, Object.values(model))

        response.status(200).send({
          result: result,
          status: 200
        })
      } catch (error) {
        console.log(error);
      }
    })
}

const deleteProducts = (request, response) => {
  let { productId } = request.params

  pool.getConnection()
    .then(async conn => {
      try {
        let sql = `DELETE FROM products WHERE productId=?`
        let result = await conn.query(sql, [productId])

        response.status(200).send({
          result: result,
          status: 200
        })
      } catch (error) {
        console.log(error);
      }
    })
}

module.exports = {
  getProducts,
  insertProducts,
  updateProducts,
  deleteProducts
}