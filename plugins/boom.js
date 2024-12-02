const config = require('../config')
const { cmd, commands } = require('../command')

cmd({
    pattern: "xb",
    desc: "boom text send",
    category: "owner",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

let a = q

let b = a.split(",")

let c = b[0]
let d = b[1]
	    
	for (let i = 0; i < d; i++) {

		await conn.sendMessage(from, { text : c })
		
   
}

}catch(e){
console.log(e)
reply(`${e}`)

}
})


cmd({
    pattern: "xbs",
    desc: "boom text send",
    category: "owner",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

let a = q

let b = a.split(",")

let c = b[0]
let d = b[1]
let f = b[2]
	    
	for (let i = 0; i < d; i++) {

		await conn.sendMessage(f + "@s.whatsapp.net", { text : c })
		
    
}

}catch(e){
console.log(e)
reply(`${e}`)

}
})
