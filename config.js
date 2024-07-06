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
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
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
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_55_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzksXG4gICAgICAgIDQ1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTgyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgNixcbiAgICAgICAgMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTMwLFxuICAgICAgICA3OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDc5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIsXG4gICAgICAgIDQ3LFxuICAgICAgICA0OSxcbiAgICAgICAgNixcbiAgICAgICAgMjYsXG4gICAgICAgIDM1LFxuICAgICAgICAyNixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDYwLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTUxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTA3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTMyLFxuICAgICAgICA2OCxcbiAgICAgICAgODksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTIyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5NixcbiAgICAgICAgODYsXG4gICAgICAgIDExMixcbiAgICAgICAgMjMsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMSxcbiAgICAgICAgMTg2LFxuICAgICAgICA3OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODcsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDczLFxuICAgICAgICAxODAsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2MSxcbiAgICAgICAgNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTE2LFxuICAgICAgICA5NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjUyLFxuICAgICAgICA4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzLFxuICAgICAgICAxODUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjM5LFxuICAgICAgICA0MixcbiAgICAgICAgMjEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjksXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDU3LFxuICAgICAgICA4OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDM4LFxuICAgICAgICA0MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDM0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwLFxuICAgICAgICAzMixcbiAgICAgICAgMjAsXG4gICAgICAgIDc1LFxuICAgICAgICA0LFxuICAgICAgICAxODgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTkyLFxuICAgICAgICA1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDQ4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxLFxuICAgICAgICAxMjksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjU1LFxuICAgICAgICA0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTEzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1LFxuICAgICAgICA5NixcbiAgICAgICAgMTM5LFxuICAgICAgICAxODUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTE1LFxuICAgICAgICA0NixcbiAgICAgICAgMjgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIyVGxGME9Wd25ld1A3Njl4RUV3SFdrdnpHZTMyMWtEdUJxenNDSmVUaXJJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJNVE5yd0JWb1RmbUtxazI5Qk9mQ1VBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjk2MzE0MjY5LWJmZjUtNGU2Yy1hMjk3LTllZTczYTIyMDRmN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTcsXG4gICAgICA0NyxcbiAgICAgIDEwMyxcbiAgICAgIDY2LFxuICAgICAgMTkzLFxuICAgICAgNjEsXG4gICAgICAyMTQsXG4gICAgICAxMDQsXG4gICAgICA3LFxuICAgICAgMjI2LFxuICAgICAgMjUxLFxuICAgICAgNDIsXG4gICAgICAyMTEsXG4gICAgICA3LFxuICAgICAgMTk5LFxuICAgICAgNTgsXG4gICAgICA1NSxcbiAgICAgIDIxOSxcbiAgICAgIDQxLFxuICAgICAgM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODUsXG4gICAgICAxMzcsXG4gICAgICAxOTYsXG4gICAgICAxODcsXG4gICAgICAyNTEsXG4gICAgICAyNTAsXG4gICAgICAyMDAsXG4gICAgICAyMDAsXG4gICAgICAxNDAsXG4gICAgICA3MyxcbiAgICAgIDE1NCxcbiAgICAgIDIzMyxcbiAgICAgIDEwOCxcbiAgICAgIDIxOCxcbiAgICAgIDIzMixcbiAgICAgIDEyMCxcbiAgICAgIDM2LFxuICAgICAgMTk2LFxuICAgICAgMTA1LFxuICAgICAgMTYzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIldTWjJGWEgzXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NTY4NDEzMDU6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTA2MTMxMzI2NzcxMjM6OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQNlRkQkNxdUtPMEJoZ0NJQUFvQUE9PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm9hcHpJYjFTT0FRZmQ2cE1vTVBkc3Jjb2FTbnMxR0tjUUd0NTdzRGg4eUU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSDMrZzNhTWZLSlg5Wk5kcWtpcktiTkNPZ0xqckl4Sm9iRzZlNmxMN04vRW1ESWZJdEI3Znd1Tmg0WUpJOUF3QUJkdVZnWktFeFBYQXNqZUJYQUFyQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiOGtTNWZyWmV3OGdkYXhhNXRmR1RzQzNTSUZ2bkZyVW1FaE9ENXNFZm5ibG44amNvY0xKbW0ySFRwQ085MDVhUTVzYzNtb3c4YXFVR0VURTBNZm5nanc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzU2ODQxMzA1OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDMzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAyNDUyOTQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCM3BcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUIzcC5qc29uIjogIntcImtleURhdGFcIjpcInNkeThPSVo2WWhGRC9JOVZkRmllZHBCdy9YUVFiYVBndGhLdi9oTnNzRzA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTkwMzEwMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwMjQ0NDIyNDU3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
