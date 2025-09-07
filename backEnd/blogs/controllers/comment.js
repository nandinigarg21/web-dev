const comment = require("../models/comment");
const create = require("../models/create");

exports.comment = async(req,res) => {
    try {
        const {post,user,body} = req.body;
        const newComment = await todo.create({post,user,body});
        const newPost = await post.findByIdAndUpdate(
            post,
            {$push:{comment:newComment._id}},
            {new:true}
        ).populate("comments").exec();

        res.json({
            post:newPost
        })
        

    } catch(err) {
        res.status(500).json({
           error:console.error(err)

        })
        
    }
    
}