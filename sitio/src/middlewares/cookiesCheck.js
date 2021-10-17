module.exports = (req,res,next)=>{
    if(req.cookies.mateAr){
        req.session.userLogin = req.cookies.mateAr;
    }
    next()
}