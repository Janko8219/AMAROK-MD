const { command, isPrivate } = require("../lib")

command(
  {
    pattern: "song",
    fromMe: isPrivate,
    desc: "Downloads Song",
    type: "downloader",
  },
  async (message, match) => {
const krizaudp3 = require("../lib/ytdl2")
if (match.length < 1 || !isUrl(match) || !krizaudp3.isYTUrl(match)) return await message.reply("_ytmp3 yt url_")
const audio=await krizaudp3.mp3(match)
await message.client.sendMessage(message.jid,{
    audio: fs.readFileSync(audio.path),
    mimetype: 'audio/mp4', ptt: false,
    contextInfo:{
        externalAdReply:{
            title:audio.meta.title,
            body: BOT_NAME,
            thumbnail: await getBuffer(audio.meta.image),
            mediaType:2,
            mediaUrl:match,
        }

    },
},{quoted:message})
await fs.unlinkSync(audio.path)
});
