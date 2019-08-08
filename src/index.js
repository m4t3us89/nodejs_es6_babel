import express from 'express'
import api from './services/axios'
import morgan from 'morgan'

const app = express()

app.use(morgan('dev'))
app.use(express.json())

app.get( '' , async (req,res) => {
    try{
        const { data } = await api.get('/todos')
        const todosOrderByAsc = data.sort( (a,b)=> {
            if( a.title > b.title  ) return 1
            if( a.title < b.title  ) return -1
            return 0
        } )

        return res.status(201).send( todosOrderByAsc )
    }catch(err){
        return res.status(400).send( {
            message: 'Error'
        } )
    }
})

app.listen(3333)

