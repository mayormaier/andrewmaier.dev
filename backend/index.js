const moment = require('moment')
const AWS = require('aws-sdk')
const ses = new AWS.SESV2({apiVersion: '2019-09-27'});

const failureResponse = {
    "statusCode": 400,
    "body": JSON.stringify({
        "message": "Bad request."
    }),
    "isBase64Encoded": false
}
const errorResponse = {
    "statusCode": 500,
    "body": JSON.stringify({
        "message": "Server error."
    }),
    "isBase64Encoded": false
}
const successResponse = {
    "statusCode": 200,
    "headers": { 
       "Content-Type": "application/json","Access-Control-Allow-Origin": "*"
    },
    "isBase64Encoded": false,
    "body": "{ \"result\": \"Success\"\n}"
}

exports.handler =  async function(event, context) {
    console.log("EVENT: \n" + JSON.stringify(event, null, 2))
    if (event.requestContext.http.method == "POST") {
        const requestBody = JSON.parse(event.body)
        if (requestBody.name && requestBody.email && requestBody.message) {
            sendEmail(requestBody, (err, data) => {
                if (err) {
                    console.log(err, err.stack)
                    return errorResponse
                } else {
                    console.log(data)
                    return successResponse
                }
            })
        } else {
            console.log(`ERROR: Request failure: Missing request argument`)
            return failureResponse
        }
    } else {
        console.log(`ERROR: Request failure: Request method ${event.http.method}, not POST`)
        return failureResponse
    }
}

function sendEmail (event, done) {
    const params = {
        Content: {
            Simple: {
                Body: {
                    Text: {
                        Data: 'name: ' + event.name + '\nemail: ' + event.email + '\ntime: ' + moment().format('MMMM Do YYYY, h:mm:ss a') + '\nmessage: ' + event.message,
                        Charset: 'UTF-8'
                    }
                },
                Subject: {
                    Data: 'Website Referral Form: ' + event.name,
                    Charset: 'UTF-8'
                }
            }
        },
        FromEmailAddress: process.env('CONTACT_SENDER_EMAIL'),
        FromEmailAddressIdentityArn: process.env('CONTACT_SENDER_IDENTITY'),
        Destination: {
            ToAddresses: [
                process.env('CONTACT_DESTINATION_EMAIL')
            ]
        },
        ReplyToAddresses: [
            event.email
        ]
    }
    ses.sendEmail(params, done)
}