// localizar o User,ele vai conseguir atualizar deletar entre ostros
import User from "../models/User";

//tratar a requisição e devolver ela.
class SessionController{

    //a requisição ficará assicrona async/await é o tempo de espera.
   async store(req,res){
        
        const {email} = req.body;

        //procurar algum registro no bd
    let user = await User.findOne({email})

    if (! user ) {
        user = await User.create({email})
    }

        

        return res.json(user)
    }
}

export default new SessionController();