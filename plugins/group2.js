const config = require("../config");
const { cmd,commands } = require('../command');
const { getBuffer,getGroupAdmins,getRandom,h2k,isUrl,Json,runtime,sleep,fetchJson} = require("../lib/functions");

    
 const _0x34bd2a = {
  "pattern": "revoke",
  "react": '🖇️',
  "alias": ["revokegrouplink", "resetglink", 'revokelink', "f_revoke"],
  "desc": "To Reset the group link",
  category: "group",
  "use": ".revoke",
  "filename": __filename
};
cmd(_0x34bd2a, async (_0x41ae16, _0x3e573c, _0x38b41a, {
  from: _0xee597d,
  l: _0x378514,
  quoted: _0x55191b,
  body: _0x3fc193,
  isCmd: _0x1dd591,
  command: _0x221d8e,
  args: _0x38fae6,
  q: _0x36db72,
  isGroup: _0xd97564,
  sender: _0x5ae10e,
  senderNumber: _0x33e2fd,
  botNumber2: _0x5e13ab,
  botNumber: _0x5223f6,
  pushname: _0x256155,
  isMe: _0x3fbbba,
  isOwner: _0x3e8d35,
  groupMetadata: _0x16506d,
  groupName: _0x13822d,
  participants: _0xd56593,
  groupAdmins: _0x149535,
  isBotAdmins: _0x57ebae,
  isCreator: _0x377d4d,
  isDev: _0x45e2dc,
  isAdmins: _0x5ba3b6,
  reply: _0xd38f68
}) => {
  try {
    const _0x2f4bdc = (await fetchJson("https://raw.githubusercontent.com/SILENTLOVER40/SILENT-SOBX-MD-DATA/refs/heads/main/DATABASE/mreply.json")).replyMsg;
    if (!_0xd97564) {
      return _0xd38f68(_0x2f4bdc.only_gp);
    }
    if (!_0x5ba3b6) {
      const _0x193f80 = {
        quoted: _0x3e573c
      };
      if (!_0x45e2dc) {
        _0xd38f68(_0x2f4bdc.you_adm);
        return _0x193f80;
      }
    }
    if (!_0x57ebae) {
      return _0xd38f68(_0x2f4bdc.give_adm);
    }
    await _0x41ae16.groupRevokeInvite(_0xee597d);
    const _0x3bdddc = {
      text: "*Group link Reseted* ⛔"
    };
    const _0xddbc59 = {
      "quoted": _0x3e573c
    };
    await _0x41ae16.sendMessage(_0xee597d, _0x3bdddc, _0xddbc59);
  } catch (_0x1920cf) {
    const _0x2fd8b5 = {
      "text": '❌',
      key: _0x3e573c.key
    };
    const _0x323b31 = {
      "react": _0x2fd8b5
    };
    await _0x41ae16.sendMessage(_0xee597d, _0x323b31);
    console.log(_0x1920cf);
    _0xd38f68("❌ *Error Accurated !!*\n\n" + _0x1920cf);
  }
});


const _0x57538f = {
  "pattern": "kick",
  "react": '🥏',
  "alias": ["remove"],
  "desc": "To Remove a participant from Group",
  category: "group",
  "use": ".kick",
  "filename": __filename
};
cmd(_0x57538f, async (_0x41e259, _0x1b6220, _0x5accc4, {
  from: _0x1405da,
  l: _0x3c5793,
  quoted: _0xddbe82,
  body: _0x38545a,
  isCmd: _0x586340,
  command: _0x515391,
  mentionByTag: _0x5a7b0c,
  args: _0x1ba8bf,
  q: _0x289e78,
  isGroup: _0x4f8fb5,
  sender: _0x3cd0e8,
  senderNumber: _0x153fdb,
  botNumber2: _0xd8495a,
  botNumber: _0x1debc0,
  pushname: _0x3c454b,
  isMe: _0x24f1df,
  isOwner: _0x163b25,
  groupMetadata: _0xb24815,
  groupName: _0x1f20bd,
  participants: _0x300731,
  groupAdmins: _0x373ac7,
  isBotAdmins: _0x16fb62,
  isCreator: _0x5ed285,
  isDev: _0x2a7c41,
  isAdmins: _0x3b32e1,
  reply: _0x4add12
}) => {
  try {
    const _0xf4014e = (await fetchJson("https://raw.githubusercontent.com/SILENTLOVER40/SILENT-SOBX-MD-DATA/refs/heads/main/DATABASE/mreply.json")).replyMsg;
    if (!_0x4f8fb5) {
      return _0x4add12(_0xf4014e.only_gp);
    }
    if (!_0x3b32e1) {
      const _0x30adce = {
        'quoted': _0x1b6220
      };
      if (!_0x2a7c41) {
        _0x4add12(_0xf4014e.you_adm);
        return _0x30adce;
      }
    }
    if (!_0x16fb62) {
      return _0x4add12(_0xf4014e.give_adm);
    }
    let _0x3e8f17 = _0x1b6220.mentionedJid ? _0x1b6220.mentionedJid[0] : _0x1b6220.msg.contextInfo.participant || false;
    if (!_0x3e8f17) {
      return _0x4add12("*Couldn't find any user in context* ❌");
    }
    await _0x41e259.groupParticipantsUpdate(_0x1405da, [_0x3e8f17], "remove");
    const _0x44b452 = {
      'text': "*Successfully removed*  ✔️"
    };
    const _0x30c271 = {
      "quoted": _0x1b6220
    };
    await _0x41e259.sendMessage(_0x1405da, _0x44b452, _0x30c271);
  } catch (_0x2c8e2b) {
    const _0x54186c = {
      "text": '❌',
      key: _0x1b6220.key
    };
    const _0x3d2cb9 = {
      react: _0x54186c
    };
    await _0x41e259.sendMessage(_0x1405da, _0x3d2cb9);
    console.log(_0x2c8e2b);
    _0x4add12("❌ *Error Accurated !!*\n\n" + _0x2c8e2b);
  }
});



const _0xd699f4 = {
  pattern: "promote",
  "react": '🥏',
  "alias": ['addadmin'],
  "desc": "To Add a participatant as a Admin",
  "category": 'group',
  use: '.promote',
  "filename": __filename
};
cmd(_0xd699f4, async (_0xd441ad, _0x386107, _0xa0d74e, {
  from: _0x1762c0,
  l: _0x6b3fab,
  quoted: _0x1a22c1,
  body: _0x260161,
  isCmd: _0x1f39c3,
  command: _0x36db16,
  mentionByTag: _0x3f79bc,
  args: _0x4d646e,
  q: _0x1fbf8d,
  isGroup: _0x299bf3,
  sender: _0x11f7a0,
  senderNumber: _0x3246da,
  botNumber2: _0x36be92,
  botNumber: _0x135200,
  pushname: _0x44fecd,
  isMe: _0x3ede2b,
  isOwner: _0x1185ac,
  groupMetadata: _0x3ca1f0,
  groupName: _0x20a13e,
  participants: _0x280437,
  groupAdmins: _0x2cce76,
  isBotAdmins: _0x21032b,
  isCreator: _0x5b91ad,
  isDev: _0x28e3e2,
  isAdmins: _0xd5dab5,
  reply: _0x48bf1f
}) => {
  try {
    const _0x2c5d13 = (await fetchJson("https://raw.githubusercontent.com/SILENTLOVER40/SILENT-SOBX-MD-DATA/refs/heads/main/DATABASE/mreply.json")).replyMsg;
    if (!_0x299bf3) {
      return _0x48bf1f(_0x2c5d13.only_gp);
    }
    if (!_0xd5dab5) {
      const _0x18103d = {
        quoted: _0x386107
      };
      if (!_0x28e3e2) {
        _0x48bf1f(_0x2c5d13.you_adm);
        return _0x18103d;
      }
    }
    if (!_0x21032b) {
      return _0x48bf1f(_0x2c5d13.give_adm);
    }
    let _0x5c5b44 = _0x386107.mentionedJid ? _0x386107.mentionedJid[0] : _0x386107.msg.contextInfo.participant || false;
    if (!_0x5c5b44) {
      return _0x48bf1f("*Couldn't find any user in context* ❌");
    }
    const _0x110b3d = await getGroupAdmins(_0x280437);
    if (_0x110b3d.includes(_0x5c5b44)) {
      return _0x48bf1f("❗ *User Already an Admin*  ✔️");
    }
    await _0xd441ad.groupParticipantsUpdate(_0x1762c0, [_0x5c5b44], 'promote');
    const _0x5c487e = {
      'text': "*User promoted as an Admin*  ✔️"
    };
    const _0x5a2555 = {
      quoted: _0x386107
    };
    await _0xd441ad.sendMessage(_0x1762c0, _0x5c487e, _0x5a2555);
  } catch (_0x467402) {
    const _0x914163 = {
      "text": '❌',
      "key": _0x386107.key
    };
    const _0x572963 = {
      "react": _0x914163
    };
    await _0xd441ad.sendMessage(_0x1762c0, _0x572963);
    console.log(_0x467402);
    _0x48bf1f("❌ *Error Accurated !!*\n\n" + _0x467402);
  }
});


const _0x10f253 = {
  "pattern": 'demote',
  react: '🥏',
  alias: ["removeadmin"],
  "desc": "To Demote Admin to Member",
  "category": "group",
  "use": ".demote",
  "filename": __filename
};
cmd(_0x10f253, async (_0x9b2f7d, _0x39351b, _0xcc8395, {
  from: _0xe68cad,
  l: _0x7244ea,
  quoted: _0x52f979,
  body: _0x4f94b4,
  isCmd: _0x1a108c,
  command: _0x41f029,
  mentionByTag: _0x2b232a,
  args: _0x256b13,
  q: _0x43014d,
  isGroup: _0x5b6a75,
  sender: _0x1def0f,
  senderNumber: _0x201f82,
  botNumber2: _0x120e3c,
  botNumber: _0x47554d,
  pushname: _0x2b6cae,
  isMe: _0x24a7ee,
  isOwner: _0x10049e,
  groupMetadata: _0xec1693,
  groupName: _0x57285d,
  participants: _0x275dec,
  groupAdmins: _0x174790,
  isBotAdmins: _0x4f333b,
  isCreator: _0x3643ff,
  isDev: _0x3eb57c,
  isAdmins: _0x455273,
  reply: _0x3566a2
}) => {
  try {
    const _0x5577a8 = (await fetchJson("https://raw.githubusercontent.com/SILENTLOVER40/SILENT-SOBX-MD-DATA/refs/heads/main/DATABASE/mreply.json")).replyMsg;
    if (!_0x5b6a75) {
      return _0x3566a2(_0x5577a8.only_gp);
    }
    if (!_0x455273) {
      const _0x34a16d = {
        'quoted': _0x39351b
      };
      if (!_0x3eb57c) {
        _0x3566a2(_0x5577a8.you_adm);
        return _0x34a16d;
      }
    }
    if (!_0x4f333b) {
      return _0x3566a2(_0x5577a8.give_adm);
    }
    let _0x29e551 = _0x39351b.mentionedJid ? _0x39351b.mentionedJid[0] : _0x39351b.msg.contextInfo.participant || false;
    if (!_0x29e551) {
      return _0x3566a2("*Couldn't find any user in context* ❌");
    }
    const _0x4f0d9c = await getGroupAdmins(_0x275dec);
    if (!_0x4f0d9c.includes(_0x29e551)) {
      return _0x3566a2("❗ *User Already not an Admin*");
    }
    await _0x9b2f7d.groupParticipantsUpdate(_0xe68cad, [_0x29e551], "demote");
    const _0x5d8348 = {
      text: "*User No longer an Admin*  ✔️"
    };
    const _0x293c8d = {
      "quoted": _0x39351b
    };
    await _0x9b2f7d.sendMessage(_0xe68cad, _0x5d8348, _0x293c8d);
  } catch (_0x94836e) {
    const _0x1f05fd = {
      "text": '❌',
      "key": _0x39351b.key
    };
    const _0x1346fb = {
      "react": _0x1f05fd
    };
    await _0x9b2f7d.sendMessage(_0xe68cad, _0x1346fb);
    console.log(_0x94836e);
    _0x3566a2("❌ *Error Accurated !!*\n\n" + _0x94836e);
  }
});


const _0x53a4af = {
  "pattern": "tagall",
  "react": '🔊',
  "alias": ["f_tagall"],
  "desc": "To Tag all Members",
  "category": "group",
  "use": ".tagall",
  "filename": __filename
};
cmd(_0x53a4af, async (_0x18845e, _0x4632c9, _0x55ef21, {
  from: _0x2921e4,
  l: _0xdf8a7f,
  quoted: _0x10158f,
  body: _0x11e711,
  isCmd: _0x11a69a,
  command: _0x4fc745,
  mentionByTag: _0x4bc0e1,
  args: _0x507a0,
  q: _0x82f972,
  isGroup: _0x27faa2,
  sender: _0x12fa8,
  senderNumber: _0x1797a0,
  botNumber2: _0x53e37a,
  botNumber: _0x370958,
  pushname: _0x366640,
  isMe: _0x34a29c,
  isOwner: _0x12be5a,
  groupMetadata: _0x39d18f,
  groupName: _0x3b5423,
  participants: _0x56c772,
  groupAdmins: _0x5b3f7e,
  isBotAdmins: _0x3b20c3,
  isCreator: _0x2833a2,
  isDev: _0x3d6d09,
  isAdmins: _0x18b86b,
  reply: _0xbd5407
}) => {
  try {
    const _0x5aa172 = (await fetchJson("https://raw.githubusercontent.com/SILENTLOVER40/SILENT-SOBX-MD-DATA/refs/heads/main/DATABASE/mreply.json")).replyMsg;
    if (!_0x27faa2) {
      return _0xbd5407(_0x5aa172.only_gp);
    }
    if (!_0x18b86b) {
      const _0x1c6dca = {
        quoted: _0x4632c9
      };
      if (!_0x3d6d09) {
        _0xbd5407(_0x5aa172.you_adm);
        return _0x1c6dca;
      }
    }
    if (!_0x3b20c3) {
      return _0xbd5407(_0x5aa172.give_adm);
    }
    let _0x3993c3 = "💱 *HI ALL ! GIVE YOUR ATTENTION PLEASE* \n \n";
    for (let _0x445e7a of _0x56c772) {
      _0x3993c3 += "> ᴅᴇᴀʀ ☣️ @" + _0x445e7a.id.split('@')[0] + "\n";
    }
    const _0xb97cc3 = {
      quoted: _0x4632c9
    };
    _0x18845e.sendMessage(_0x2921e4, {
      'text': _0x3993c3,
      'mentions': _0x56c772.map(_0x47d9c6 => _0x47d9c6.id)
    }, _0xb97cc3);
  } catch (_0x1f1f2c) {
    const _0xbc6e6b = {
      "text": '❌',
      "key": _0x4632c9.key
    };
    const _0x305f38 = {
      react: _0xbc6e6b
    };
    await _0x18845e.sendMessage(_0x2921e4, _0x305f38);
    console.log(_0x1f1f2c);
    _0xbd5407("❌ *Error Accurated !!*\n\n" + _0x1f1f2c);
  }
});


const _0x3220aa = {
  pattern: "hidetag",
  "react": '🔊',
  "alias": ["tag", 'f_tag'],
  "desc": "To Tag all Members for Message",
  category: "group",
  "use": ".tag Hi",
  "filename": __filename
};
cmd(_0x3220aa, async (_0x42cc1d, _0x4f5e7e, _0x49808f, {
  from: _0x53e02e,
  l: _0xf27966,
  quoted: _0x499ac3,
  body: _0x35aa48,
  isCmd: _0x580a45,
  command: _0x2dcbc5,
  mentionByTag: _0x586803,
  args: _0x1b98ce,
  q: _0x153bef,
  isGroup: _0x2b35af,
  sender: _0x47dc62,
  senderNumber: _0x22cfc7,
  botNumber2: _0x3555de,
  botNumber: _0x386f73,
  pushname: _0x450314,
  isMe: _0x397067,
  isOwner: _0x46be22,
  groupMetadata: _0x2126df,
  groupName: _0x4ad3fc,
  participants: _0x3b7b63,
  groupAdmins: _0x54e5a2,
  isBotAdmins: _0x2e297e,
  isCreator: _0x46bc7f,
  isDev: _0x2d511d,
  isAdmins: _0x67d41d,
  reply: _0x247340
}) => {
  try {
    const _0x1e63ea = (await fetchJson("https://raw.githubusercontent.com/SILENTLOVER40/SILENT-SOBX-MD-DATA/refs/heads/main/DATABASE/mreply.json")).replyMsg;
    if (!_0x2b35af) {
      return _0x247340(_0x1e63ea.only_gp);
    }
    if (!_0x67d41d) {
      const _0x60891f = {
        quoted: _0x4f5e7e
      };
      if (!_0x2d511d) {
        _0x247340(_0x1e63ea.you_adm);
        return _0x60891f;
      }
    }
    if (!_0x2e297e) {
      return _0x247340(_0x1e63ea.give_adm);
    }
    if (!_0x153bef) {
      return _0x247340("*Please add a Message* ℹ️");
    }
    let _0x369546 = '' + _0x153bef;
    const _0x10b59c = {
      "quoted": _0x4f5e7e
    };
    _0x42cc1d.sendMessage(_0x53e02e, {
      'text': _0x369546,
      'mentions': _0x3b7b63.map(_0x50fa51 => _0x50fa51.id)
    }, _0x10b59c);
  } catch (_0x461191) {
    const _0x5b4083 = {
      text: '❌',
      "key": _0x4f5e7e.key
    };
    const _0x3604e5 = {
      "react": _0x5b4083
    };
    await _0x42cc1d.sendMessage(_0x53e02e, _0x3604e5);
    console.log(_0x461191);
    _0x247340("❌ *Error Accurated !!*\n\n" + _0x461191);
  }
});


const _0x446ca7 = {
  "pattern": "taggp",
  react: '🔊',
  alias: ["tggp", 'f_taggp'],
  desc: "To Tag all Members for Message",
  "category": "group",
  use: ".tag Hi",
  "filename": __filename
};
cmd(_0x446ca7, async (_0xb2d1ca, _0x26e406, _0x1fe36e, {
  from: _0x48c3b8,
  l: _0x33ce03,
  quoted: _0x13d52e,
  body: _0x298a5b,
  isCmd: _0x2b91c0,
  command: _0xe35736,
  mentionByTag: _0x7ad100,
  args: _0x18c434,
  q: _0x1be236,
  isGroup: _0x31bc0b,
  sender: _0x28ca24,
  senderNumber: _0x1a9dd6,
  botNumber2: _0x583e95,
  botNumber: _0x2aa89e,
  pushname: _0x237aa6,
  isMe: _0x26c405,
  isOwner: _0x114432,
  groupMetadata: _0xf9c904,
  groupName: _0x17e4d5,
  participants: _0x5ae5ac,
  groupAdmins: _0x718ee3,
  isBotAdmins: _0x1ddf62,
  isCreator: _0x8ed2b,
  isDev: _0x9e4c10,
  isAdmins: _0x32ac67,
  reply: _0x4b3c82
}) => {
  try {
    if (!_0x1fe36e.quoted) {
      return _0x4b3c82("*Please mention a message* ℹ️");
    }
    if (!_0x1be236) {
      return _0x4b3c82("*Please add a Group Jid* ℹ️");
    }
    let _0x2298f1 = '' + _0x1fe36e.quoted.msg;
    const _0x1a15a4 = {
      quoted: _0x26e406
    };
    _0xb2d1ca.sendMessage(_0x1be236, {
      'text': _0x2298f1,
      'mentions': _0x5ae5ac.map(_0x8aac9 => _0x8aac9.id)
    }, _0x1a15a4);
  } catch (_0x438f31) {
    const _0x3e865b = {
      "text": '❌',
      "key": _0x26e406.key
    };
    const _0x1204ec = {
      "react": _0x3e865b
    };
    await _0xb2d1ca.sendMessage(_0x48c3b8, _0x1204ec);
    console.log(_0x438f31);
    _0x4b3c82("❌ *Error Accurated !!*\n\n" + _0x438f31);
  }
});


