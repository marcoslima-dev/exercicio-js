exports.middlewareGlobal = (req,res,next) => {
    res.locals.umaVariavelLocal = 'Valor de teste da variável';
    next()
}