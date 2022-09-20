const qrcode = require('qrcode-terminal');
const banc=require('./banc/banc.js');
const stages=require('./stages/stages.js');
const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();
client.on('message', message => {
    console.log(message);
    if ((message.body).toLowerCase()==='hello') {
        client.sendMessage(message.from,'Hello, good night, are you ok?')
    }
    if ((message.body).toLowerCase()==='name') {
        client.sendMessage(message.from,'I am your virtual assistant!');
    }
	
});
function getStage(s) {
    banc.db[s].exe;
}
console.log(getStage('user1'));