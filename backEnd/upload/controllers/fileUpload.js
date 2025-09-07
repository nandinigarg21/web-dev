const { Types } = require("mongoose");
const file = require("../models/file");
const cloudinary = require("cloudinary").v2;



exports.fileUpload = async (req, res) => {
    try {
        const file = req.files.file;

        console.log(file);

        let path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`;

        file.mv(path,(error)=>{
            console.log(error);
        })
        
        res.json({
            success:true,
            message : " uploaded successfully "
        })
    } catch (err) {
        res.status(500).json({
            error: console.error(err)
        })

    }

}
async function cloudinaryUpload(file,folder,quality){
    const options = {folder};
    options.resourse_type = "auto";
     return await cloudinary.uploader.upload(file.tempFilePath,options);

     if(quality){
        options.quality = quality
     }
}

function isSupportedType (type,supportedTypes){
    return supportedTypes.include(type);
}
exports.imageUpload = async (req,res) =>{
    try {
        const {tag,Url} = req.body;
        const file = req.files.image;
        const supportedTypes = ["jpg","png","jpeg"];//change for video
        const fileType = file.name.split('.')[1].toLowerCase();
        
        if(!isSupportedType(fileType,supportedTypes)){
            res.status().json({
                success:false,
                message:"file type not supported"
            })
        //can use upper limit of size
        }
        
        const response = await cloudinaryUpload(file,"folder",50)//change height to compress

        const fileDate = await file.create({
            tag,Url
        })

        res.status().json({
            success:true,
            message:"file Uploaded succesfully"
        })
    } catch (error) {

res.status().json({
            success:false,
            message:"file Upload failed"
        })
        
    }
}