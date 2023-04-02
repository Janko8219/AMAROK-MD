const { command, isPrivate, tiny, serif_B, clockString, getJson } = require('../lib')
const { WORK_TYPE, BOT_NAME, OWNER_NAME, HANDLERS } = require('../config.js')
const events = require("../lib/event")
const { FancyRandom, jslbuffer } = require ("abu-bot")
const { hostname, uptime } = require("os")
const config = require("../config.js")
const prefix = config.PREFIX
const thumb = "https://telegra.ph/file/e1fa1db5368bc7eb40c95.png";

command(
  {
    pattern: "list",
    fromMe: isPrivate,
    desc: "Show All commands",
    dontAddCommandList: true,
  },
  async (message, match) => {
    if (match) {
      for (let i of events.commands) {
        if (i.pattern.test(message.prefix + match))
          message.reply(
            `\`\`\`Command : ${mssage.prefix}${match.trim()}
Description : ${i.desc}\`\`\``
          );
      }
    } else {
    let logo = await jslbuffer(thumb)
      let { prefix } = message;
      let [date, time] = new Date()
        .toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
        .split(",");
      let menu = `┏━━━━━⟪ ${BOT_NAME} ⟫━━━⦿
┃ ✗ *OWNER* :  ${OWNER_NAME}
┃ ✗ *PREFIX* : ${HANDLERS}
┃ ✗ *USER* : ${message.pushName}
┃ ✗ *DATE* : ${date}
┃ ✗ *TIME* : ${time}
┗━━━━━━━━━━━━━━━⦿
┏━━━『 *UPDATED* 』━━━❖\n╽`;
      let cmnd = [];
      let cmd;
      let category = [];
      events.commands.map((command, num) => {
        if (command.pattern) {
          cmd = command.pattern
            .toString()
            .match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2];
        }

        if (!command.dontAddCommandList && cmd !== undefined) {
          let type;
          if (!command.type) {
            type = "misc";
          } else {
            type = command.type.toLowerCase();
          }

          cmnd.push({ cmd, type: type });

          if (!category.includes(type)) category.push(type);
        }
      });
      cmnd.sort();
      category.sort().forEach((cmmd) => {
       menu += `
┃┏━━━━━━━━━━━━━◆
┣┫ *❃---- ${cmmd} ----✯*
┃┗┯━━━━━━━━━━━━◆
┠┬┤`
        let comad = cmnd.filter(({ type }) => type == cmmd);
        comad.forEach(({ cmd }, num) => {
          menu += `\n┃│❒✗ ${(num += 1)} ${cmd.trim()}`;
        });
        menu += `\n┃╰─────────────◆\n┃`;
      });             


      menu += `\n┗━━━━━━━━━━━╾ᐧᐧᐧᐧ⦿`;
      return await message.client.sendMessage(message.jid, {
      image: { url: 'https://telegra.ph/file/6086f101a36f7fc14bff6.png', },
      caption: tiny(menu),
      footer: tiny(
             `amarok-md`),
      buttons: [
        {buttonId: 'alive', buttonText: {displayText: 'ALIVE TEST'}},
      {buttonId: 'ping', buttonText: {displayText: 'SPEED TEST'}}
    ],
    
    contextInfo: {
				externalAdReply: {
					title:  "AMAROK-MD",
					body: "TOXIC-TEAM",
					mediaType: 2,
					thumbnail: logo,
					mediaUrl: 'https://amarok-deploy.vercel.app',
					sourceUrl: 'https://amarok-deploy.vercel.app',
					showAdAttribution: true
					}
				}
			}, {quoted: message})
			}
})

 //===========================================================================
/*command({
            pattern: "menu",
            fromMe: isPrivate,
            dontAddCommandList: true,
         },
        async (message, match, m) => {

            let [date, time] = new Date()
                .toLocaleString("en-IN", {
                    timeZone: "Africa/Johannesburg"
                })
                .split(",");
            let menu = `
    ╭───────────㋰
    │╭──[ ${BOT_NAME} ]──㋰
    ││USER :  ${message.pushName}
    ││NUMBER :  ${m.sender.split("@")[0]}
    ││WORKTYPE : ${WORK_TYPE}
    │╰──㋰
    │
    │╭──[ "INFO BOT"]──㋰
    ││BOTNAME : ${BOT_NAME}
    ││TIME : ${time}
    ││DATE : ${date}
    ││OWNER : ${OWNER_NAME}
    ││PREFIX : ${HANDLERS}
    ││HOSTNAME : ${hostname().split("-")[0]}
    │╰──㋰
    ╰───────────㋰\n`

            let buttons = [
                {
                    buttonId: "ping",
                    buttonText: {
                        displayText: tiny("SPEED")
                    },
       },
                {
                    buttonId: "list",
                    buttonText: {
                        displayText: tiny("LIST")
                    },
       }
    ]
            let contextInfo = {
                externalAdReply: {
                    title: "AMAROK-MD",
                    body: "TOXIC-TEAM",
                    mediaType: 2,
                    thumbnail: 'https://telegra.ph/file/6086f101a36f7fc14bff6.png',
                    mediaUrl: 'https://amarok-deploy.vercel.app',
                    sourceUrl: 'https://amarok-deploy.vercel.app',
                    showAdAttribution: true
                }
            }

            const listMessage = {
                image: {
                    url: 'https://telegra.ph/file/6086f101a36f7fc14bff6.png'
                 },
                caption: tiny(menu),
                footer: "amarok",
                buttons: buttons,
                contextInfo: contextInfo
            }

            return await message.client.sendMessage(message.jid,
                listMessage, {
                    quoted: message
                })
        });
*/
//=======================================================================================
//               AMAROK ALIVE MSG
//========================================================================================

command(
  {
    pattern: "alive",
    fromMe: isPrivate,
    dontAddCommandList: true,
  },
async (message,match) => {
	
	let [date, time] = new Date()
      .toLocaleString("en-IN", { timeZone: "Africa/Johannesburg" })
      .split(",");
let alive = `

 *🚦Botname: ${BOT_NAME}
 *🚦Uptime: ${time}
 *⌚Date: ${date}
 *🕸Version: ${require("../package.json").version}
 *👤Owner: ${OWNER_NAME}
 *🎗Prefix: ${HANDLERS}
 *🏅Useer: ${message.pushName}
 *🚦Working hours: ${clockString (uptime())}
`;

await message.client.sendMessage(message.jid,{
image: { url: `https://i.ibb.co/6yVCHcL/38aa5206e8bc.jpg` },
      caption: tiny(alive),
      footer: tiny(`amarok md` ),
      buttons: [
        {
        buttonId: `owner`,
        buttonText: {displayText: tiny("OWNER") },
        },
        {
        buttonId: `menu`,
        buttonText: {displayText: tiny("MENU") },
        },
      ],
    });
  }
);

//=======================================================================
//                    ChatGpT AI 
//=======================================================================



//===============================================
//           MENU DESIGN 
//================================================
/*
command(
  {
    pattern: "men",
    fromMe: isPrivate,
    dontAddCommandList: true,
  },
async (message,match) => {
	let logo = await jslbuffer(thumb)
	let [date, time] = new Date()
      .toLocaleString("en-IN", { timeZone: "Africa/Johannesburg" })
      .split(",");
let alive = `

 ╭───────────㋰
    │╭──[ ${BOT_NAME} ]──㋰
    ││*USER* :  ${message.pushName}
    ││*NUMBER* :  ${m.sender.split("@")[0]}
    ││*WORKTYPE* : ${WORK_TYPE}
    │╰──㋰
    │
    │╭──[ ${OWNER_NAME}]──㋰
    ││*BOTNAME* : ${BOT_NAME}
    ││*TIME* : ${time}
    ││*DATE* : ${date}
    ││*OWNER* : ${OWNER_NAME}
    ││*PREFIX* : ${HANDLERS}
    ││*HOSTNAME* : ${hostname().split("-")[0]}
    │╰──㋰
    ╰───────────㋰\n`;

await message.client.sendMessage(message.jid,{
image: { url: `https://i.ibb.co/6yVCHcL/38aa5206e8bc.jpg` },
      caption: tiny(alive),
      footer: tiny(`amarok md` ),
      buttons: [
        {buttonId: '${prefix}alive', buttonText: {displayText: 'LIST MENU'}},
      {buttonId: '${prefix}ping', buttonText: {displayText: 'ALIVE MENU'}}
    ],
 
  contextInfo: {
				externalAdReply: {
					title:  "AMAROK-MD",
					body: "TOXIC-TEAM",
					mediaType: 2,
					thumbnail: logo,
					mediaUrl: 'https://amarok-deploy.vercel.app',
					sourceUrl: 'https://amarok-deploy.vercel.app',
					showAdAttribution: true
					}
				}
			}, {quoted: message})
			})
*/
