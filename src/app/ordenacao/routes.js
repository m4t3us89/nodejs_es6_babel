import express from 'express'
import Ordernacao from './'

const router = express.Router()

router.get('' , Ordernacao.list )

export default app => app.use('/order', router)

