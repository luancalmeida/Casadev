import Casa from '../models/Casa'


class CasaController{

    async store(req, res){
        const {filename} = req.file;
        const{description , price, location, status} = req.body;
        const {user_id} = req. headers;

        const casa = await Casa.create({
            user: user_id,
            thumbnail: filename,
            description,
            price,
            location,
            status,


        })

        return res.json(casa);
    }

}

export default new CasaController();