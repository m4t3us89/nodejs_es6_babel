import express from 'express'
import morgan from 'morgan'
import routes from './app/routes_root'

const app = express()

app.use(morgan('dev'))
app.use(express.json())


routes.forEach(router=>router(app))

app.listen(3333)

