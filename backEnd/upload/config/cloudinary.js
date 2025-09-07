const cloudinary = require("cloudinary").v2;
require("dotenv").config();

const cdConnect = () => {
    try {
        cloudinary.config({
            cloud_name: process.env.NAME,
            api_key:Process.env.KEY,
            api_secret:Process.env.SECRET
        })
    } catch (error) {
        console.log(error);
        
    }

}