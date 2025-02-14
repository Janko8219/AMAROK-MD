//-------------------------------------------------------------------------
//      WELCOME TO AMAROK NEW UPDATE 
//      POWERD BY DIEGOSON DEMANDED
//-------------------------------------------------------------------------
//                     |
//                     |
//                     |
//                     |
//                     |
//                     |
//                     |
//                     ------------------------------------------------------
const { Sequelize } = require("sequelize");
const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

const toBool = (x) => x == "true";

DATABASE_URL = process.env.DATABASE_URL || "./lib/database.db";
let HANDLER = "false";



module.exports = {

//----------------------------------------------------------------------------------------
//               AMAROK  CONFIG VARS
//----------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------
   ANTILINK: toBool(process.env.ANTI_LINK)        ||                     false,
//----------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------
//             VAR LOGS TRUE OR FALSE
//----------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------
   LOGS: toBool(process.env.LOGS)                ||                      true,
//----------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------
//            ANTILINK ACTION 

//----------------------------------------------------------------------------------------
  
//----------------------------------------------------------------------------------------
   ANTILINK_ACTION: process.env.ANTI_LINK         ||                      "kick",
//----------------------------------------------------------------------------------------
  
//----------------------------------------------------------------------------------------
//                 SESSION  REQUIRENATION
//----------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------
   SESSION_ID:process.env.SESSION_ID              ||      "Q3JiREU_AMAROK_xMmg=",
//----------------------------------------------------------------------------------------
 
//-----------------------------------------------------------------------------------------
//               ENGLISH LANGUAGE 
//-----------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------
   LANG: process.env.LANG                         ||                       "EN",
//-----------------------------------------------------------------------------------------
  

//-----------------------------------------------------------------------------------------
//                PREFIX  HANDLERS 

//-----------------------------------------------------------------------------------------


//---------------------------------------------------------------------------------------------------

   HANDLERS: process.env.HANDLER === "false" || process.env.PREFIX === " null" ? "^" : "^",
//---------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------
//                 RBGM KEY CAR
//---------------------------------------------------------------------------------------------------


//---------------------------------------------------------------------------------------------------
   RMBG_KEY: process.env.RMBG_KEY               ||                     false,
//---------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------
//               BRANCH CAR
//---------------------------------------------------------------------------------------------------


//---------------------------------------------------------------------------------------------------
    BRANCH:                  "master",
//---------------------------------------------------------------------------------------------------


//---------------------------------------------------------------------------------------------------
//             STICKER PACKNANE 
//---------------------------------------------------------------------------------------------------


//---------------------------------------------------------------------------------------------------
    PACKNAME: process.env.PACKNAME              ||           "ᴛᴏxɪᴄツ",
//---------------------------------------------------------------------------------------------------


//---------------------------------------------------------------------------------------------------
//            WELCOME MESG
//---------------------------------------------------------------------------------------------------


//-------------------------------------------------------------------------------------------------------
    WELCOME_MSG: process.env.WELCOME_MSG                  ||           "Hi @user Welcome to @gname",
//------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------
    GOODBYE_MSG: process.env.GOODBYE_MSG                    ||          "Hi @user It was Nice Seeing you",
//----------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------
//              DATABASE URL
//---------------------------------------------------------------------------------------------------


//-------------------------------------------------------------
   DATABASE_URL: DATABASE_URL,
//-------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     DATABASE:DATABASE_URL === "./lib/database.db"? new Sequelize({dialect: "sqlite",storage: DATABASE_URL,logging: false,}): new Sequelize(DATABASE_URL, {dialect: "postgres",ssl: true,protocol: "postgres",dialectOptions: {native: true,ssl: { require: true, rejectUnauthorized: false },},logging: false,}), //------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//            SETSUDO VAR
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

   SUDO: process.env.SUDO                 ||                    "27686881509,27630425578",
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//             HEROKU VAR 
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



//---------------------------------------
//      MODE TYPE VAR 
//---------------------------------------

//---------------------------------------
  MODE:  process.env.MODE || "private",
//---------------------------------------


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
   HEROKU_APP_NAME: process.env.HEROKU_APP_NAME                             ||                          " ",
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
   HEROKU_API_KEY: process.env.HEROKU_API_KEY                           ||                     " ",
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//         OWNER TOXIC CYBER 
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
   OWNER_NAME: process.env.OWNER_NAME                             ||                           "ᴛᴏxɪᴄツ ᴄʏʙᴇʀ",
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//           BOTNANE. AMAROK M.D.BOT
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
   BOT_NAME: process.env.BOT_NAME                                       ||                                   "ᴀᴍαr๏k ᴍᴅ",
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

GPTAPIKEY: process.env.GPTAPIKEY||" ",

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//     VAR WORKTYPE BOT MODE
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

LANG: process.env.THEME|| "AMAROK",

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//-------------------------------------------
//--------------------LEVEL MESSAGE-------
//------------------------------------------

LEVELUPMESSAGE: process.env.LEVEL_UP_MESSAGE || "false",

//---------------------------------------------------------

   WORK_TYPE: process.env.WORK_TYPE                                         ||                                    "private",

};
