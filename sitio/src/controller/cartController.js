const getURL = req => `${req.protocol}://${req.get('host')}${req.originalUrl}`;

module.exports = {
    show = async (req,res) =>{
     let response ={
         meta :{
             link : getURL(req)
         },
         data: req.session.cart 
     }
     return res.status(200).json(response)
    }
}