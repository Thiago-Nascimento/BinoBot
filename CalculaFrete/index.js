const AWS = require('aws-sdk');

import run from './databaseConection.js';

exports.handler = async (event, context) => {
    let body;
    let statusCode = '200';
    let resposta;
    const headers = {
        'Content-Type': 'application/json',
    };

    try {
        switch (event.httpMethod) {
            case 'POST':
                console.log("Recebeu um post");
                console.log(event.body);
                body = event.body;
                break;
            default:
                throw new Error(`Unsupported method "${event.httpMethod}"`);
        }
    } catch (err) {
        statusCode = '400';
        body = err.message;
    } finally {
        var custoFreteLista = []
        
       custoFreteLista = run(body)
       
       var frete = calculoDoFrete(body,custoFreteLista);
       
       
        
        //body = JSON.stringify(body);
        resposta = {
            "statusCode": statusCode,
            "headers": headers,
            "body": `O custo da rota é de: ${frete[0]} e o seu lucro é de: ${frete[1]}`
        }
    }
    
    function calculoDoFrete(body,custoFreteLista){
        
        var total = 0
        
        var lucro = 0
        
        var listafrete = []
        
        total =  ((body.distancia * custoFreteLista[0])+custoFreteLista[1]) + body.pedagio + (body.preco_combustivel * body.eficiencia_caminhao)
        
        lucro = body.frete - total
        
        return listafrete[total,lucro]
        
    }
    

    // return JSON.stringify({
    //        statusCode,
    //        body,
    //        headers,
    //    });
    
    return resposta;
};
