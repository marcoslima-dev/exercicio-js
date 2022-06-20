exports.middlewareGlobal = (req,res,next) => {
    res.locals.umaVariavelLocal = 'Valor de teste da variável';
    next()
}

exports.checksCsrfError = (err,req,res,next) => {
    if(err && 'EBADCSRFTOKEN' === err.code){
        return res.send('SE FUDEU')
    }
}

exports.CsrfMiddleware = (req,res,next) => {
    res.locals.csrfToken = req.csrfToken()
    next();
}