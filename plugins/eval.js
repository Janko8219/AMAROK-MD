/* Copyright (C) 2022 AMAROK-MD.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
AMAROK-MD - Diegoson 
*/

const {
  Function,
  isPrivate,
  getUrl,
  fromBuffer,
  Imgur,
  getBuffer,
  getJson,
  Fancy,
  AddMp3Meta,
  createMap,
  formatBytes,
  parseJid,
  isUrl,
  parsedJid,
  pinterest,
  wallpaper,
  wikimedia,
  quotesAnime,
  aiovideodl,
  umma,
  ringtone,
  styletext,
  FileSize,
  h2k,
  textpro,
  yt,
  ytIdRegex,
  yta,
  ytv,
  runtime,
  clockString,
  sleep,
  jsonformat,
  Serialize,
  processTime,
  command,
} = require("../lib/");
const util = require("util");
const config = require("../config");

/* Copyright (C) 2022 AMAROK MD.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
AMAROK MD - Diegoson 
*/

command({pattern:'eval', on: 'text', fromMe: true,desc :'Runs a server code'}, async (message, match, m, client) => {
  if (match.startsWith(">")) {
  if(!match) return await message.sendMessage("𝐔𝚴𝐅𝚯𝚪𝚻𝐔𝚴𝚫𝚻𝚵𝐋𝐘 𝚻𝚮𝚰𝐒 𝐂𝐃𝚳 𝚰𝐒 𝐅𝚯𝚪 𝚯𝐖𝚴𝚵𝚪");
    //const m = message;
    try {
      let evaled = await eval(`${match.replace(">", "")}`);
      if (typeof evaled !== "string") evaled = require("util").inspect(evaled);
      await message.reply(evaled);
    } catch (err) {
      await message.reply(util.format(err));
    }
  }
});
