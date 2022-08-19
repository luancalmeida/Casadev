import multer from 'multer';
import path from 'path';

export default{
    // armazenar as fotos em algum canto do projeto.
    storage: multer.diskStorage({
        // __dirname - saber onde é a raiz do projeto.
        destination: path.resolve( __dirname,'..', '..','upload'),
        filename: (req, file, cb)=>{
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext);

            cb(null, `${name}-${Date.now()}${ext}`)
        },

    })
};