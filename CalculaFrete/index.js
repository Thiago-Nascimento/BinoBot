const AWS = require('aws-sdk');

exports.handler = async (event, context) => {
    let body;
    let statusCode = '200';
    const headers = {
        'Content-Type': 'application/json',
    };

    try {
        switch (event.httpMethod) {
            case 'POST':
                console.log("Recebeu um post");
                console.log(event.body);
                break;
            default:
                throw new Error(`Unsupported method "${event.httpMethod}"`);
        }
    } catch (err) {
        statusCode = '400';
        body = err.message;
    } finally {
        body = JSON.stringify(body);
    }

    return {
        statusCode,
        body,
        headers,
    };
};
