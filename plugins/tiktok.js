const { command , isPublic, isUrl, getJson } = require("../lib")
const fs = require("fs")
const fetch = require("node-fetch");
  command(
    {
           pattern: "tik",
           fromMe: isPublic,
           type: "downloader",
    },
   async(message,match) => {
  if(!match) await message.sendMessage("I need Link");
     let response = await getJson(`https://api.botcahx.biz.id/api/dowloader/tikok?url=${match}&apikey=Admin`);
  
  let media = await (await fetch(response.result.video))
     await message.client.sendMessage(message.jid , { video : media } , { quoted : message , caption : `${response.title })
});
