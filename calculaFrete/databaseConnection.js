export default async function run(body) {
    const url = "mongodb+srv://Bino:bino2020@binocluster-m7esv.mongodb.net/BinoCluster?retryWrites=true&w=majority";
    const client = new MongoClient(url);
    let custoDeslocamento = 0;
    let custoCargaeDescarga = 0
   
    
    try {
        await client.connect();
       
        await list(client,body.numero_de_eixos,body.implemento_proprio,body.tipo_carga,body.perigosa);



    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}

function custosFrete(objeto,eixos){
    
    var custoCargaeDescarga = 0
    var custoDeslocamento = 0

    const chave = Object.keys(objeto);


            chave.map(func=>{
                if(func.slice(21,22) == eixos){
                     Object.entries(objeto).map(ob=>{
                        
                        if(ob[0] == func){
                            
                             custoCargaeDescarga = ob[1];
                        }
                    })
                }
                if(func.slice(17,18) == eixos){
                        console.log(func.slice(17,18))
                        Object.entries(objeto).map(ob=>{
                            
                            if(ob[0] == func){
                                
                                custoDeslocamento = ob[1];
                            }
                        })
                    }
            })
            
            var lista = [custoDeslocamento,custoCargaeDescarga]
            
            return lista
}

async function list(client,eixos,tipoFrete,tipoCarga,perigosa){
    
     let objeto = null
    
    switch(tipoFrete) {
        case 1:

            if(perigosa === 'sim'){

                objeto = await client.db("BinoCluster").collection("fretesTabelaA").findOne({"Tipo_de_carga":`perigosa_+${tipoCarga}`})
        
        
            }else{
        
                objeto = await client.db("BinoCluster").collection("fretesTabelaA").findOne({"Tipo_de_carga":`${tipoCarga}`})
        
            }

            console.log(objeto)
            custosFrete(objeto,eixos);
            break;

        case 2:
            if(perigosa === 'sim'){

                objeto = await client.db("BinoCluster").collection("fretesTabelaA").findOne({"Tipo_de_carga":`perigosa_+${tipoCarga}`})
        
        
            }else{
        
                objeto = await client.db("BinoCluster").collection("fretesTabelaA").findOne({"Tipo_de_carga":`${tipoCarga}`})
        
            }

            custosFrete(objeto,eixos);
          break;
        case 3:
            if(perigosa === 'sim'){

                objeto = await client.db("BinoCluster").collection("fretesTabelaA").findOne({"Tipo_de_carga":`perigosa_+${tipoCarga}`})
        
        
            }else{
        
                objeto = await client.db("BinoCluster").collection("fretesTabelaA").findOne({"Tipo_de_carga":`${tipoCarga}`})
        
            }
            custosFrete(objeto,eixos);
            break;
        case 4:
            if(perigosa === 'sim'){

                objeto = await client.db("BinoCluster").collection("fretesTabelaA").findOne({"Tipo_de_carga":`perigosa_+${tipoCarga}`})
        
        
            }else{
        
                objeto = await client.db("BinoCluster").collection("fretesTabelaA").findOne({"Tipo_de_carga":`${tipoCarga}`})
        
            }

            custosFrete(objeto,eixos);
            break;
      } 

        
    
}