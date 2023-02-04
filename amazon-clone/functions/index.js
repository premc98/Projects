const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51MWjttFxrILRHLpEXxQirsSg0SVgqGfMb9dEBxKuAz58tETbY4JjMkYtUYhgA09mEgd34bIgbQqBmDxESPZiOmiM00lUSw9IyE");

//API

//APP config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get('/', (request,response) => response.status(200).send('hello world'));
app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('payment request received for amount', total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "cad",
    });

    //ok created
    console.log('client_secret', paymentIntent.client_secret)
    response.status(201).send({
        
        clientSecret: paymentIntent.client_secret,
        

    })

})

//Listen command
exports.api = functions.https.onRequest(app); //the endpoint of the api ends with /api cuz it is "export.api"

// API endpoint
// http://127.0.0.1:5001/clone-f6853/us-central1/api