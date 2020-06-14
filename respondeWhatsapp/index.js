exports.handler = (event, context, callback) => {

    const accountSid = process.env.ACCOUNT_SID;
    const authToken = process.env.AUTH_TOKEN;
    const numberTo = process.env.NUMBER_TO;
    const numberFrom = process.env.NUMBER_FROM;

    const client = require('twilio')(accountSid, authToken);
    
    var msg;
    
    switch (event.httpMethod) {
        case 'POST':
            console.log("Recebeu um post");
            console.log(event.body);
            msg = event.body;
            break;
        default:
            throw new Error(`Unsupported method "${event.httpMethod}"`);
    }
    
    // Envia a mensagem
    client.messages.create({
        body: msg,
        to: numberTo,  // your phone number
        from: numberFrom // a valid Twilio number
    }).then((message) => {
            // Success, return message SID
            callback(null, message.sid);
    }).catch((e) => {
            // Error, return error object
            callback(Error(e));
    });
    
    
    return msg;
};