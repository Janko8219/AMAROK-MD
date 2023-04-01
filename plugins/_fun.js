const { dare, truth, random_question } = require("../lib/truth-dare.js")
const { BOT_NAME, OWNER_NAME } = require('../config.js')
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

function amarok_0xc280(){var _0xafbc0c=['\x0a╰────────────────◇\x20','407360AnYCoN','29914190uGzoVw','https://favqs.com/api/qotd','11DdFfmz','\x0a╭────────────◇\x0a│\x20▢\x20*🎖User:*\x20','34418aXPOdA','author','data','reply','8OLNEmn','2946876bZPfIu','3208239ADSGTa','pushName','35kVifoR','441972LrcNUZ','2819089SmndnF','4NlWiIV','quote','\x0a│\x20▢\x20\x0a│\x20▢\x20*👤Author:*\x20'];amarok_0xc280=function(){return _0xafbc0c;};return amarok_0xc280();}function amarok_0x47cd(_0x598d13,_0x25df71){var _0xc280d9=amarok_0xc280();return amarok_0x47cd=function(_0x47cd62,_0x4b6943){_0x47cd62=_0x47cd62-0x149;var _0x141466=_0xc280d9[_0x47cd62];return _0x141466;},amarok_0x47cd(_0x598d13,_0x25df71);}(function(_0x3ebf23,_0x3f9e7f){var _0x22c938=amarok_0x47cd,_0x28c850=_0x3ebf23();while(!![]){try{var _0x4f8092=parseInt(_0x22c938(0x14c))/0x1*(-parseInt(_0x22c938(0x158))/0x2)+-parseInt(_0x22c938(0x149))/0x3*(parseInt(_0x22c938(0x14f))/0x4)+-parseInt(_0x22c938(0x153))/0x5+-parseInt(_0x22c938(0x14d))/0x6+-parseInt(_0x22c938(0x14e))/0x7*(parseInt(_0x22c938(0x15c))/0x8)+-parseInt(_0x22c938(0x14a))/0x9+parseInt(_0x22c938(0x154))/0xa*(parseInt(_0x22c938(0x156))/0xb);if(_0x4f8092===_0x3f9e7f)break;else _0x28c850['push'](_0x28c850['shift']());}catch(_0x540d40){_0x28c850['push'](_0x28c850['shift']());}}}(amarok_0xc280,0x783c0),command({'pattern':'quote','fromMe':isPublic,'type':'mics'},async(_0x57fb39,_0x3501eb,_0xb1e78b)=>{var _0x1bddac=amarok_0x47cd,_0x44c32f=await axios['get'](_0x1bddac(0x155));const _0x250de7=_0x1bddac(0x157)+_0x57fb39[_0x1bddac(0x14b)]+'\x0a│\x20▢\x20*🎖Content:*\x20'+_0x44c32f['data']['quote']['body']+_0x1bddac(0x151)+_0x44c32f[_0x1bddac(0x15a)][_0x1bddac(0x150)][_0x1bddac(0x159)]+_0x1bddac(0x152);return _0x57fb39[_0x1bddac(0x15b)](_0x250de7);}));
