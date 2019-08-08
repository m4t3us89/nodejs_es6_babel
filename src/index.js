import express from 'express'
import api from './services/axios'
import morgan from 'morgan'

const app = express()

app.use(morgan('dev'))
app.use(express.json())

const orderBy = function(data,order = 'asc'){
    return data.sort( (a,b)=> {
        if( order == 'asc' ) {
            if(  a.title  >  b.title  ) return 1
            if(  a.title  <  b.title  ) return -1
        }else{
            if(  a.title  <  b.title  ) return 1
            if(  a.title  >  b.title  ) return -1
        }
        return 0
    } )
}

app.get( '' , async (req,res) => {
    try{
        const { data } = await api.get('/todos')
        const todosOrderBy = orderBy(data,req.query.order)
        return res.status(201).send( todosOrderBy )
    }catch(err){
        return res.status(400).send( {
            message: 'Error'
        } )
    }
})

app.listen(3333)

