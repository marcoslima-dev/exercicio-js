exports.paginaInicial = (req,res) => {
    res.render('index', {
        titulo:"Au au au",
        numeros: [1,2,3,4,5]
    })
    return;
}

exports.trataPost = (req,res) => {
    res.send('Sou sua nova rota de post')
    return;
}
