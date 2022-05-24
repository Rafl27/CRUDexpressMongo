const express = require('express');
const router = express.Router();
const Post = require('../models/Post')

//everything bellow starts with /posts/

//gets all the posts 
router.get("/", async (req, res) => {
    try {
        const posts = await Post.find(); //.find is a mongoose method, if I leave it empty, it will just return everything
        res.json(posts);
    } catch (err) {
        res.json({ message: err });
    }
})

// router.post('/', (req,res) => {
//     //console.log(req.body);
//     //this only returns undefined, so I need to turn it into json using bodyParser
//     const post = new Post({
//         title : req.body.title,
//         description : req.body.description
//     });

//     post.save() //saves the post to the dataBase
//     .then(data => {
//         res.json(data); //this responds (res.) with a json which is the data I've just saved into the database
//     })
//     .catch(err => {
//         res.json({ message : err});
//     })
// })

//submits a post
//making it into an asynchronous function
router.post('/', async (req, res) => {
    //console.log(req.body);
    //this only returns undefined, so I need to turn it into json using bodyParser
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });// this stores the data from the user
    try {
        const savedPost = await post.save(); // now I'm saving the post in the database
        res.json(savedPost);//printing it
    }
    catch (err) {
        res.json({ message: err }); //in case of any erros
    }
});

//find an specific post 
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }
    catch (err) {
        res.json({ message: err });
    }
})

//delete a post
router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.remove({ _id: req.params.postId })
        res.json(removedPost)
    }
    catch(err){
        res.json({message: err});
    }
})


//updating a post
router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            {_id: req.params.postId},
            {$set: {title: req.body.title}}
        )
        res.send(`The post title has been updated to ${req.body.title}"`);
    }
    catch(err){
        res.json({message : err});
    }
});

module.exports = router;