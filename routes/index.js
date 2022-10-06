
const {Router}= require('express');

const router=Router();

router.get('/api',(req,res)=>{
	
	const data={
		
		"imagenes":"aaa","respuesta":"aaa"
	
	}
	
	res.json(data);	

});

module.exports=router;