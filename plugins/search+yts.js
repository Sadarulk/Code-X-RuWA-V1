const { cmd, commands } = require('../command'),
  axios = require('axios'),
  { Buffer } = require('buffer')
cmd(
  {
    pattern: 'yts',
    alias: ['ytsearch'],
    use: '.yts sameer kutti',
    react: '\uD83D\uDD0E',
    desc: 'Search and get details from youtube.',
    category: 'search',
    filename: __filename,
  },
  async (
    _0x919e5c,
    _0x25ac9a,
    _0x372312,
    {
      from: _0x270d7b,
      l: _0x396890,
      quoted: _0x5823a2,
      body: _0x5252fc,
      isCmd: _0xdf4b88,
      umarmd: _0x430315,
      args: _0x548bad,
      q: _0x5bb078,
      isGroup: _0x285ed9,
      sender: _0x586724,
      senderNumber: _0x283424,
      botNumber2: _0x5ac354,
      botNumber: _0x4907dc,
      pushname: _0x50a974,
      isMe: _0x199cc8,
      isOwner: _0x1680ef,
      groupMetadata: _0x26a8fa,
      groupName: _0x14c4d4,
      participants: _0x9d75d2,
      groupAdmins: _0x3acfbf,
      isBotAdmins: _0x67759,
      isAdmins: _0xd48492,
      reply: _0x32fbc8,
    }
  ) => {
    try {
      if (!_0x5bb078) {
        return _0x32fbc8('*Please give me words to search*')
      }
      try {
        let _0x1d1e4c = require('yt-search')
        var _0x51e06d = await _0x1d1e4c(_0x5bb078)
      } catch (_0xe7ce41) {
        return (
          _0x396890(_0xe7ce41),
          await _0x919e5c.sendMessage(
            _0x270d7b,
            { text: '*Error !!*' },
            { quoted: _0x25ac9a }
          )
        )
      }
      var _0x3f3797 = ''
      _0x51e06d.all.map((_0x13ab69) => {
        _0x3f3797 +=
          ' *\uD83C\uDF38' +
          _0x13ab69.title +
          '*\n\uD83D\uDD17 ' +
          _0x13ab69.url +
          '\n\n'
      })
      await _0x919e5c.sendMessage(
        _0x270d7b,
        { text: _0x3f3797 },
        { quoted: _0x25ac9a }
      )
    } catch (_0xe7730f) {
      _0x396890(_0xe7730f)
      _0x32fbc8('*Error !!*')
    }
  }
)





  
