const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')

// Function to extract YouTube video ID from a URL

function extractYouTubeId(url) {
const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/|playlist\?list=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
const match = url.match(regex);
return match ? match[1] : null;
}

//=====audio-dl=====
cmd({
    pattern: "song2",
    desc: "Download songs",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply ("*_Please give me a title or url._*")
    
let videoId;
    
// Check if the query is a URL
if (q.includes("youtube.com") || q.includes("youtu.be")) {
videoId = extractYouTubeId(q);
}
    
if (!videoId) {
// If no valid YouTube ID from URL, perform a search
const search = await yts(q);
const data = search.videos[0];
videoId = data.videoId;
}
    
// Build the video URL using the video ID
const url = `https://www.youtube.com/watch?v=${videoId}`;
    
// Fetch video details
const search = await yts(url);
const data = search.videos[0];
    
let desc = ` 
*_CODE-X-RUWA V1 AUDIO DOWNLOADER_* 🎵📥
    
┌───────────────────
├ ℹ️ *Title:* ${data.title}
├ 👤 *Author:* ${data.author.name}
├ 👁️‍🗨️ *Views:* ${data.views}
├ 🕘 *Duration:* ${data.timestamp}
├ 📌 *Upload on:* ${data.ago}
└───────────────────
    
> ᴄᴏᴅᴇXʀᴜᴡᴀ ᴠ1😈`
await conn.sendMessage(from, {image: {url: data.thumbnail}, caption: desc}, {quoted: mek});

// Download audio
    
let down = await fg.yta(url);
let downloadUrl = down.dl_url;

// Send audio+document
    
await conn.sendMessage(from, {audio: {url: downloadUrl}, mimetype: "audio/mpeg"}, {quoted: mek});
await conn.sendMessage(from, {document: {url: downloadUrl}, mimetype: "audio/mpeg", fileName: data.title + ".mp3", caption: "> ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴄᴏᴅᴇXʀᴜᴡᴀ ᴠ1"}, {quoted: mek});

}catch(e){
console.log(e);
reply(`${e}`);
}
})

//=====video-dl=====

cmd({
    pattern: "video2",
    desc: "Download videos",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply ("*_Please give me a title or url._*")

let videoId;

// Check if the query is a URL
if (q.includes("youtube.com") || q.includes("youtu.be")) {
videoId = extractYouTubeId(q);
}

if (!videoId) {
// If no valid YouTube ID from URL, perform a search
const search = await yts(q);
const data = search.videos[0];
videoId = data.videoId;
}
    
// Build the video URL using the video ID
const url = `https://www.youtube.com/watch?v=${videoId}`;
    
// Fetch video details
const search = await yts(url);
const data = search.videos[0];

let desc = `
*_CODE-X-RUWA V1 VIDEO DOWNLOADER_* 🎬📥

┌───────────────────
├ ℹ️ *Title:* ${data.title}
├ 👤 *Author:* ${data.author.name}
├ 👁️‍🗨️ *Views:* ${data.views}
├ 🕘 *Duration:* ${data.timestamp}
├ 📌 *Upload on:* ${data.ago}
└───────────────────

> ᴄᴏᴅᴇXʀᴜᴡᴀ ᴠ1😈`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});
    
//download video

let down = await fg.ytv(url);
let downloadUrl = down.dl_url;

//send video+document

await conn.sendMessage(from,{video: {url:downloadUrl},mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"video/mp4",fileName:data.title + ".mp4",caption:"> ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴄᴏᴅᴇXʀᴜᴡᴀ ᴠ1"},{quoted:mek})
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
