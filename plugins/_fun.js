const { dare, truth, random_question } = require("../lib/truth-dare.js")
const axios = require("axios")
const { command, isPublic } = require("../lib")

command(
  {      pattern: "truth",
         fromMe: isPublic,
         type: "mics",
  },
  async(message,match, text) => {
  return await message.reply(`${truth()}`);
}
)

//------------------------------------------
//          TRUTH OR DARE 
//          NEW FEATURE
//------------------------------------------

command(
  {      pattern: "dare",
         fromMe: isPublic,
         type: "mics",
  },
  async(message, match, text) => {
 return await message.reply(`${dare()}`);
}
)
 
//--------------------------------
//------FACTS NEW FEATURE---------
//--------------------------------

command({
       pattern: "fact",
       fromMe: isPublic,
       type: "mics",
 },
 async(message, match, text) => {
      const { data } = await axios.get(`https://nekos.life/api/v2/fact`)
      return message.reply(`*Fact:* ${data.fact}\n\n*Powered by Amarok*`)   
    }
)

//------------------
//    IM BORED 
//-----------------

command({
  pattern: "quote",
  fromMe: isPublic,
  type: "mics",
},
async(message, match, text) => {
var quoo = await axios.get(`https://favqs.com/api/qotd`)
const replyf = `
╔════◇
║ *🎖Content:* ${quoo.data.quote.body}
║ *👤Author:* ${quoo.data.quote.author}
║    
╚════════════╝ `

 return message.reply(replyf)
}
)

