const HomeModel =  require('../models/HomeModel')

HomeModel.create({
    titulo:'Um Titulo de testes',
    descricao:'Uma descrição de teste'
})
.then(dados => console.log(dados))
.catch(err => console.error(err));

exports.paginaInicial = (req,res) => {
        res.render('index')
}

exports.trataPost = (req,res) => {
    res.send('Sou sua nova rota de post')
}