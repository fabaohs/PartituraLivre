import express from 'express'
import { config } from 'process'
import router from './src/routes/routes'

const app = express()
const port = process.env.PORT || 3000
const apiErrorHandler = require('./src/middlewares/apiErrorHandler')

app.use('/', router)

app.use(apiErrorHandler)

app.listen(port, () => {
   console.log('Server is running!')
})