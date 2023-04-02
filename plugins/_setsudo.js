//------------------------------------------------------------------------------------
//              AMAROK SETSUDO
//              SOORY GUYZ BUT YOU CAN'T EDIT THIS ONE
//------------------------------------------------------------------------------------
const { command, isPrivate } = require("../lib")
const { SUDO } = require("../config")
command{ pattern: "setsudo ?(.*)", fromMe: true, desc: "set sudo", type: "user" },
  async (m, mm) => {
    var newSudo = (m.reply_message ? m.reply_message.jid : "" || mm).split(
      "@"
    )[0];
    if (!newSudo)
      return await m.sendMessage("*reply to a number*", { quoted: m });
    var setSudo = (SUDO + "," + newSudo).replace(/,,/g, ",");
    setSudo = setSudo.startsWith(",") ? setSudo.replace(",", "") : setSudo;
    await m.sendMessage("```new sudo numbers are: ```" + setSudo, {
      quoted: m,
    });
    await m.sendMessage("_It takes 30 seconds to make effect_", { quoted: m });
    await heroku
      .patch(baseURI + "/config-vars", { body: { SUDO: setSudo } })
      .then(async (app) => {});
  }
);



//-------------------------
//function _0x2693(){const _0x4c38bc=['../config','then','Human\x20tool','703768aRgBOi','HEROKU\x20:\x20','body','../lib','reply_message','shows\x20sudo','7pqjZAX','2237185wlxxjB','130420MCGvBR','sendMessage','_It\x20takes\x2030\x20seconds\x20to\x20make\x20effect_','/config-vars','10615bSXtFD','send','SUDO','_new\x20sudo\x20numbers\x20are:_','mention','```','HEROKU_API_KEY','*reply\x20to\x20a\x20number🐤*','catch','/apps/','set\x20sudo','114YyNJLa','setsudo\x20?(.*)','get','patch','8710BePbXT','882717WSeCsb','163079GPDOiX','replace','18GaHWtg','1149704rVyJYK','message','startsWith'];_0x2693=function(){return _0x4c38bc;};return _0x2693();}const _0x574888=_0x54ca;(function(_0x28efd6,_0x34dce2){const _0x1b97cd=_0x54ca,_0x6aa0d5=_0x28efd6();while(!![]){try{const _0x29c9a7=parseInt(_0x1b97cd(0x1dc))/0x1*(-parseInt(_0x1b97cd(0x1de))/0x2)+parseInt(_0x1b97cd(0x1cc))/0x3+parseInt(_0x1b97cd(0x1d6))/0x4+-parseInt(_0x1b97cd(0x1dd))/0x5+parseInt(_0x1b97cd(0x1c7))/0x6*(-parseInt(_0x1b97cd(0x1cd))/0x7)+-parseInt(_0x1b97cd(0x1d0))/0x8*(-parseInt(_0x1b97cd(0x1cf))/0x9)+-parseInt(_0x1b97cd(0x1cb))/0xa*(-parseInt(_0x1b97cd(0x1e2))/0xb);if(_0x29c9a7===_0x34dce2)break;else _0x6aa0d5['push'](_0x6aa0d5['shift']());}catch(_0x17e992){_0x6aa0d5['push'](_0x6aa0d5['shift']());}}}(_0x2693,0x3d6b4));const {command}=require(_0x574888(0x1d9)),Config=require(_0x574888(0x1d3)),{SUDO}=require(_0x574888(0x1d3)),Heroku=require('heroku-client'),heroku=new Heroku({'token':Config[_0x574888(0x1e8)]}),baseURI=_0x574888(0x1c5)+Config['HEROKU_APP_NAME'];function _0x54ca(_0x37cac5,_0x5a4e59){const _0x269307=_0x2693();return _0x54ca=function(_0x54ca19,_0x4750e4){_0x54ca19=_0x54ca19-0x1c3;let _0x18216c=_0x269307[_0x54ca19];return _0x18216c;},_0x54ca(_0x37cac5,_0x5a4e59);}command({'pattern':_0x574888(0x1c8),'fromMe':!![],'desc':_0x574888(0x1c6),'type':'user'},async(_0xd52a91,_0xe92bbd,_0x4212c3)=>{const _0x27b4bb=_0x574888;var _0x32ebf9=(_0xd52a91[_0x27b4bb(0x1e6)][0x0]||_0xd52a91[_0x27b4bb(0x1da)]['jid'])['split']('@')[0x0];if(!_0x32ebf9)return await _0x4212c3[_0x27b4bb(0x1df)](_0x27b4bb(0x1c3),{'quoted':_0x4212c3});var _0x3fa341=(SUDO+','+_0x32ebf9)[_0x27b4bb(0x1ce)](/,,/g,',');_0x3fa341=_0x3fa341[_0x27b4bb(0x1d2)](',')?_0x3fa341[_0x27b4bb(0x1ce)](',',''):_0x3fa341,await _0xd52a91['sendMessage'](_0x27b4bb(0x1e5)+_0x3fa341,{'quoted':_0x4212c3}),await _0xd52a91['sendMessage'](_0x27b4bb(0x1e0),{'quoted':_0x4212c3}),await heroku[_0x27b4bb(0x1ca)](baseURI+_0x27b4bb(0x1e1),{'body':{'SUDO':_0x3fa341}})[_0x27b4bb(0x1d4)](async _0x11245e=>{});}),command({'pattern':'getsudo\x20?(.*)','fromMe':!![],'desc':_0x574888(0x1db),'type':_0x574888(0x1d5)},async(_0x4d88e1,_0x44c415)=>{const _0x48730f=_0x574888,_0x18463e=await heroku[_0x48730f(0x1c9)](baseURI+'/config-vars')[_0x48730f(0x1c4)](async _0x9efcc6=>{const _0x4615cd=_0x48730f;return await _0x4d88e1[_0x4615cd(0x1e3)](_0x4615cd(0x1d7)+_0x9efcc6[_0x4615cd(0x1d8)][_0x4615cd(0x1d1)]);});await _0x4d88e1[_0x48730f(0x1df)](_0x48730f(0x1e7)+('SUDO\x20Numbers\x20are\x20:\x20'+_0x18463e[_0x48730f(0x1e4)])+_0x48730f(0x1e7));});
//-------------------------

//--------SUDO SET
//---------------------
