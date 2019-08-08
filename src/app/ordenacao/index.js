import api from '../../services/axios'

const orderBy = (data,order = 'asc')=>{
    return data.sort( (a,b)=>{
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

class Ordernacao{
    async list(req,res){
        try{
            const { data } = await api.get('/todos')
            const todosOrderBy = orderBy(data,req.query.order)
            
            return res.status(201).send( todosOrderBy )
        }catch(err){
            return res.status(400).send( {
                message: 'Error'
            } )
        }
    }
}

export default new Ordernacao()