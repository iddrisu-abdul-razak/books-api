function auth(req, res, next){
    let isVerified =true;
    if (isVerified){
        console.log("addede successfully")

        next()

    }else{
        console.log("not authorised")
        throw error;
    }
}
module.exports=auth