const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=eigSARpZ#q1tpT74vUUbBuNo2FjEv1egNWeuKpCtf3JXWjIozSzY", //put you session id
MONGODB: process.env.MONGODB || "mongodb://mongo:jGfcdMGNcfyTPJClutUKSrBBBfbpPmez@junction.proxy.rlwy.net:24134", //dont change
READ_MESSAGE: process.env.READ_MESSAGE || "true",
AUTO_REACT: process.env.AUTO_REACT || "true",
FAKE_RECORDING: process.env.FAKE_RECORDING || "true",    
};

