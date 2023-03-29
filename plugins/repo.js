const { command, isPublic, tiny } = require("../lib")
const axios = require("axios")
const thumb = "https://telegra.ph/file/e1fa1db5368bc7eb40c95.png";

command({ pattern: "git", fromMe: isPublic, type: "search",}, async(message,match) => {
let { data } = await axios.get(`https://api.github.com/repos/Diegoson/AMAROK-MD`)
const buttons = [
  {buttonId: 'ping', buttonText: {displayText: 'ALIVE'}, type: 1},
  {buttonId: 'alive', buttonText: {displayText: 'ALIVE'}, type: 1}
]
const buttonMessage = {
  image: {url: `https://telegra.ph/file/6086f101a36f7fc14bff6.png` },
  caption: tiny(`Amarok\n\n🌟Stars: ${data.stargazers_count}\n\n🚦Forks: ${data.forks_count}\n\n👀Views: ${data.watchers_count}\n\n📑Language: ${data.language}\n\n🌲Branch: ${data.default_branch}\n\n💡Created At: ${data.created_at}\n\n💈Last Update: ${data.updated_at}\n\n👁️Mode: public\n\n🔗Git Link: https://github.com/Diegoson/AMAROK-MD`),
  footer: tiny(`toxic team`),
  buttons: buttons,
  headerType: 1
}
contextlnfo: {
   externalAdReply: {
      title: 'ᴀᴍᴀʀᴏᴋ MD',
      body: 'ᴅɪᴇɢᴏsᴏᴍ',
      mediaType: 2,
      thumbnail: 'https://telegra.ph/file/e1fa1db5368bc7eb40c95.png',
      mediaUrl: 'https://amarok-deploy.vercel.app',
      sourceUrl: 'https://amarok-deploy.vercel.app',
      showAdAttribution: true
}}
});
return await message.client.sendMessage(message.jid, buttonMessage, {
 quoted: message 
 });
