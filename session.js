//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0I0eDRYUjNkdFFLQjlDa0lIZW1uNEY5VDNjOHhZYVA2YTRtcnljOUNXWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkNid0hiZHFLSnpONGN3MFF3dW5wZzRkN1JkaHFTMWlKRExCZWRRN0JYUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBSUx2VHkxdGdSR1NQYmZ3OEJLZU1WSEFSZHlGSlI3empJNm8xcVRhUDFZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTWE5KWHFMR0NhN2F5aHhEcnZ3S2ZNdFFyQk9NQ3JHY2prd1RvNmxoclIwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtCZ2RzODdROXpWdGJUeHV1MWJGQkh6S05GTTI5TkZHOWNlVFNNRysxblk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNBdnNYdG5DVWJQZktxZGxCRW5zYVBhMW9sazdMOHd4bVk2YkVLeXNVMnM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0J5UldMNkJLUFpGYlBCUm9RaU1kNElkeUpmS29pa3B6czhkR0pYdittdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0U3WXMvb3p0RlRybE1oZ1I0VHkrek05Q0dpeVdoSEZuNnJkTzhKbnhuTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFLRDVoT3YwVGd1TDlnLy9Qcm53SWFoSVIzRmJuMkkyVTc5bVdEQWg1R01wSVZwZmhTakkzVkFNcE9CZmZkUTVmUFhaMERXZElUVk4rSXNXVHlhemp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI1LCJhZHZTZWNyZXRLZXkiOiJSSGUzOGxPVEw1cXpqUWxsckY3SXNWUmFPZ2cxKzhDQlNubTQ5aXJpTVZzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJVdG13b1Z2T1NsSzNoUXhaU09OZnNBIiwicGhvbmVJZCI6IjFiODE4NjlmLTRhYzItNGEwNC1iNmMzLTlhMTMwNWM0ZmQzYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPL3ViazBzb0hKWTV4dUp3MUI2czZkNmxtdTA9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImYwblEvYWJVY1Z6d2QwK2NJNFVFYUlKRUZoZz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0luNDJad0VFSUNIaHNNR0dBVWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjVmYVJ6RGUxYUtXbWtjY1MxR2ZGS015VGF5SG55ZmFjaS9YeXlET2VzMFk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlplaDZnVzNZK1NYakFTU05uQ2lTWW1OYWdHZFB0SjdxNXZTUGE4aEpUMWpjNWIvWHpzbTRVcHdVWGhCb0V5S3hCVC9sUDRnaWsxV1BjdlhrM3c0R0FBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJONURCaSszNWFJbEZBL3FkYzk0NDR2cCtNbndUSFN5R0JRNVh2Q1VjL3Z6b2k0VjFIeHYxdUVrUWswMlFnM2ZLMzZNRGdsWFVvM3U2Vi9jc0oyaEtpZz09In0sIm1lIjp7ImlkIjoiOTQ3Njg1MTE2NTg6NzJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQmxhY2sgRGV2aWwiLCJsaWQiOiIyMDY2MDk2ODY5ODY3OTM6NzJAbGlkIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzY4NTExNjU4OjcyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVYMmtjdzN0V2lscHBISEV0Um54U2pNazJzaDU4bjJuSXYxOHNnem5yTkcifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MTIyMTEyNSwibGFzdFByb3BIYXNoIjoiUFdrNUIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFJQiJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94768511658",
  PASSWORD: 
    process.env.PASSWORD || "20060727July@",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
