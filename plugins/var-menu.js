const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')

cmd({
    pattern: "varm",
    desc: "menu",
    category: "owner",
    react: "⚙️",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let desc = `
*😈codeX var* ${pushname}

*𝐂𝐨𝐝𝐞𝐗 VAR⚙️*
┌────────────
😈 *VAR CONTROL*
└────────────
┌────────────
│ ✑ _.var ALIVE_IMG:
│ ✑ _put img url_
│
│ ✑ _.var ALIVE_MSG:
│ ✑ _put alive msg_
│
│ ✑ _.var PREFIX:
│ ✑ _[.],[#],[,]_
│
│ ✑ _.var AUTO_READ_STATUS:_ 
│ ✑ _true/false_
│
│ ✑ _.var MODE:public/private_
│ ✑ _groups/inbox_
│
│ ✑ _.var AUTO_VOICE:
│ ✑ _true/false_
│
│ ✑ _.var AUTO_REPLY:
│ ✑ _true/false_
│
│ ✑ _.var AUTO_STICKER:
│ ✑ _true/false_
└────────────

> *𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 𝐂𝐨𝐝𝐞𝐗😈*
`
return await conn.sendMessage(from,{image: {url: `https://cdn.ironman.my.id/i/g1mmt2.jpg`},caption: desc},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
