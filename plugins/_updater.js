
const DB = require('../lib/scrapers')
const { execSync } = require('child_process')
const { tlang, Config, prefix,command } = require('../lib')
    //---------------------------------------------------------------------------
command({
            pattern: "update",
            desc: "Shows repo\'s refreshed commits.",
            type: "misc",
        },
        async(message, match, text,{ isCreator }) => {
            if (!isCreator) return message.reply('This command is only for my owner')
            let commits = await DB.syncgit()
            if (commits.total === 0) {
                message.reply(`Hey ${message.pushName}. You have latest version installed.`)
            } else {
                let update = await DB.sync()
                  let button = [{
                    buttonId: `${prefix}updatenow`,
                    buttonText: {
                        displayText: 'UPDATE'
                    },
                    type: 1
                }]
                  let buttonMessaged = {
                    text: update,
                    footer: 'UPDATER',
                    headerType: 1,
                    buttons: button
                };
                return await message.sendMessage(message.jid, buttonMessaged);
            }

        }
    
