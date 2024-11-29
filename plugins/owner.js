const { cmd, commands } = require('../command')
const { MessageType, MessageOptions, Mimetype } = require('@whiskeysockets/baileys')


cmd({
    pattern: "owner",
    desc: "im owner",
    react: "👩‍💻",
    use: '.owner',
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{


let vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + `FN: Ishara Ruwan\n` 
            + `ORG: CodeXruWA Bot Owner;\n` 
            + `TEL;type=CELL;type=VOICE;waid=94725337377:+94725337377\n` 
            + 'END:VCARD'

await conn.sendMessage(from, { 
    contacts: { 
        displayName: `Ishara Ruwan`, 
        contacts: [{ vcard }] 
    },  quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
});


