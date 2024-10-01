// sk_test_51Q3c8o091CMQ3lc6CcR2lnLBkgDXcH578trlELFQitkEsrhY5z4P6q7Ip2Z4ECzSfKseXaWyFbmYqShRNeuLhTG400WDcXsKiZ
// coffee: price_1Q3cJE091CMQ3lc6jedlsKMA
// tea: price_1Q3cM6091CMQ3lc6wkgm6siF
// Bread: price_1Q3cNW091CMQ3lc6USlVYZJ5

const express = require('express');
var cors = require('cors');
const stripe = require('stripe')('sk_test_51Q3c8o091CMQ3lc6CcR2lnLBkgDXcH578trlELFQitkEsrhY5z4P6q7Ip2Z4ECzSfKseXaWyFbmYqShRNeuLhTG400WDcXsKiZ');

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
  
    console.log(req.body);
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item)=> {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    });

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel"
    });

    res.send(JSON.stringify({
        url: session.url
    }));
});

app.listen(4000, () => console.log("Listening on port 4000!"));

// const app = express();
// app.use(cors());
// app.use(express.static("public"));
// app.use(express.json());

// app.post("/checkout", async (req, res) => {
    
//     console.log(req.body);
//     const items = req.body.items;
//     let lineItems = [];
//     items.forEach((item) =>{
//         lineItems.push(
//             {
//                 price: item.id,
//                 quantity: item.quantity

//             }
//         )
//     });

//     const session = await stripe.checkout.sessions.create({
//         line_items: lineItems,
//         mode: 'payment',
//         success_url : "http://localhost:3000/success",
//         cancel_url : "http://localhost:3000/cancel",


//     });

//     res.send(JSON.stringify({
//         url: session.url
//     }));
// });

// app.listen(4000, () => console.log("Listening on port 4000"));