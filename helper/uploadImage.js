const multer = require('multer');

const storageConfig = multer.diskStorage({
    // save folder
    destination : (req, file, cb) => {
        cb (null, '/tmp/upload-images')
    },
    filename : (req, file, cb) => {
        cb (null, `Profile-${Date.now()}`)
    }
})

const filterConfig = (req,file,cb)=>{
    // Type image
    if(file.mimetype.split('/')[1]==='png' || file.mimetype.split('/')[1]==='jpeg'){
        cb(null,true)

    } else{
        req.validation = {error:true, msg : 'File must be image'}
        cb(null,false)
        // cb(new Error('image must be jpg or png'),false)
    }
}

module.exports = multer({storage : storageConfig, fileFilter : filterConfig})