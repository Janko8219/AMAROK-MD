/* Copyright (C) 2022 Amarok-MD.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Diegoson - Amarok-MD
*/



const {
  default: makeWASocket,
  useMultiFileAuthState,
  Browsers,
  makeInMemoryStore,
} = require("@adiwajshing/baileys");
const fs = require("fs");
const { serialize } = require("./lib/serialize");
const { Message, Image, Sticker } = require("./lib/Base");
const pino = require("pino");
const path = require("path");
const events = require("./lib/event");
const got = require("got");
const config = require("./config");
const { PluginDB } = require("./lib/database/plugins");
const Greetings = require("./lib/Greetings");
const { MakeSession } = require("./lib/session");
const {multiauthState} = require("./lib/multiauth");
const store = makeInMemoryStore({
  logger: pino().child({ level: "silent", stream: "store" }),
});

require("events").EventEmitter.defaultMaxListeners = 500;

let str = `\`\`\`AMAROK-MD STARTED \nversion : ${
        require("./package.json").version
      }\nTOTAL PLUGINS : ${events.commands.length}\nWORKTYPE: ${
        config.WORK_TYPE
      }\`\`\``;
async function Singmulti() {
  await MakeSession(config.SESSION_ID,__dirname+'/session.json')
  const { state } = await useMultiFileAuthState(__dirname + "/session");
  await multiauthState("session.json", __dirname + "/session", state);
}
Singmulti()
require("events").EventEmitter.defaultMaxListeners = 0;


fs.readdirSync(__dirname + "/lib/database/").forEach((plugin) => {
  if (path.extname(plugin).toLowerCase() == ".js") {
    require(__dirname + "/lib/database/" + plugin);
  }
});
async function Amarok() {
  const { state ,saveCreds} = await useMultiFileAuthState(__dirname + "/session");
  console.log("Syncing Database");
  await config.DATABASE.sync();
  let conn = makeWASocket({
    logger: pino({ level: "silent" }),
    auth: state,
    printQRInTerminal: true,
    generateHighQualityLinkPreview: true,
    browser: Browsers.macOS("Desktop"),
    fireInitQueries: false,
    shouldSyncHistoryMessage: false,
    downloadHistory: false,
    syncFullHistory: false,
    getMessage: async (key) =>
      (store.loadMessage(key.id) || {}).message || {
        conversation: null,
      },
  });
  store.bind(conn.ev);
  setInterval(() => {
    store.writeToFile("./database/store.json");
  }, 30 * 60 * 1000);

  conn.ev.on("creds.update", saveCreds);

  conn.ev.on("connection.update", async (s) => {
    const { connection, lastDisconnect } = s;
    if (connection === "connecting") {
      console.log("Amarok");
      console.log("ℹ️ Began to WhatsApp... Please Wait.");
    }
    if (connection === "open") {
      console.log("✅ Login Successful!");
      console.log("🎈 Processing External Plugins...");

      let plugins = await PluginDB.findAll();
      plugins.map(async (plugin) => {
        if (!fs.existsSync("./plugins/" + plugin.dataValues.name + ".js")) {
          console.log(plugin.dataValues.name);
          var response = await got(plugin.dataValues.url);
          if (response.statusCode == 200) {
            fs.writeFileSync(
              "./plugins/" + plugin.dataValues.name + ".js",
              response.body
            );
            require(__dirname + "/plugins/" + plugin.dataValues.name + ".js");
          }
        }
      });

      console.log("🎈  Loading Plugins...");

      fs.readdirSync(__dirname + "/plugins").forEach((plugin) => {
        if (path.extname(plugin).toLowerCase() == ".js") {
          require(__dirname + "/plugins/" + plugin);
        }
      });
      console.log("✅ Plugins Installed!");
      let str = `\`\`\`Amarok connected \nversion : ${
        require(__dirname + "/package.json").version
      }\nTotal Plugins : ${events.commands.length}\nWorktype: ${
        config.WORK_TYPE
      }\`\`\``;
      conn.sendMessage(conn.user.id, { text: str });

      try {
        conn.ev.on("group-participants.update", async (data) => {
          Greetings(data, conn);
        });
        conn.ev.on("messages.upsert", async (m) => {
          if (m.type !== "notify") return;
          const ms = m.messages[0];
          let msg = await serialize(JSON.parse(JSON.stringify(ms)), conn);
          if (!msg.message) return;
          if (msg.body[1] && msg.body[1] == " ")
            msg.body = msg.body[0] + msg.body.slice(2);
          let text_msg = msg.body;
          if (text_msg && config.LOGS)
            console.log(
              `At : ${
                msg.from.endsWith("@g.us")
                  ? (await conn.groupMetadata(msg.from)).subject
                  : msg.from
              }\nFrom : ${msg.sender}\nMessage:${text_msg}`
            );

          events.commands.map(async (command) => {
            if (
              command.fromMe &&
              !config.SUDO.split(",").includes(
                msg.sender.split("@")[0] || !msg.isSelf
              )
            )
              return;
            let comman;
            if (text_msg) {
              comman = text_msg
                ? text_msg[0] +
                  text_msg.slice(1).trim().split(" ")[0].toLowerCase()
                : "";
              msg.prefix = new RegExp(config.HANDLERS).test(text_msg)
                ? text_msg.split("").shift()
                : ".";
            }
            if (command.pattern && command.pattern.test(comman)) {
              var match;
              try {
                match = text_msg.replace(new RegExp(comman, "i"), "").trim();
              } catch {
                match = false;
              }
              whats = new Message(conn, msg, ms);
              command.function(whats, match, msg, conn);
            } else if (text_msg && command.on === "text") {
              whats = new Message(conn, msg, ms);
              command.function(whats, text_msg, msg, conn, m);
            } else if (
              (command.on === "image" || command.on === "photo") &&
              msg.type === "imageMessage"
            ) {
              whats = new Image(conn, msg, ms);
              command.function(whats, text_msg, msg, conn, m, ms);
            } else if (
              command.on === "sticker" &&
              msg.type === "stickerMessage"
            ) {
              whats = new Sticker(conn, msg, ms);
              command.function(whats, msg, conn, m, ms);
            }
          });
        });
      } catch (e) {
        console.log(e + "\n\n\n\n\n" + JSON.stringify(msg));
      }
    }
    if (connection === "close") {
      console.log(s)
      console.log(
        "Connection closed with bot. Please put New Session ID again."
      );
      Amarok().catch((err) => console.log(err));
    } else {
      /*
       */
    }
  });
  process.on("uncaughtException", (err) => {
    let error = err.message;
    // conn.sendMessage(conn.user.id, { text: error });
    console.log(err);
  });
}
setTimeout(() => {
  Amarok().catch((err) => console.log(err));
}, 3000);
