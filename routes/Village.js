const express = require('express');
const router = express.Router();
const usuarios = require('../models/usuario');
// const usuario = require('../models/usuario');
router.use(express.json());



//acha os usuarios
router.get("/", async (req, res) => {
    try {
        const usuariosAchado = await usuarios.find();
        res.json(usuariosAchado);
    } catch (err) {
        res.json({ message: err });
    }
})


//cria novo usuario
router.post('/', async (req, res) => {
    console.log(req.body);
    const data = req.body;
    console.log(data.cpf);
    const usuario = new usuarios({
        cpf: data.cpf,
        nome: data.nome,
        telefone: data.telefone,
        email: data.email,
        senha: data.senha,
        permissao: data.permissao,
        endereco: data.endereco
    });
    try {
        const usuarioSalvo = await usuario.save();
        res.json(usuarioSalvo);
        
    }
    catch (err) {
        res.json({ message: err });
        console.log('error!!!' +  err)
    }
})



router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }
    catch (err) {
        res.json({ message: err });
    }
})

router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.remove({ _id: req.params.postId })
        res.json(removedPost)
    }
    catch (err) {
        res.json({ message: err });
    }
})

router.patch('/:postId', async (req, res) => {
    console.log(req.body);
    try {
        const updatedPost = await Post.updateOne(
            { _id: req.params.postId },
            { $set: { title: req.body.title } }
        )
        res.send(`The post title has been updated to ${req.body.title}"`);
    }
    catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;