const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')

//=============apk==============

cmd({
    pattern: "apk",
    alias: ["app"],
    desc: "download apk",
    category: "download",
    react: "📲",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {
if (!q) return reply("*_Please give me a apk name._*")

//fetch data from api  
const apk = await fetchJson(`https://www.dark-yasiya-api.site/download/apk?id=${q}`)

const msg = `*_CODE X APK DOWNLOADER 📥_*

*■ App name:* ${apk.result.name}
*■ Last update:* ${apk.result.lastUpdate}
*■ Size:* ${apk.result.size}
*■ Package:* ${apk.result.package}

> ᴄᴏᴅᴇXʀᴜᴡᴀ-ᴠ1 ʙᴏᴛ`

await conn.sendMessage(from,{image:{url: apk.result.image},caption:msg},{quoted:mek})
//send apk
await conn.sendMessage(from,{document: {url: apk.result.dl_link},mimetype:"application/vnd.android.package-archive",fileName: apk.result.name + ".apk"},{quoted:mek})
         
}catch(e){
console.log(e)
reply(`${e}`)

}
})                     



    

