const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config = await readEnv();

const aliveVideo = `https://github.com/Botisha01/Bot-voice/raw/refs/heads/main/codeXAlivevideo.mp4`
const aliveVoice = `https://github.com/Botisha01/Bot-voice/raw/refs/heads/main/codeXaliveVOC.mp3`

const voice = await conn.sendMessage(from, { audio: { url: aliveVoice }, mimetype: 'audio/mpeg', ptt: true }, { quoted: mek })
await conn.sendMessage(from,{video: {url: aliveVideo},caption: config.ALIVE_MSG},{quoted: voice})

}catch(e){
console.log(e)
reply(`${e}`)
}
})





