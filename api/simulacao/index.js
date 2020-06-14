var contador = 0;

exports.handler = (event, context, callback) => {

    const accountSid = "AC90e7f3f4f35290bfdaa5ee4de278ac07";
    const authToken = "a89d009694486dc083339a5b6f35148e";

    const client = require('twilio')(accountSid, authToken);
    
    var msg;

    if(contador == 0) {
        msg = "Opa, eu sou o Bino. Tudo beleza? Como posso te ajudar?";
        contador = contador + 1;
    } else if (contador == 1) {
        msg = "Entendi, preciso fazer algumas perguntas pra gente calcular o preço do seu frete ok? \nQual é o tipo da carga?";
        contador = contador + 1;
    } else if (contador == 2) {
        msg = "Quantos eixos tem o veículo?";
        contador = contador + 1;
    } else if (contador == 3) {
        msg = "É uma carga perigosa?";
        contador = contador + 1;
    } else if (contador == 4) {
        msg = "Seu frete sera como? (Digite o numero da opção que você quer escolher)\n1 - Conjunto completo ou caminhao\n2 - Somente cavalo mecânico\n3 - Conjunto completo ou caminhao de alto desempenho\n4 - Somente cavalo mecânico de alto desempenho";
        contador = contador + 1;
    } else if (contador == 5) {
        msg = "Certo, quanto voce vai ter que pagar de pedagio no total?";
        contador = contador + 1;
    } else if (contador == 6) {
        msg = "Quantos quilometros voce vai percorrer?";
        contador = contador + 1;
    } else if (contador == 7) {
        msg = "Quantos quilometros por litro seu caminhao faz?";
        contador = contador + 1;
    } else if (contador == 8) {
        msg = "Mais uma informação, quanto você paga no combustível?";
        contador = contador + 1;
    } else if (contador == 9) {
        msg = "Certo, agora me confirma os dados por favor:\nO tipo de carga é granel solido\nNumero de eixos é 6\nCarga perigosa: sim\nO frete será feito com conjunto completo ou caminhao de alto desempenho\nA distancia é de 2000 km\nO seu caminhão faz 3 km por litro\nO preço do combustível é R$ 3.4\nVocê vai pagar R$ 35.5 de pedágio\n\nAs informações estão corretas?";
        contador = contador + 1;
    } else if (contador == 10) {
        msg = "Certo, estou calculando o preço mínimo do frete...\nOlha, o preço mínimo do frete é de: \nR$ 9561,00.\n\nE você quer calcular seu lucro?";
        contador = contador + 1;
    } else if (contador == 11) {
        msg = "Certo, quanto voce vai cobrar?"
        contador = contador + 1;
    } else if (contador == 12) {
        msg = "Então seu lucro vai ser de R$1439,00";
        contador = contador + 1;
    }  else if (contador == 13) {
        msg = "Opa, se precisar é só chamar!";
        contador = 0;
    }
    
    // Send a text message
    client.messages.create({
        body: msg,
        to: 'whatsapp:+5511990056399',  // your phone number
        from: 'whatsapp:+14155238886' // a valid Twilio number
    })
        .then((message) => {
            // Success, return message SID
            callback(null, message.sid);
        })
        .catch((e) => {
                // Error, return error object
            callback(Error(e));
        });

};