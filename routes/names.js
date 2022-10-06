function calcular_nombre(busqueda,valor,separador){
	
	var modo2="";

	if(busqueda==-1){
						
		modo2=valor;

	}

	else{

		modo2=valor.substring(0,busqueda);
	
	}

	if(separador){

		modo2+="-";

	}
		
	return modo2;

}

function pintar_ceros(numero){

	var ceros="";
	
	for(var i=0;i<numero;i++){
		
		ceros+="0";
		
	}
		
	return ceros;

}

const {Router}=require('express');

const router= Router();

var data="";

router.get('/:entrada/modo/:modo',(req,res)=>{

	const{entrada}=req.params;
	
	const{modo}=req.params;

	const mode=parseInt(modo);

	var busqueda="";

	if(mode!=NaN && mode>0 && mode<6){
	
		const fruits = entrada.split(',');

		const salida = [];
	
		const extensiones = [];

		var f = new Date();

		var currentTime = new Date();

		var extension;
	
		var y=1;

		var long="";
		
		for(var i=0;i<fruits.length;i++){

			extension=fruits[i].substring(fruits[i].indexOf(".")+1, fruits[i].length);

			busqueda=fruits[i].indexOf(".");
			
			long=""+y;

			if(fruits[i]==""){

				fruits.splice(i,1);

			}

			switch(mode){

				case 1:

					salida[i]=f.getFullYear()+"_"+(f.getMonth() +1)+"_"+f.getDate()+"_"+currentTime.getHours()+"-"+currentTime.getMinutes()+"-"+currentTime.getSeconds()+"_"+y+"."+extension;

					break;

				case 2:

					salida[i]=calcular_nombre(busqueda,fruits[i],true)+f.getFullYear()+"_"+(f.getMonth() +1)+"_"+f.getDate()+"_"+currentTime.getHours()+"-"+currentTime.getMinutes()+"-"+currentTime.getSeconds()+"_"+y+"."+extension;

				break;

				case 3:

					salida[i]=f.getFullYear()+"_"+(f.getMonth() +1)+"_"+f.getDate()+"_"+currentTime.getHours()+"-"+currentTime.getMinutes()+"-"+currentTime.getSeconds()+"_"+y+"-"+calcular_nombre(busqueda,fruits[i],false)+"."+extension;

				break;

				case 4:
		
					salida[i]=pintar_ceros(7-(long.length))+y+"."+extension;
				
				break;

				case 5:
					
					salida[i]=pintar_ceros(7-(long.length))+y+"-"+calcular_nombre(busqueda,fruits[i],false)+"."+extension;
				
				break;
			}

			y++;

		}

		data={
		
			"imagenes":fruits,"respuesta":salida
	
		}
	
	}

	else{

		data="";

	}

	res.json(data);	

});

module.exports=router;