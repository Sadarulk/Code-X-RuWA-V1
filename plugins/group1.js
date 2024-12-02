const config = require('../config')
const { cmd, commands } = require('../command')

cmd({
    pattern: "opentime",
    react: "🔖",
    desc: "To open group to a time",
    category: "group",
    use: '.opentime',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{   
if (!isGroup) return reply(ONLGROUP)
if (!isAdmins) return reply(ADMIN)	
  if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return reply('*select:*\nsecond\nminute\nhour\n\n*example*\n10 second')
                }
                reply(`Open time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = mek.participant
                    const open = `*OPEN TIME* THE GROUP WAS OPENED BY CODE-X-RUWA TO APPROVED ADMIN\n NOW MEMBERS CAN SEND MESSAGES 🔓`
                    conn.groupSettingUpdate(from, 'not_announcement')
                    reply(open)
                }, timer)
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "closetime",
    react: "🔖",
    desc: "To close group to a time",
    category: "group",
    use: '.closstime',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{   
if (!isGroup) return reply(ONLGROUP)
if (!isAdmins) return reply(ADMIN)	
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return reply('*select:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
                }
                reply(`Close time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `*CLOSE TIME* GROUP CLOSED BY CODE-X-RUWA AT APPROVED ADMIN\nNOW ONLY ADMIN CAN SEND MESSAGES 🔐`
                    conn.groupSettingUpdate(from, 'announcement')
                    reply(close)
                }, timer)
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('*Error !!*')
l(e)
}
})



cmd({
    pattern: "mute",	
    alias: ["lock"],
    react: "🔒",
    desc: "mute group.",
    category: "group",
    filename: __filename,
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants,  isItzcp, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    
if (!isOwner || !isAdmins) return;


if (!m.isGroup) return reply(mg.onlygroup);
if (!isBotAdmins) return reply(mg.needbotadmins);     
            await conn.groupSettingUpdate(m.chat, "announcement")
           const mass = await conn.sendMessage(m.chat, { text: '*GROUP CHAT MUTED BY CODE-X-RUWA* 🔒' }, { quoted: mek });
            return await conn.sendMessage(m.chat, { react: { text: '🔒', key: mass.key } });
} catch(e) {
console.log(e);
reply('*PLEASE GIVE ME A ADDMIN ROLE❗👻*')    
} 
})

cmd({
    pattern: "unmute",	
    alias: ["unlock"],
    react: "🔓",
    desc: "unmute group.",
    category: "group",
    filename: __filename,
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants,  isItzcp, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    
if (!isOwner || !isAdmins) return;


if (!m.isGroup) return reply(mg.onlygroup);
if (!isBotAdmins) return reply(mg.needbotadmins);     
            await conn.groupSettingUpdate(m.chat, "not_announcement")
           const mass = await conn.sendMessage(m.chat, { text: '*GROUP CHAT UNMUTED BY CODE-X-RUWA* 🔒' }, { quoted: mek });
            return await conn.sendMessage(m.chat, { react: { text: '🔒', key: mass.key } });
} catch(e) {
console.log(e);
reply('*PLEASE GIVE ME A ADDMIN ROLE❗👻*')    
} 
})



cmd({
pattern: "delete",
react: "❌",
alias: ["del"],
desc: "delete message",
category: "group",
use: '.del',
filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants,  isItzcp, groupAdmins, isBotAdmins, isAdmins, reply}) => {
if (!isOwner ||  !isAdmins) return;
try{
if (!m.quoted) return reply(mg.notextfordel);
const key = {
            remoteJid: m.chat,
            fromMe: false,
            id: m.quoted.id,
            participant: m.quoted.sender
        }
        await conn.sendMessage(m.chat, { delete: key })
} catch(e) {
console.log(e);
reply('successful..👨‍💻✅')
} 
});


cmd({
  'pattern': "kickall",
  'desc': "Kicks all non-admin members from the group.",
  'react': '👏',
  'category': "group",
  'filename': __filename
}, async (_0x56bac9, _0x551326, _0x31544f, {
  from: _0x5ab954,
  quoted: _0x24d541,
  body: _0x3c8b0a,
  isCmd: _0x2d9691,
  command: _0x2c9d43,
  args: _0x5c426c,
  q: _0x5be0c2,
  isGroup: _0x2d5bca,
  sender: _0x2ae37d,
  senderNumber: _0x45a69d,
  botNumber2: _0x480ed4,
  botNumber: _0x46889e,
  pushname: _0x3c88fe,
  isMe: _0x57cc59,
  isOwner: _0x309ad0,
  groupMetadata: _0x2c0bc0,
  groupName: _0x2a07d8,
  participants: _0x12d9e5,
  groupAdmins: _0x205311,
  isBotAdmins: _0x4a33a0,
  isAdmins: _0x1ad53a,
  reply: _0x5b5809
}) => {
  try {
    if (!_0x1ad53a) {
      return _0x5b5809("Only group admins can use this command.");
    }
    if (!_0x309ad0) {
      return _0x5b5809("Only the bot owner can use this command.");
    }
    if (!_0x2d5bca) {
      return _0x5b5809("This command is only available in groups.");
    }
    if (!_0x4a33a0) {
      return _0x5b5809("I need admin privileges to kick members.");
    }
    const _0x598864 = _0x2c0bc0.participants;
    const _0x445865 = _0x598864.filter(_0x2b7aad => !_0x205311.includes(_0x2b7aad.id) && _0x2b7aad.id !== _0x56bac9.user.id);
    if (_0x445865.length === 0x0) {
      return _0x5b5809("No non-admin members found to kick.");
    }
    _0x5b5809("Starting to kick " + _0x445865.length + " non-admin members...");
    for (let _0x3700c2 of _0x445865) {
      try {
        await _0x56bac9.groupParticipantsUpdate(_0x5ab954, [_0x3700c2.id], 'remove');
        await sleep(0x7d0);
      } catch (_0x1b688c) {
        console.error("Failed to remove " + _0x3700c2.id + ':', _0x1b688c);
      }
    }
    _0x5b5809("Successfully removed all non-admin members from the group.");
  } catch (_0x58230d) {
    console.error("Error kicking users:", _0x58230d);
    _0x5b5809("An error occurred while trying to remove members. Please try again.");
  }
});
  

                    
