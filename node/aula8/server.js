const express =  require('express');
const app = express();

app.use(
    express.urlencoded(
        {
            extended:true
        }
    )
)

app.get('/', (req,res) => {
    res.send(`<form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    <button>Enviar</button>
    </form>`)
});

app.post('/', (req,res) => {
    console.log(req.body)
    res.send(`Você me enviou: ${req.body.nome}`)
})

app.get('/testes/:idUsuarios?', (req,res) => {
    console.log(req.params)
    res.send(req.query)

})

app.listen(3000, () => {
    console.log('Servidor rodando')
});