const _0x5cca84=_0x203b;(function(_0x2b7d9f,_0x574c02){const _0x4eaaff=_0x203b,_0x1111f4=_0x2b7d9f();while(!![]){try{const _0x22955b=-parseInt(_0x4eaaff(0x115))/0x1+parseInt(_0x4eaaff(0x11a))/0x2*(-parseInt(_0x4eaaff(0x139))/0x3)+parseInt(_0x4eaaff(0x14c))/0x4+parseInt(_0x4eaaff(0x128))/0x5+parseInt(_0x4eaaff(0x11b))/0x6*(-parseInt(_0x4eaaff(0x10b))/0x7)+parseInt(_0x4eaaff(0x12b))/0x8*(parseInt(_0x4eaaff(0x132))/0x9)+parseInt(_0x4eaaff(0x114))/0xa*(parseInt(_0x4eaaff(0x140))/0xb);if(_0x22955b===_0x574c02)break;else _0x1111f4['push'](_0x1111f4['shift']());}catch(_0x4521ee){_0x1111f4['push'](_0x1111f4['shift']());}}}(_0x1175,0xcdcec));function _0x203b(_0x22be08,_0xd6524){const _0x11758e=_0x1175();return _0x203b=function(_0x203b49,_0x5dd812){_0x203b49=_0x203b49-0x107;let _0x2a172a=_0x11758e[_0x203b49];return _0x2a172a;},_0x203b(_0x22be08,_0xd6524);}const {proto,downloadContentFromMessage,getContentType}=require('@whiskeysockets/baileys'),fs=require('fs'),downloadMediaMessage=async(_0x2fd724,_0x19996f)=>{const _0x3604ff=_0x203b;_0x2fd724[_0x3604ff(0x11c)]===_0x3604ff(0x131)&&(_0x2fd724[_0x3604ff(0x11c)]=_0x2fd724[_0x3604ff(0x13b)][_0x3604ff(0x11c)]);if(_0x2fd724['type']===_0x3604ff(0x122)){var _0x36c2f9=_0x19996f?_0x19996f+_0x3604ff(0x10f):'undefined.jpg';const _0x16b7ce=await downloadContentFromMessage(_0x2fd724[_0x3604ff(0x13b)],_0x3604ff(0x14b));let _0x5ebd0f=Buffer['from']([]);for await(const _0x49ee60 of _0x16b7ce){_0x5ebd0f=Buffer[_0x3604ff(0x157)]([_0x5ebd0f,_0x49ee60]);}return fs[_0x3604ff(0x153)](_0x36c2f9,_0x5ebd0f),fs['readFileSync'](_0x36c2f9);}else{if(_0x2fd724[_0x3604ff(0x11c)]===_0x3604ff(0x159)){var _0x5c8a27=_0x19996f?_0x19996f+'.mp4':'undefined.mp4';const _0x4e027a=await downloadContentFromMessage(_0x2fd724[_0x3604ff(0x13b)],'video');let _0x2ee14d=Buffer[_0x3604ff(0x10a)]([]);for await(const _0x2b9c61 of _0x4e027a){_0x2ee14d=Buffer[_0x3604ff(0x157)]([_0x2ee14d,_0x2b9c61]);}return fs[_0x3604ff(0x153)](_0x5c8a27,_0x2ee14d),fs['readFileSync'](_0x5c8a27);}else{if(_0x2fd724['type']===_0x3604ff(0x112)){var _0x97cc83=_0x19996f?_0x19996f+_0x3604ff(0x151):_0x3604ff(0x14a);const _0x55a6be=await downloadContentFromMessage(_0x2fd724[_0x3604ff(0x13b)],_0x3604ff(0x141));let _0x259fb6=Buffer[_0x3604ff(0x10a)]([]);for await(const _0x4c5fef of _0x55a6be){_0x259fb6=Buffer['concat']([_0x259fb6,_0x4c5fef]);}return fs[_0x3604ff(0x153)](_0x97cc83,_0x259fb6),fs['readFileSync'](_0x97cc83);}else{if(_0x2fd724[_0x3604ff(0x11c)]===_0x3604ff(0x107)){var _0x4044d0=_0x19996f?_0x19996f+_0x3604ff(0x149):_0x3604ff(0x158);const _0x163d90=await downloadContentFromMessage(_0x2fd724[_0x3604ff(0x13b)],'sticker');let _0x216aa6=Buffer[_0x3604ff(0x10a)]([]);for await(const _0x24e5a1 of _0x163d90){_0x216aa6=Buffer['concat']([_0x216aa6,_0x24e5a1]);}return fs[_0x3604ff(0x153)](_0x4044d0,_0x216aa6),fs['readFileSync'](_0x4044d0);}else{if(_0x2fd724[_0x3604ff(0x11c)]==='documentMessage'){var _0x40029f=_0x2fd724[_0x3604ff(0x13b)][_0x3604ff(0x11e)][_0x3604ff(0x111)]('.')[0x1][_0x3604ff(0x155)]()[_0x3604ff(0x110)]('jpeg',_0x3604ff(0x145))[_0x3604ff(0x110)](_0x3604ff(0x117),_0x3604ff(0x145))[_0x3604ff(0x110)]('m4a',_0x3604ff(0x127)),_0x43ca5e=_0x19996f?_0x19996f+'.'+_0x40029f:_0x3604ff(0x13f)+_0x40029f;const _0x9127b1=await downloadContentFromMessage(_0x2fd724['msg'],'document');let _0x5c04c7=Buffer['from']([]);for await(const _0x2c1ff3 of _0x9127b1){_0x5c04c7=Buffer['concat']([_0x5c04c7,_0x2c1ff3]);}return fs[_0x3604ff(0x153)](_0x43ca5e,_0x5c04c7),fs[_0x3604ff(0x133)](_0x43ca5e);}}}}}},sms=(_0x32b277,_0x215ff0)=>{const _0x17f30a=_0x203b;_0x215ff0[_0x17f30a(0x144)]&&(_0x215ff0['id']=_0x215ff0[_0x17f30a(0x144)]['id'],_0x215ff0[_0x17f30a(0x162)]=_0x215ff0[_0x17f30a(0x144)]['remoteJid'],_0x215ff0[_0x17f30a(0x160)]=_0x215ff0[_0x17f30a(0x144)][_0x17f30a(0x160)],_0x215ff0[_0x17f30a(0x129)]=_0x215ff0[_0x17f30a(0x162)][_0x17f30a(0x10d)](_0x17f30a(0x12f)),_0x215ff0[_0x17f30a(0x138)]=_0x215ff0[_0x17f30a(0x160)]?_0x32b277[_0x17f30a(0x147)]['id'][_0x17f30a(0x111)](':')[0x0]+_0x17f30a(0x14d):_0x215ff0[_0x17f30a(0x129)]?_0x215ff0[_0x17f30a(0x144)][_0x17f30a(0x15a)]:_0x215ff0['key'][_0x17f30a(0x15b)]);if(_0x215ff0[_0x17f30a(0x124)]){_0x215ff0[_0x17f30a(0x11c)]=getContentType(_0x215ff0['message']),_0x215ff0[_0x17f30a(0x13b)]=_0x215ff0[_0x17f30a(0x11c)]===_0x17f30a(0x131)?_0x215ff0[_0x17f30a(0x124)][_0x215ff0[_0x17f30a(0x11c)]]['message'][getContentType(_0x215ff0['message'][_0x215ff0[_0x17f30a(0x11c)]]['message'])]:_0x215ff0[_0x17f30a(0x124)][_0x215ff0[_0x17f30a(0x11c)]];if(_0x215ff0[_0x17f30a(0x13b)]){_0x215ff0['type']==='viewOnceMessage'&&(_0x215ff0[_0x17f30a(0x13b)]['type']=getContentType(_0x215ff0[_0x17f30a(0x124)][_0x215ff0[_0x17f30a(0x11c)]][_0x17f30a(0x124)]));var _0x470f70=_0x215ff0['msg'][_0x17f30a(0x120)]!=null?_0x215ff0['msg']['contextInfo'][_0x17f30a(0x15a)]:'',_0x5c4170=_0x215ff0[_0x17f30a(0x13b)][_0x17f30a(0x120)]!=null?_0x215ff0[_0x17f30a(0x13b)][_0x17f30a(0x120)][_0x17f30a(0x108)]:[],_0x55fedc=typeof _0x5c4170==_0x17f30a(0x11f)?[_0x5c4170]:_0x5c4170;_0x55fedc!=undefined?_0x55fedc['push'](_0x470f70):[],_0x215ff0[_0x17f30a(0x12a)]=_0x55fedc!=undefined?_0x55fedc[_0x17f30a(0x150)](_0x9e373b=>_0x9e373b):[],_0x215ff0[_0x17f30a(0x152)]=_0x215ff0[_0x17f30a(0x11c)]===_0x17f30a(0x109)?_0x215ff0['msg']:_0x215ff0[_0x17f30a(0x11c)]===_0x17f30a(0x130)?_0x215ff0['msg'][_0x17f30a(0x14f)]:_0x215ff0['type']==_0x17f30a(0x122)&&_0x215ff0[_0x17f30a(0x13b)][_0x17f30a(0x13a)]?_0x215ff0[_0x17f30a(0x13b)][_0x17f30a(0x13a)]:_0x215ff0[_0x17f30a(0x11c)]=='videoMessage'&&_0x215ff0[_0x17f30a(0x13b)][_0x17f30a(0x13a)]?_0x215ff0['msg'][_0x17f30a(0x13a)]:_0x215ff0['type']==_0x17f30a(0x13e)&&_0x215ff0['msg'][_0x17f30a(0x13d)]?_0x215ff0[_0x17f30a(0x13b)]['selectedId']:_0x215ff0[_0x17f30a(0x11c)]==_0x17f30a(0x10c)&&_0x215ff0[_0x17f30a(0x13b)][_0x17f30a(0x116)]?_0x215ff0[_0x17f30a(0x13b)][_0x17f30a(0x116)]:'',_0x215ff0[_0x17f30a(0x113)]=_0x215ff0[_0x17f30a(0x13b)][_0x17f30a(0x120)]!=undefined?_0x215ff0[_0x17f30a(0x13b)][_0x17f30a(0x120)][_0x17f30a(0x14e)]:null;if(_0x215ff0['quoted']){_0x215ff0[_0x17f30a(0x113)][_0x17f30a(0x11c)]=getContentType(_0x215ff0[_0x17f30a(0x113)]),_0x215ff0[_0x17f30a(0x113)]['id']=_0x215ff0['msg'][_0x17f30a(0x120)][_0x17f30a(0x15c)],_0x215ff0['quoted'][_0x17f30a(0x138)]=_0x215ff0[_0x17f30a(0x13b)][_0x17f30a(0x120)][_0x17f30a(0x15a)],_0x215ff0['quoted'][_0x17f30a(0x160)]=_0x215ff0['quoted'][_0x17f30a(0x138)]['split']('@')[0x0][_0x17f30a(0x134)](_0x32b277['user']['id'][_0x17f30a(0x111)](':')[0x0]),_0x215ff0['quoted'][_0x17f30a(0x13b)]=_0x215ff0[_0x17f30a(0x113)][_0x17f30a(0x11c)]===_0x17f30a(0x131)?_0x215ff0['quoted'][_0x215ff0['quoted'][_0x17f30a(0x11c)]][_0x17f30a(0x124)][getContentType(_0x215ff0[_0x17f30a(0x113)][_0x215ff0[_0x17f30a(0x113)][_0x17f30a(0x11c)]][_0x17f30a(0x124)])]:_0x215ff0['quoted'][_0x215ff0[_0x17f30a(0x113)][_0x17f30a(0x11c)]];_0x215ff0[_0x17f30a(0x113)][_0x17f30a(0x11c)]===_0x17f30a(0x131)&&(_0x215ff0[_0x17f30a(0x113)][_0x17f30a(0x13b)][_0x17f30a(0x11c)]=getContentType(_0x215ff0[_0x17f30a(0x113)][_0x215ff0['quoted'][_0x17f30a(0x11c)]][_0x17f30a(0x124)]));var _0x130ce8=_0x215ff0[_0x17f30a(0x113)]['msg'][_0x17f30a(0x120)]!=null?_0x215ff0[_0x17f30a(0x113)]['msg'][_0x17f30a(0x120)][_0x17f30a(0x15a)]:'',_0x10dd39=_0x215ff0[_0x17f30a(0x113)][_0x17f30a(0x13b)]['contextInfo']!=null?_0x215ff0[_0x17f30a(0x113)]['msg']['contextInfo'][_0x17f30a(0x108)]:[],_0x3cd195=typeof _0x10dd39==_0x17f30a(0x11f)?[_0x10dd39]:_0x10dd39;_0x3cd195!=undefined?_0x3cd195[_0x17f30a(0x12d)](_0x130ce8):[],_0x215ff0[_0x17f30a(0x113)][_0x17f30a(0x12a)]=_0x3cd195!=undefined?_0x3cd195[_0x17f30a(0x150)](_0x38a2e1=>_0x38a2e1):[],_0x215ff0[_0x17f30a(0x113)]['fakeObj']=proto[_0x17f30a(0x137)][_0x17f30a(0x118)]({'key':{'remoteJid':_0x215ff0[_0x17f30a(0x162)],'fromMe':_0x215ff0[_0x17f30a(0x113)][_0x17f30a(0x160)],'id':_0x215ff0['quoted']['id'],'participant':_0x215ff0[_0x17f30a(0x113)][_0x17f30a(0x138)]},'message':_0x215ff0['quoted']}),_0x215ff0[_0x17f30a(0x113)]['download']=_0x47be99=>downloadMediaMessage(_0x215ff0['quoted'],_0x47be99),_0x215ff0[_0x17f30a(0x113)][_0x17f30a(0x119)]=()=>_0x32b277[_0x17f30a(0x11d)](_0x215ff0[_0x17f30a(0x162)],{'delete':_0x215ff0['quoted'][_0x17f30a(0x142)]['key']}),_0x215ff0[_0x17f30a(0x113)][_0x17f30a(0x126)]=_0x2ee5b0=>_0x32b277[_0x17f30a(0x11d)](_0x215ff0['chat'],{'react':{'text':_0x2ee5b0,'key':_0x215ff0['quoted'][_0x17f30a(0x142)][_0x17f30a(0x144)]}});}}_0x215ff0['download']=_0x19074a=>downloadMediaMessage(_0x215ff0,_0x19074a);}return _0x215ff0['reply']=(_0x4f75be,_0x53e964=_0x215ff0[_0x17f30a(0x162)],_0x40c0f1={'mentions':[_0x215ff0['sender']]})=>_0x32b277[_0x17f30a(0x11d)](_0x53e964,{'text':_0x4f75be,'contextInfo':{'mentionedJid':_0x40c0f1[_0x17f30a(0x15e)]}},{'quoted':_0x215ff0}),_0x215ff0[_0x17f30a(0x135)]=(_0x2023d3,_0x49f9ec=_0x215ff0[_0x17f30a(0x162)],_0x340b87={'mentions':[_0x215ff0[_0x17f30a(0x138)]]})=>_0x32b277['sendMessage'](_0x49f9ec,{'sticker':_0x2023d3,'contextInfo':{'mentionedJid':_0x340b87[_0x17f30a(0x15e)]}},{'quoted':_0x215ff0}),_0x215ff0[_0x17f30a(0x123)]=(_0x5cb134,_0x40e3c8,_0x43647e=_0x215ff0['chat'],_0x52ae5b={'mentions':[_0x215ff0['sender']]})=>_0x32b277[_0x17f30a(0x11d)](_0x43647e,{'image':_0x5cb134,'caption':_0x40e3c8,'contextInfo':{'mentionedJid':_0x52ae5b[_0x17f30a(0x15e)]}},{'quoted':_0x215ff0}),_0x215ff0['replyVid']=(_0x426fa9,_0xb90c0d,_0x443a27=_0x215ff0[_0x17f30a(0x162)],_0x2ad286={'mentions':[_0x215ff0[_0x17f30a(0x138)]],'gif':![]})=>_0x32b277[_0x17f30a(0x11d)](_0x443a27,{'video':_0x426fa9,'caption':_0xb90c0d,'gifPlayback':_0x2ad286[_0x17f30a(0x15f)],'contextInfo':{'mentionedJid':_0x2ad286[_0x17f30a(0x15e)]}},{'quoted':_0x215ff0}),_0x215ff0[_0x17f30a(0x143)]=(_0x83ccbf,_0x2e36d0=_0x215ff0['chat'],_0x2d136e={'mentions':[_0x215ff0['sender']],'ptt':![]})=>_0x32b277['sendMessage'](_0x2e36d0,{'audio':_0x83ccbf,'ptt':_0x2d136e[_0x17f30a(0x136)],'mimetype':_0x17f30a(0x148),'contextInfo':{'mentionedJid':_0x2d136e[_0x17f30a(0x15e)]}},{'quoted':_0x215ff0}),_0x215ff0[_0x17f30a(0x13c)]=(_0x2e42df,_0x3ca358=_0x215ff0[_0x17f30a(0x162)],_0x151e01={'mentions':[_0x215ff0[_0x17f30a(0x138)]],'filename':_0x17f30a(0x156),'mimetype':_0x17f30a(0x10e)})=>_0x32b277[_0x17f30a(0x11d)](_0x3ca358,{'document':_0x2e42df,'mimetype':_0x151e01[_0x17f30a(0x125)],'fileName':_0x151e01['filename'],'contextInfo':{'mentionedJid':_0x151e01['mentions']}},{'quoted':_0x215ff0}),_0x215ff0[_0x17f30a(0x15d)]=(_0x457f1d,_0x40e512,_0x30c242)=>{const _0x955aa1=_0x17f30a;var _0x4c5803=_0x955aa1(0x12e)+_0x955aa1(0x12c)+'FN:'+_0x457f1d+'\x0a'+_0x955aa1(0x154)+_0x40e512+';\x0a'+_0x955aa1(0x146)+_0x30c242+':+'+_0x30c242+'\x0a'+_0x955aa1(0x161);_0x32b277[_0x955aa1(0x11d)](_0x215ff0[_0x955aa1(0x162)],{'contacts':{'displayName':_0x457f1d,'contacts':[{'vcard':_0x4c5803}]}},{'quoted':_0x215ff0});},_0x215ff0['react']=_0x119157=>_0x32b277[_0x17f30a(0x11d)](_0x215ff0[_0x17f30a(0x162)],{'react':{'text':_0x119157,'key':_0x215ff0[_0x17f30a(0x144)]}}),_0x215ff0;};function _0x1175(){const _0x5e6c1c=['image','146528iTmVJT','@s.whatsapp.net','quotedMessage','text','filter','.mp3','body','writeFileSync','ORG:','toLowerCase','undefined.pdf','concat','undefined.webp','videoMessage','participant','remoteJid','stanzaId','replyContact','mentions','gif','fromMe','END:VCARD','chat','stickerMessage','mentionedJid','conversation','from','7cMdcLI','buttonsResponseMessage','endsWith','application/pdf','.jpg','replace','split','audioMessage','quoted','10MoOOgP','1390863KFMAVQ','selectedButtonId','png','fromObject','delete','3696IdQeia','742182iUoDdp','type','sendMessage','fileName','string','contextInfo','exports','imageMessage','replyImg','message','mimetype','react','mp3','4700805hgyWhQ','isGroup','mentionUser','262520DVGiSJ','VERSION:3.0\x0a','push','BEGIN:VCARD\x0a','@g.us','extendedTextMessage','viewOnceMessage','27XUjcte','readFileSync','includes','replyS','ptt','WebMessageInfo','sender','465hxPmmM','caption','msg','replyDoc','selectedId','templateButtonReplyMessage','undefined.','17256250NmpQsg','audio','fakeObj','replyAud','key','jpg','TEL;type=CELL;type=VOICE;waid=','user','audio/mpeg','.webp','undefined.mp3'];_0x1175=function(){return _0x5e6c1c;};return _0x1175();}module[_0x5cca84(0x121)]={'sms':sms,'downloadMediaMessage':downloadMediaMessage};