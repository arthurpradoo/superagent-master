const axios = require('axios');

const api_key = 'gyQzrT1VRtHC1HVii7hHFbbKu5daqScxYFcppamK0yCsbW05mlgZOKFVRClAWR0v';
const clan_id = 'seu ID de clã';
const message = 'https://chat.whatsapp.com/Jjhh7bx9382BKiuBqHdfYj';

const headers = {
    'Authorization': `Bot ${api_key}`,
    'Content-Type': 'application/json',
    'Accept': 'application/json'
};

axios.post(`https://api.wolvesville.com/v1/clans/${clan_id}/messages`, { content: message }, { headers: headers })
    .then(response => {
        console.log('Mensagem enviada com sucesso!');
    })
    .catch(error => {
        console.error('Erro ao enviar a mensagem:', error);
    });
