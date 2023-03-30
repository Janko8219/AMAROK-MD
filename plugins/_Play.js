 const { command, isPrivate } = require("../lib")
 const yts = require("yt-search")

command(
  {
    pattern: "play",
    fromMe: isPrivate,
    desc: "Downloading songs",
    type: "downloader",
  },
  async (message, match) => {
         if (!match) return await message.reply("_play starboy_")
                let yts = require("youtube-yts")
                let search = await yts(match)
                let anulay = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anulay.url}`, buttonText: {displayText: 'ꜱᴏɴɢ🎵'}, type: 1},
                    {buttonId: `ytv ${anulay.url}`, buttonText: {displayText: 'ᴠɪᴅᴇᴏ🎥'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anulay.thumbnail },
                    caption: `
𒈒 𝑻𝑰𝑻𝑳𝑬 : ${anulay.title}
𒈒 𝑰𝑫 : ${anulay.videoId}
𒈒 𝑫𝑼𝑹𝑨𝑻𝑰𝑶𝑵 : ${anulay.timestamp}
𒈒 𝑽𝑰𝑬𝑾𝑺 : ${anulay.views}
𒈒 𝑼𝑷𝑳𝑶𝑨𝑫 𝑨𝑻 : ${anulay.ago}
𒈒 𝑨𝑼𝑻𝑯𝑶𝑹 : ${anulay.author.name}
𒈒 𝑪𝑯𝑨𝑵𝑵𝑬𝑳 : ${anulay.author.url}
𒈒 𝑫𝑬𝑺𝑪𝑹𝑰𝑷𝑻𝑰𝑶𝑵 : ${anulay.description}
𒈒 𝑼𝑹𝑳 : ${anulay.url}`,
                    footer: BOT_NAME,
                    buttons: buttons,
                    headerType: 4
                }
                message.client.sendMessage(message.jid, buttonMessage, { quoted: message });
  })
