   const { command, amk1, isPublic, isPrivate, getBuffer, RandomXp, Config, tlang, botpic } = require("../lib")
   const Levels = require("discord-xp")
   const fs = require("fs")   

  
//----------------
//     AUTO REACT
//----------------
 command({ on: "text", fromMe: isPrivate,  }, async(message, match) => {
     if (Config.autoreaction === 'true' && message.text.startsWith(prefix)) {
         const emojis = ['❤', '💕', '😻', '🧡', '💛', '💚', '💙', '💜', '🖤', '❣', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '♥', '💌', '🙂', '🤗', '😌', '😉', '🤗', '😊', '🎊', '🎉', '🎁', '🎈', '👋']
         const emokis = emojis[Math.floor(Math.random() * (emojis.length))]
         message.sendMessage(message.jid, {
             react: {
                 text: emokis,
                 key: message.key
             }
         })
     }
 })


    
  
