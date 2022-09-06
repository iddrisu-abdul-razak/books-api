function logger(req, res, next){
    console.log(`${req.method} ${req.orginalurl} ${req.statusCode}`);

    next();
}
module.exports=logger