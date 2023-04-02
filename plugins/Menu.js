const {
     command,
     isPublic,
     isPrivate,
     tiny,
     clockString
  } = require("../lib")
 const config = require("../config")
 const prefix = config.PREFIX

 const { hostname, uptime } = require("os");
  command(
     {     pattern: "menu",
           fromMe: isPrivate,
           type: "user",
    },
   async(message,match) => {
 
  let sections = [
     {  
    title: "ᴀᴍᴀʀᴏᴋ ᴍᴇɴᴜ",
    rows: [
         {title: "「 ᴅᴏᴡɴʟᴏᴀᴅs 」", rowld: 'downloads', description: `ғᴇᴀᴛᴜʀᴇᴅ ʙʏ ᴀᴍᴀʀᴏᴋ`},
         {title: "「 ɢʀᴏᴜᴘ ᴍᴇɴᴜ 」", rowld: 'groups', description: `ғᴇᴀᴛᴜʀᴇᴅ ʙʏ ᴀᴍᴀʀᴏᴋ`},
         {title: "「 ʟɪsᴛ ᴍᴇɴᴜ 」", rowld: 'list', description: `ғᴇᴀᴛᴜʀᴇᴅ ʙʏ ᴀᴍᴀʀᴏᴋ`},
         {title: "「 ɢᴀᴍᴇ ᴍᴡɴᴜ 」", rowld: 'games', description: `ғᴇᴀᴛᴜʀᴇᴅ ʙʏ ᴀᴍᴀʀᴏᴋ`}
    ]
 },{
     title: "ɴᴏᴛ ᴄᴏᴍᴍᴀɴᴅs",
     rows: [
           {title: "「 ᴄᴏɴᴠᴇʀᴛᴇʀ 」", rowld: 'vectors', description: `ғᴇᴀᴛᴜʀᴇᴅ ʙʏ ᴀᴍᴀʀᴏᴋ`},
           {title: "「 ᴜꜱᴇʀ ᴍᴇɴᴜ 」", rowld: 'users', description: `ғᴇᴀᴛᴜʀᴇᴅ ʙʏ ᴀᴍᴀʀᴏᴋ`},
           {title: "「 ᴛᴏᴏʟꜱ ᴍᴇɴᴜ 」", rowld: 'toolz', description: `ғᴇᴀᴛᴜʀᴇᴅ ʙʏ ᴀᴍᴀʀᴏᴋ`},
           {title: "「 ꜱᴇᴀʀᴄʜ ᴍᴇɴᴜ 」", rowld: 'searchz', description: `ғᴇᴀᴛᴜʀᴇᴅ ʙʏ ᴀᴍᴀʀᴏᴋ`},
           {title: "「 ᴏᴡɴᴇʀ ᴍᴇɴᴜ 」", rowld: 'coms', description: `ғᴇᴀᴛᴜʀᴇᴅ ʙʏ ᴀᴍᴀʀᴏᴋ`}
       ]
   },
  ]
     let [date, time] = new Date()
        .toLocaleString("en-IN", { timeZone: "Africa/Johannesburg" })
        .split(",");
 const listMessage = {
    text:`*╭───────────㋰*
*│╭──[ ${config.BOT_NAME} ]──㋰*
*││ USER : ${message.pushName}*
*││ VERSION : ${require("../package.json").version}*
*│╰──㋰*
│
*│╭──[ ${config.OWNER_NAME} ]──㋰*
*││ BOTNAME : ${config.BOT_NAME}*
*││ TIME : ${time}*
*││ DATE : ${date}*
*││ OWNER : ${config.OWNER_NAME}*
*││ PREFIX : ${config.HANDLERS}*
*││ HOSTNAME : ${hostname().split("-")[0]}*
*│╰──㋰*
*╰───────────㋰*`,
    buttonText: "ꜱᴇʟᴇᴄᴛ ϻᴇnu:)",
sections 
}
return await message.client.sendMessage(message.jid, listMessage, { react: { text: "🫂", key: message.key,
  quoted: message 
 }})
});
