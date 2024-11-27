const mongoose = require('mongoose');
const config = require('../config');
const EnvVar = require('./mongodbenv');

const defaultEnvVariables = [
    { key: 'ALIVE_IMG', value: 'https://cdn.ironman.my.id/i/g1mmt2.jpg' },
    { key: 'ALIVE_MSG', value: '😈 𝐇𝐞𝐥𝐥𝐨, 𝐈 𝐀𝐦 𝘾𝙤𝙙𝙚-𝙓-𝙍𝙪𝙬𝙖-𝙑1\n☣️ 𝐈 𝐀𝐦 𝐀𝐥𝐢𝐯𝐞 𝐍𝐨𝐰!\n\n💠 Oᴡɴᴇʀ - 𝗜𝘀𝗵𝗮𝗿𝗮 𝗥𝘂𝘄𝗮𝗻\n\n💠 Oᴡɴᴇʀ W/A - +94725337377\n\n💠 Gɪᴛʜᴜʙ Rᴇᴘᴏ - 𝒄𝒐𝒎𝒊𝒏𝒈 𝒔𝒐𝒐𝒏…\n\n💠 Mᴀɪɴ Bᴏᴛ W/A Gʀᴏᴜᴘ - https://chat.whatsapp.com/CViytr0TGpM4gLedmxnFi5\n\n> Powered By Code X Ruwa V1' },
    { key: 'PREFIX', value: '.' },
    { key: 'AUTO_READ_STATUS', value: 'true' },
    { key: 'MODE', value: 'public' },
    { key: 'AUTO_VOICE', value: 'true' },
    { key: 'AUTO_REPLY', value: 'true' },
    { key: 'AUTO_STICKER', value: 'true' },
];

// MongoDB connection function
const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGODB);
        console.log('🛜 MongoDB Connected ✅');

        // Check and create default environment variables
        for (const envVar of defaultEnvVariables) {
            const existingVar = await EnvVar.findOne({ key: envVar.key });

            if (!existingVar) {
                // Create new environment variable with default value
                await EnvVar.create(envVar);
                console.log(`➕ Created default env var: ${envVar.key}`);
            }
        }

    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
