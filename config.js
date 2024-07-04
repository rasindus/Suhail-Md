const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "postgres://koyeb-adm:ZR7AYqIc3ThX@ep-little-scene-a2fc3pop.eu-central-1.pg.koyeb.app/koyebdb"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Colombo";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWN643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ rasindu ²²¹-ᴍᴅ" 


global.devs = "94726785433" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_19_07_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODYsXG4gICAgICAgIDAsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMixcbiAgICAgICAgMzUsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjExLFxuICAgICAgICA5MCxcbiAgICAgICAgMTgzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTczLFxuICAgICAgICA0MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDgzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMixcbiAgICAgICAgOTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTU2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDY0LFxuICAgICAgICAzNyxcbiAgICAgICAgODEsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDc2LFxuICAgICAgICAzNixcbiAgICAgICAgNDIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDM4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODIsXG4gICAgICAgIDcyLFxuICAgICAgICA0MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjAsXG4gICAgICAgIDMsXG4gICAgICAgIDE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzLFxuICAgICAgICAwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTg5LFxuICAgICAgICA3NixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjIxLFxuICAgICAgICA5NSxcbiAgICAgICAgODgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDg0LFxuICAgICAgICA2NixcbiAgICAgICAgMjEyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTM4LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDk0LFxuICAgICAgICA4MixcbiAgICAgICAgNDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDg2LFxuICAgICAgICAzOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDY1LFxuICAgICAgICA0MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDc4LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDU0LFxuICAgICAgICAxNzksXG4gICAgICAgIDgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDU1LFxuICAgICAgICA1NixcbiAgICAgICAgMjgsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTIyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTA0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzksXG4gICAgICAgIDEyNixcbiAgICAgICAgOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDU5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDM2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMixcbiAgICAgICAgMTUzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxODksXG4gICAgICAgIDU5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDcyLFxuICAgICAgICAxODMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDg2LFxuICAgICAgICA3MixcbiAgICAgICAgNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDM5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDQsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDkzLFxuICAgICAgICA5NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTg1LFxuICAgICAgICA2MixcbiAgICAgICAgMTM4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDczLFxuICAgICAgICAyMTQsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDksXG4gICAgICAgIDc1LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJkNzBDNzZFSzZ4cjJxbUpOUVdTVUQvYzRMa09Jdnc3VzVOcm1QT1lBYkhjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJmeTR2ZnlFOFJDTzV5Sms0ZzhIVDhnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjE3MWMwODFjLWEzZTUtNDE0MC04MGE3LTVjOTFmOWY1NzRjY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MyxcbiAgICAgIDIyLFxuICAgICAgMzYsXG4gICAgICAyNTUsXG4gICAgICAxODIsXG4gICAgICA5NSxcbiAgICAgIDE5NyxcbiAgICAgIDE2NixcbiAgICAgIDEzNixcbiAgICAgIDQzLFxuICAgICAgMjEyLFxuICAgICAgMjI1LFxuICAgICAgMTk4LFxuICAgICAgMjI5LFxuICAgICAgMTgxLFxuICAgICAgMjQ0LFxuICAgICAgMTUwLFxuICAgICAgMTMsXG4gICAgICAyMTMsXG4gICAgICA1MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDcsXG4gICAgICAyMDEsXG4gICAgICA1NyxcbiAgICAgIDIwOCxcbiAgICAgIDExMyxcbiAgICAgIDk4LFxuICAgICAgMjQwLFxuICAgICAgOCxcbiAgICAgIDEyLFxuICAgICAgODQsXG4gICAgICA3MSxcbiAgICAgIDEyOSxcbiAgICAgIDE0NCxcbiAgICAgIDE5NyxcbiAgICAgIDE3NyxcbiAgICAgIDI2LFxuICAgICAgMTg2LFxuICAgICAgMTgxLFxuICAgICAgMTE3LFxuICAgICAgMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSFNTWk00TFFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzI2Nzg1NDMzOjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiUmFzaXlhX19AXCIsXG4gICAgXCJsaWRcIjogXCIxMjkxMDY4ODUwMTgwNjoxN0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKaWR2dlFCRU0vWmlyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkVpeXFMWmFiWHpURkZIbjYzOXpmVHV0cVhWZmlrcGdHUTRJOC9uMTV6eTA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNGY5NzJrTXlmMGcyc25CNVR3MWlpOUdoa1pFZzZlaDN5Y2JaRjl0czg4dkFsemcvY0kzQ0RRSkl6QW9KK0Naa1lyTEF2MkxabEJRQnEranU4SHlQQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZm5DTzIvMGxqSTBsQ2ZqbFhNaGUxU2xxR3ZoZXBLVkppN1JCK05nZFlJUTNhaGxUY2NxSnRrZ0c2a1BvNzZ3ako0Q3N5b0R4czNFMUs0US9UTm9CQ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3MjY3ODU0MzM6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA0NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5ODM5OTU1XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ rasindu ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Rasindu md",
  packname: process.env.PACK_NAME || "rasiya",
  botname : process.env.BOT_NAME  || "rasindu-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "RASINDU",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
