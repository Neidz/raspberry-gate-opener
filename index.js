import express from "express";
import {Gpio} from "onoff";

const app = express();
const port = 8080;

// relay signal pin is connected to GPIO4 on raspberry pi, it's set as output because it's only used for sending signal, it's not used for reading
const relay = new Gpio(4, 'out');

app.get('/', (req, res)=> {
    res.status(200).send('there will be page on that route soon but for now go to /open to you know, open');
})

app.get('/open', (req, res)=> {
    res.status(200).send('opening');
    
    // pulling pin high closes relay which acts like a button
    relay.writeSync(1);
    // after 0.5 sec pin is pulled low opening relay
    setTimeout(()=> relay.writeSync(0), 500);
})

app.get('/status', (req, res)=> {
    res.status(200).send('alive');
})

app.listen(port, ()=> {
    console.log('running')
})