   const { command, amk1, isPublic, getBuffer, RandomXp, Config, tlang, botpic } = require("../lib")
   const Levels = require("discord-xp")
   const fs = require("fs")   

   command({
         pattern: "profile",
         fromMe: isPublic,
         type: "mics",
  },
  async(message, match, text) => {
            var bio = await message.fetchStatus(message.sender);
            var bioo = bio.status;
            let meh = message.sender;
            const userq = await Levels.fetch(message.sender, "RandomXP");
            const lvpoints = userq.level;
            var role = "GODâœ¨";
            if (lvpoints <= 2) {
                var role = "ðŸ³Citizen";
            } else if (lvpoints <= 4) {
                var role = "ðŸ‘¼Baby Wizard";
            } else if (lvpoints <= 6) {
                var role = "ðŸ§™â€â™€ï¸Wizard";
            } else if (lvpoints <= 8) {
                var role = "ðŸ§™â€â™‚ï¸Wizard Lord";
            } else if (lvpoints <= 10) {
                var role = "ðŸ§šðŸ»Baby Mage";
            } else if (lvpoints <= 12) {
                var role = "ðŸ§œMage";
            } else if (lvpoints <= 14) {
                var role = "ðŸ§œâ€â™‚ï¸Master of Mage";
            } else if (lvpoints <= 16) {
                var role = "ðŸŒ¬Child of Nobel";
            } else if (lvpoints <= 18) {
                var role = "â„Nobel";
            } else if (lvpoints <= 20) {
                var role = "âš¡Speed of Elite";
            } else if (lvpoints <= 22) {
                var role = "ðŸŽ­Elite";
            } else if (lvpoints <= 24) {
                var role = "ðŸ¥‡Ace I";
            } else if (lvpoints <= 26) {
                var role = "ðŸ¥ˆAce II";
            } else if (lvpoints <= 28) {
                var role = "ðŸ¥‰Ace Master";
            } else if (lvpoints <= 30) {
                var role = "ðŸŽ–Ace Dominator";
            } else if (lvpoints <= 32) {
                var role = "ðŸ…Ace Elite";
            } else if (lvpoints <= 34) {
                var role = "ðŸ†Ace Supreme";
            } else if (lvpoints <= 36) {
                var role = "ðŸ’Supreme I";
            } else if (lvpoints <= 38) {
                var role = "ðŸ’ŽSupreme Ii";
            } else if (lvpoints <= 40) {
                var role = "ðŸ”®Supreme Master";
            } else if (lvpoints <= 42) {
                var role = "ðŸ›¡Legend III";
            } else if (lvpoints <= 44) {
                var role = "ðŸ¹Legend II";
            } else if (lvpoints <= 46) {
                var role = "âš”Legend";
            } else if (lvpoints <= 55) {
                var role = "ðŸ‰Immortal";
            }
            let ttms = `${userq.xp}` / 8;
            const timenow = moment(moment())
                .format('HH:mm:ss')
            moment.tz.setDefault('Asia/Kolakata')
                .locale('id')
            try {
                pfp = await message.profilePictureUrl(message.sender, "image");
            } catch (e) {
                pfp = await botpic();
            }
            const profile = `
*Hii ${message.pushName},*
*Here is your profile information*
*ðŸ‘¤Username:* ${message.pushName}
*âš¡Bio:* ${bioo}
*ðŸ§©Role:* ${role}
*ðŸLevel:* ${userq.level}
*ðŸ“¥ Total Messages* ${ttms}
*Powered by ${tlang().title}*
`;
   let buttonMessage = {
                image: {
                    url: pfp,
                },
                caption: profile,
                footer: tlang().footer,
                buttons: buttons,
                headerType: 4,
            };
            message.sendMessage(message.jid, buttonMessage, {
                quoted: message,
            });

        }
    )
    

//----------------
//     AUTO REACT
//----------------
 cmd({ on: "body" }, async(message, match) => {
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


    
  
