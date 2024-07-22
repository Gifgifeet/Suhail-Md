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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349030547659";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "true"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_53_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjA2LFxuICAgICAgICA0NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQyLFxuICAgICAgICAxMixcbiAgICAgICAgMTk1LFxuICAgICAgICA4OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTM2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDc0LFxuICAgICAgICA5MSxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxODcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTcyLFxuICAgICAgICA4OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0LFxuICAgICAgICA5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTMxLFxuICAgICAgICA5MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAzLFxuICAgICAgICAyMzksXG4gICAgICAgIDgzLFxuICAgICAgICA5MixcbiAgICAgICAgMjQ1LFxuICAgICAgICA4MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODQsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDYxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDksXG4gICAgICAgIDk1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDcwLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNSxcbiAgICAgICAgMTE1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzLFxuICAgICAgICAyMDksXG4gICAgICAgIDEwNixcbiAgICAgICAgMjIwLFxuICAgICAgICA1NyxcbiAgICAgICAgNDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTE2LFxuICAgICAgICA2OSxcbiAgICAgICAgMjI1LFxuICAgICAgICA1OCxcbiAgICAgICAgMjA3LFxuICAgICAgICA0MixcbiAgICAgICAgNjAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDgsXG4gICAgICAgIDY4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTYsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjUwLFxuICAgICAgICA1NSxcbiAgICAgICAgOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OSxcbiAgICAgICAgMjExLFxuICAgICAgICA5MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDkzLFxuICAgICAgICA5NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMixcbiAgICAgICAgMjUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDk4LFxuICAgICAgICA1MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDExN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDkyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjE4LFxuICAgICAgICA4MixcbiAgICAgICAgMjUyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTA4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTY4LFxuICAgICAgICA2NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1LFxuICAgICAgICA0MixcbiAgICAgICAgNzEsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjA1LFxuICAgICAgICA5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDg5LFxuICAgICAgICA4NyxcbiAgICAgICAgMjE1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTksXG4gICAgICAgIDYzLFxuICAgICAgICA0NixcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjM0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjRsaXY0MW1HSmNnK3JQL05ZR3BVY1NBcDFXcy9WaTdNTHFGdnEzZTRmeU09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkl0cUVIcGpiVGxDN3Eza3dkTWdiSmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjMwMGFiOTgtNmE5MC00MmJhLTk5ZDQtNWJiYzZhYzQ0YTkxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU4LFxuICAgICAgMTUyLFxuICAgICAgMTMwLFxuICAgICAgMzUsXG4gICAgICAxMzgsXG4gICAgICAyMzcsXG4gICAgICAxNDksXG4gICAgICAzLFxuICAgICAgMTQxLFxuICAgICAgNDgsXG4gICAgICA4MixcbiAgICAgIDQwLFxuICAgICAgMTM2LFxuICAgICAgMTc0LFxuICAgICAgOTYsXG4gICAgICAyMjAsXG4gICAgICAxMzcsXG4gICAgICAxODMsXG4gICAgICAxMjEsXG4gICAgICAyNDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI2LFxuICAgICAgMTg0LFxuICAgICAgMSxcbiAgICAgIDU1LFxuICAgICAgMjE5LFxuICAgICAgMTcyLFxuICAgICAgMTQ5LFxuICAgICAgMTAyLFxuICAgICAgMTk4LFxuICAgICAgMTAyLFxuICAgICAgMTAwLFxuICAgICAgMTYyLFxuICAgICAgMTUyLFxuICAgICAgMTE1LFxuICAgICAgNixcbiAgICAgIDI0MyxcbiAgICAgIDY0LFxuICAgICAgMjAyLFxuICAgICAgMTM5LFxuICAgICAgNTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWkZTRkxBSFJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMzA1NDc2NTk6MjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEzNDQ3OTYyMDc5MjY1OjI4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0x6SjdZa0JFTWZrK2JRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiR3orTGFFZVpjdTIrcnEva1BDT0MwK1dMaWxKUzFFZis0Qm41T1VNZ1lBZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJoODl6N0hWeGZIaE5UTFA0WWlJaFFONmtlMFJoMVVjR012ZzBrRlJYa0tkRWRFTkRHbkZtWUJJaW5UTGpXUnZIQUc4a0lGZmFGT3F5WCt2bUFrMXJEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJTQUpYbWwwdUY5QkkyRzYvcHU5V29UT1VoZjZwMzNBdVpuQ051bEF6bHFZbmNLSFZCUFp6Vnp4aGZSUDFHclY3bmRMVXFqdElBcDhYZFFXZzU5MEZDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDMwNTQ3NjU5OjI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNjU5OTc4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQllhXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCWWEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJsbmF3MTk3MEtaOWpUZ2NhT1NDYktlcE9raTgrSlYzdUswYkwzQTRiVjI0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI4OTEwNTA4MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "dutchdkimg-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "dutchdking",


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
