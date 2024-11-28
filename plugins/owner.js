const { cmd, commands } = require('../command')
const { MessageType, MessageOptions, Mimetype } = require('@whiskeysockets/baileys')


cmd({
    pattern: "owner",
    desc: "owner details",
    category: "main",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + 'Ishara Ruwan 🇱🇰\n' 
            + 'ORG:ᴄᴏᴅᴇXʀᴜᴡᴀ;\n'
            + 'TEL;type=CELL;type=VOICE;waid=94725337377:+94 72 533 7377\n'
            + 'END:VCARD'
        
await conn.sendMessage(from,{ contacts: { displayName: 'Sasanka', contacts: [{ vcard }] }})
        
        
}catch(e){
console.log(e)
reply(`${e}`)

}
})
