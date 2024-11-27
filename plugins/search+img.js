const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')

cmd({
    pattern: "img",
    alias: ["photo"],
    desc: "search images",
    category: "search",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

if (!q) return reply("*_Please give me a text._*")

          
        let data = await fetchJson(`https://dark-yasiya-api-new.vercel.app/download/piniimg?text=${q}`)


        await conn.sendMessage(from,{image:{url:data.result[0].images_url}},{quoted:mek})
        await conn.sendMessage(from,{image:{url:data.result[1].images_url}},{quoted:mek})
        await conn.sendMessage(from,{image:{url:data.result[2].images_url}},{quoted:mek})
        await conn.sendMessage(from,{image:{url:data.result[3].images_url}},{quoted:mek})
        await conn.sendMessage(from,{image:{url:data.result[4].images_url}},{quoted:mek})
        

}catch(e){
console.log(e)
reply(`${e}`)

}
})
