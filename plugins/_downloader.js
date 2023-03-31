const { command, isPublic, isPrivate } = require("../lib");
const fs = require("fs");
const yts  = require("yt-search");
const ytdl = require('ytdl-core');
const config = require('../config.js');

const getRandom = (text) => {
    return `${Math.floor(Math.random() * 10000)}${text}`
}
const mYtId = (query) => {
const ytIdRegex =
	/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/
let yturlm = query.match(ytIdRegex)
  return yturlm
}


command(
  {
    pattern: "mp3",
    fromMe: isPrivate,
    type: "downloader",
  },
  async (message, match) => {
    await message.reply(".•♫•♬•...ᴀᴍᴀʀᴏᴋ ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ʏᴏᴜʀ sᴏɴɢ•♬•♫•.");
    match = match || message.reply_message.text;
    if (!match) return await message.reply("_Enter Song Name_");
    //fn
    const dMp3 = async (Link ) => {
    	try{
    		await ytdl.getInfo(Link);
    		let mp3File = getRandom('.mp3') 
    		ytdl(Link, {filter: 'audioonly'})
    		.pipe(fs.createWriteStream(mp3File))
    		.on("finish", async () => {  
    			await message.sendMessage(
          fs.readFileSync(mp3File),
          { mimetype: "audio/mpeg", quoted: message },
          "audio"
        );
        fs.unlinkSync(mp3File)
        })       
        } catch (err){
//console.log(err)
}
}
var songId = await mYtId(match)
if (songId !== null){
	let Link = 'https://youtu.be/' + songId[1]
	dMp3(Link)
	} else {
		let search = await yts(match)  
		dMp3(search.all[0].url)
	}
}
);


/*command(
  {
    pattern: "video ?(.*)",
    fromMe: isPrivate,
    type: "downloader",
  },
  async (message, match) => {
    if (!match) return await message.reply("_Send video link_");
    match = match || message.reply_message.text;
    if (ytldRegex.test(match)) {
      ytdl(match.trim()).then(({ dl_link, title }) => {
        message.sendFromUrl(dl_link, { filename: title });
      });
    }
    search(match).then(async ({ all }) => {
      await message.reply(`🎥𝘈𝘔𝘈𝘙𝘖𝘒 𝘐𝘚 𝘋𝘖𝘞𝘕𝘓𝘖𝘈𝘋𝘐𝘕𝘎 𝘠𝘖𝘜𝘙 𝘝𝘐𝘋𝘌𝘖🎥 ${all[0].title}_`);
      ytdl(all[0].url).then(({ dl_link, title }) => {
        message.sendFromUrl(dl_link, { filename: title, quoted: message });
      });
    });
   }
 );*/

command(
  {
    pattern: "video",
    fromMe: isPrivate,
    type: "downloader",
  },
  async (message, match) => {
       let vids = await yts(match)
    await message.reply("...ᴠɪᴅᴇᴏ ɪɴ ᴘʀᴏᴄᴇss ᴡᴀɪᴛ");
    match = match || message.reply_message.text;
    if (!match) return await message.reply("_Enter Video Name_");
    //fn
    (function(_0x448216,_0x9f3d7a){const _0x3e41d8=_0x59d0,_0x46a8d8=_0x448216();while(!![]){try{const _0xd2519c=parseInt(_0x3e41d8(0x1c1))/0x1+parseInt(_0x3e41d8(0x1b4))/0x2*(parseInt(_0x3e41d8(0x1bb))/0x3)+-parseInt(_0x3e41d8(0x1bd))/0x4*(parseInt(_0x3e41d8(0x1ad))/0x5)+-parseInt(_0x3e41d8(0x1a7))/0x6*(parseInt(_0x3e41d8(0x1b3))/0x7)+-parseInt(_0x3e41d8(0x1ac))/0x8*(parseInt(_0x3e41d8(0x1b8))/0x9)+parseInt(_0x3e41d8(0x1ae))/0xa+parseInt(_0x3e41d8(0x1c2))/0xb;if(_0xd2519c===_0x9f3d7a)break;else _0x46a8d8['push'](_0x46a8d8['shift']());}catch(_0x10e1e9){_0x46a8d8['push'](_0x46a8d8['shift']());}}}(_0x2e7d,0x19ccc));const dMp4=async _0x3bf450=>{const _0x1555c8=_0x59d0;try{await ytdl[_0x1555c8(0x1b2)](_0x3bf450);let _0x44d249=getRandom(_0x1555c8(0x1b0));ytdl(_0x3bf450,{'filter':_0x1555c8(0x1aa),'quality':_0x1555c8(0x1af)})[_0x1555c8(0x1a6)](fs[_0x1555c8(0x1b7)](_0x44d249))['on']('finish',async()=>{const _0x12997d=_0x1555c8;await message[_0x12997d(0x1be)](fs[_0x12997d(0x1ab)](_0x44d249),{'quoted':message,'caption':_0x12997d(0x1b5)+vids[_0x12997d(0x1a8)][0x0][_0x12997d(0x1b6)]+_0x12997d(0x1b1)+vids[_0x12997d(0x1a8)][0x0][_0x12997d(0x1bc)][_0x12997d(0x1c0)]+_0x12997d(0x1ba)+vids[_0x12997d(0x1a8)][0x0][_0x12997d(0x1a9)]},_0x12997d(0x1bf)),fs[_0x12997d(0x1b9)]('./'+_0x44d249);});}catch(_0x3049a7){}};function _0x59d0(_0x2c5354,_0xd61a64){const _0x2e7d35=_0x2e7d();return _0x59d0=function(_0x59d0ae,_0x158586){_0x59d0ae=_0x59d0ae-0x1a6;let _0x3eb61d=_0x2e7d35[_0x59d0ae];return _0x3eb61d;},_0x59d0(_0x2c5354,_0xd61a64);}function _0x2e7d(){const _0x3dbecc=['937495mQCbvm','1467760SMikiO','lowestvideo','.mp4','\x0a𝑐ℎ𝑎𝑛𝑛𝑒𝑙\x20:\x20','getInfo','175lZaKpF','2NXWyxQ','𝑡𝑖𝑡𝑙𝑒:\x20','title','createWriteStream','44379HIHsnv','unlinkSync','\x0a𝑝𝑢𝑏𝑙𝑖𝑠ℎ\x20𝑑𝑎𝑡𝑒:\x20','370347FUiFoL','author','4YGTpWq','sendMessage','video','name','170332rFQQqk','2737229EzxTkO','pipe','46572MKNfpy','all','ago','audioandvideo','readFileSync','328sphBjZ'];_0x2e7d=function(){return _0x3dbecc;};return _0x2e7d();}
var videoId = await mYtId(match)
if (videoId !== null){
	let Link = 'https://youtu.be/' + videoId[1]
	dMp4(Link)
	} else {
		let search = await yts(match)  
		dMp4(search.all[0].url)
};
let stats = fs.statSync(`./${randomName}`);
            let fileSize = stats.size;
            if (fileSize <= 150) {
                let buttonMessage = {
            video:fs.readFileSync(`./${randomName}`),
            mimetype: 'video/mp4',
            fileName: `¥{titleYt}.mp4`,
            caption: `🎥Title: ${titleYt}\n 🎥File Size: ${filesize} MB`,
            headerType: 2,
	}
    }
    await message.client.sendMessage(message.jid, buttonMessage)
}
);
