const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')

cmd({
    pattern: "fbdoc",
    desc: "download fb videos",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

        if (!q && !q.startsWith("https://")) return reply("*_Please give me a facebook url._*")

        
        let data = await fetchJson(`https://www.dark-yasiya-api.site/download/fbdl1?url=${q}`)

         if (!data.result) {
            return reply("*_Can't download your facebook video._*");
        }
        
const response = await conn.sendMessage(from, { text: '_*Your facebook video is downloading... 📥*_' }, {quoted : mek});

        
        const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

       
        await delay(1000);

        
            await conn.sendMessage(from, {
            text: '_*Your facebook video is uploading... 📤*_',
            edit: response.key,
        });
        
        await delay(1000);

            await conn.sendMessage(from, { delete: response.key });
        
      await conn.sendMessage(from,{document: {url: data.result.hd },mimetype:"video/mp4",fileName:  "CODEXRUWA.mp4",caption:"> ᴄᴏᴅᴇXʀᴜᴡᴀ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ɪsʜᴀʀᴀ"},{quoted:mek})

    } catch(e) {
      console.log(e)
      reply(`${e}`)
    }
})
