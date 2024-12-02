const { downloadContentFromMessage } = require('@whiskeysockets/baileys');

const commandDetails = {};
commandDetails.pattern = 'vv';
commandDetails.react = '🌠';
commandDetails.alias = ['rvo'];
commandDetails.desc = "Check bot's ping";
commandDetails.category = 'owner';
commandDetails.use = '.vv';
commandDetails.filename = __filename;

cmd(
  commandDetails,
  async (
    botInstance,
    chatData,
    msgData,
    {
      from,
      quoted,
      body,
      isCmd,
      command,
      args,
      q,
      isGroup,
      sender,
      senderNumber,
      botNumber2,
      botNumber,
      pushname,
      isMe,
      isOwner,
      groupMetadata,
      groupName,
      participants,
      groupAdmins,
      isBotAdmins,
      isAdmins,
      reply,
    }
  ) => {
    try {
      const quotedMessage = msgData.msg.contextInfo.quotedMessage.viewOnceMessageV2;

      if (quotedMessage) {
        if (quotedMessage.message.imageMessage) {
          console.log('Quoted Image Entered');
          let imageCaption = quotedMessage.message.imageMessage.caption;
          let imageFile = await botInstance.downloadAndSaveMediaMessage(quotedMessage.message.imageMessage);
          const imageUrl = { url: imageFile };
          const imageMessage = {};
          return (
            (imageMessage.image = imageUrl),
            (imageMessage.caption = imageCaption),
            botInstance.sendMessage(msgData.chat, imageMessage)
          );
        }

        if (quotedMessage.message.videoMessage) {
          let videoCaption = quotedMessage.message.videoMessage.caption;
          let videoFile = await botInstance.downloadAndSaveMediaMessage(quotedMessage.message.videoMessage);
          const videoUrl = { url: videoFile };
          const videoMessage = {};
          return (
            (videoMessage.video = videoUrl),
            (videoMessage.caption = videoCaption),
            botInstance.sendMessage(msgData.chat, videoMessage)
          );
        }
      }
    } catch (error) {
      console.log('Error:', error);
    }

    if (!msgData.quoted) {
      return msgData.reply('```Uh Please Reply A ViewOnce Message```');
    }

    if (msgData.quoted.mtype === 'viewOnceMessage') {
      console.log('ViewOnce Entered');
      if (msgData.quoted.message.imageMessage) {
        let imageCaption = msgData.quoted.message.imageMessage.caption;
        let imageFile = await botInstance.downloadAndSaveMediaMessage(msgData.quoted.message.imageMessage);
        const imageUrl = { url: imageFile };
        const imageMessage = {
          image: imageUrl,
          caption: imageCaption,
        };
        botInstance.sendMessage(msgData.chat, imageMessage);
      } else {
        if (msgData.quoted.message.videoMessage) {
          let videoCaption = msgData.quoted.message.videoMessage.caption;
          let videoFile = await botInstance.downloadAndSaveMediaMessage(msgData.quoted.message.videoMessage);
          const videoUrl = { url: videoFile };
          const videoMessage = {
            video: videoUrl,
            caption: videoCaption,
          };
          botInstance.sendMessage(msgData.chat, videoMessage);
        }
      }
    } else {
      return msgData.reply('```This is Not A ViewOnce Message```');
    }
  }
);
