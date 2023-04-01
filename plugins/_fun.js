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

function amarok_0x313f(_0x5ddbb4,_0x5bcecf){const _0x5b2cb3=amarok_0x5b2c();return amarok_0x313f=function(_0x313f2e,_0x5d2517){_0x313f2e=_0x313f2e-0x14f;let _0x368f11=_0x5b2cb3[_0x313f2e];return _0x368f11;},amarok_0x313f(_0x5ddbb4,_0x5bcecf);}function amarok_0x5b2c(){const _0x3b7062=['1wfTCZj','fact','reply','9iqVgYU','mics','9650568ipIHRO','1891314GLPGuv','get','1691085lbPqUr','1315968YQRVii','296816FCIPtS','https://nekos.life/api/v2/fact','83286QemIzn','1194718UuYQfy'];amarok_0x5b2c=function(){return _0x3b7062;};return amarok_0x5b2c();}const amarok_0x2cfec6=amarok_0x313f;(function(_0x225ad3,_0x43c282){const _0x20de8b=amarok_0x313f,_0x150100=_0x225ad3();while(!![]){try{const _0x234931=parseInt(_0x20de8b(0x14f))/0x1*(parseInt(_0x20de8b(0x15b))/0x2)+-parseInt(_0x20de8b(0x158))/0x3+-parseInt(_0x20de8b(0x159))/0x4+-parseInt(_0x20de8b(0x157))/0x5+-parseInt(_0x20de8b(0x155))/0x6+parseInt(_0x20de8b(0x15c))/0x7+-parseInt(_0x20de8b(0x154))/0x8*(-parseInt(_0x20de8b(0x152))/0x9);if(_0x234931===_0x43c282)break;else _0x150100['push'](_0x150100['shift']());}catch(_0x2a52af){_0x150100['push'](_0x150100['shift']());}}}(amarok_0x5b2c,0x3d9b6),command({'pattern':'fact','fromMe':isPublic,'type':amarok_0x2cfec6(0x153)},async(_0x5e241e,_0x50697d,_0x21b054)=>{const _0x254f8e=amarok_0x2cfec6,{data:_0x345c5f}=await axios[_0x254f8e(0x156)](_0x254f8e(0x15a));return _0x5e241e[_0x254f8e(0x151)]('*Fact:*\x20'+_0x345c5f[_0x254f8e(0x150)]+'\x0a\x0a*Powered\x20by\x20Amarok*');}));
//------------------
//    IM BORED 
//-----------------

function amarok_0xc280(){var _0xafbc0c=['\x0a╰────────────────◇\x20','407360AnYCoN','29914190uGzoVw','https://favqs.com/api/qotd','11DdFfmz','\x0a╭────────────◇\x0a│\x20▢\x20*🎖User:*\x20','34418aXPOdA','author','data','reply','8OLNEmn','2946876bZPfIu','3208239ADSGTa','pushName','35kVifoR','441972LrcNUZ','2819089SmndnF','4NlWiIV','quote','\x0a│\x20▢\x20\x0a│\x20▢\x20*👤Author:*\x20'];amarok_0xc280=function(){return _0xafbc0c;};return amarok_0xc280();}function amarok_0x47cd(_0x598d13,_0x25df71){var _0xc280d9=amarok_0xc280();return amarok_0x47cd=function(_0x47cd62,_0x4b6943){_0x47cd62=_0x47cd62-0x149;var _0x141466=_0xc280d9[_0x47cd62];return _0x141466;},amarok_0x47cd(_0x598d13,_0x25df71);}(function(_0x3ebf23,_0x3f9e7f){var _0x22c938=amarok_0x47cd,_0x28c850=_0x3ebf23();while(!![]){try{var _0x4f8092=parseInt(_0x22c938(0x14c))/0x1*(-parseInt(_0x22c938(0x158))/0x2)+-parseInt(_0x22c938(0x149))/0x3*(parseInt(_0x22c938(0x14f))/0x4)+-parseInt(_0x22c938(0x153))/0x5+-parseInt(_0x22c938(0x14d))/0x6+-parseInt(_0x22c938(0x14e))/0x7*(parseInt(_0x22c938(0x15c))/0x8)+-parseInt(_0x22c938(0x14a))/0x9+parseInt(_0x22c938(0x154))/0xa*(parseInt(_0x22c938(0x156))/0xb);if(_0x4f8092===_0x3f9e7f)break;else _0x28c850['push'](_0x28c850['shift']());}catch(_0x540d40){_0x28c850['push'](_0x28c850['shift']());}}}(amarok_0xc280,0x783c0),command({'pattern':'quote','fromMe':isPublic,'type':'mics'},async(_0x57fb39,_0x3501eb,_0xb1e78b)=>{var _0x1bddac=amarok_0x47cd,_0x44c32f=await axios['get'](_0x1bddac(0x155));const _0x250de7=_0x1bddac(0x157)+_0x57fb39[_0x1bddac(0x14b)]+'\x0a│\x20▢\x20*🎖Content:*\x20'+_0x44c32f['data']['quote']['body']+_0x1bddac(0x151)+_0x44c32f[_0x1bddac(0x15a)][_0x1bddac(0x150)][_0x1bddac(0x159)]+_0x1bddac(0x152);return _0x57fb39[_0x1bddac(0x15b)](_0x250de7);}));
