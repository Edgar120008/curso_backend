const {request, response} = require('express')

const auth = (req=request, res=response, next) =>{
    const palabra = req.headers.authorization;
  
    if(palabra==='llave'){
      next(); //continua si el valor de la palabra es la correcta
    }else{
      return res.status(401).json({error:'el valor de la palabra no es correcto'});
    }
  };

module.exports=auth;