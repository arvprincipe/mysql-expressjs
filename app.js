'use strict'

const express = require('express')

const app = express()
const PORT = 80;

// routes
const ProductRoutes = require('./routes/product.routes')

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', ProductRoutes)

app.listen(PORT, () => {
  console.log(`[SERVER] is running in http://localhost:${PORT}`)
})