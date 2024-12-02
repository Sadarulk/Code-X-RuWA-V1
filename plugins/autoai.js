const config = require("../config");
const { cmd,commands } = require("../command");
const { fetchJson } = require('../lib/functions');

cmd({
  'on': "body"
}, async (_0x496613, _0xb321aa, _0x123297, {
  from: _0x1b1199,
  quoted: _0x48c2f0,
  body: _0x39392a,
  isCmd: _0xb78661,
  command: _0x355f12,
  args: _0x2826a9,
  q: _0xbb9fa8,
  isGroup: _0x1c8d23,
  sender: _0x4bf5f9,
  senderNumber: _0x2b71aa,
  botNumber2: _0xbda015,
  botNumber: _0x22a703,
  pushname: _0x4d6c10,
  isMe: _0x137e3b,
  isOwner: _0xa5293a,
  groupMetadata: _0x516579,
  groupName: _0x283b77,
  participants: _0x4532e3,
  groupAdmins: _0x5407e4,
  isBotAdmins: _0x7c413b,
  isAdmins: _0x35f550,
  reply: _0x3239c6
}) => {
  try {
    const _0x11b155 = config.AUTO_AI_JID;
    if (_0xb78661) {
      return;
    }
    if (_0x2b71aa === _0x22a703) {
      return;
    }
    if (!_0x11b155.includes(_0x1b1199)) {
      return;
    }
    if (config.AUTO_AI === 'on') {
      let _0x1a6eaf = await fetchJson("https://www.dark-yasiya-api.site/ai/chatgpt?q=" + _0x39392a);
      return _0x3239c6('' + _0x1a6eaf.result);
    }
  } catch (_0x1884b2) {
    console.log(_0x1884b2);
    _0x3239c6('' + _0x1884b2);
  }
});
