const fs = require('fs');
const chalk = require('chalk');

//contact details
global.ownernumber = [ process.env.OWNER_NUMBER || "2250555236730"],
global.ownername = process.env.OWNER_NAME || "Zₑₜₛᵤ",
global.ytname = "YT: kenzo3146"
global.socialm = "GitHub: toge012345"
global.location = "Africa"

global.botname = process.env.BOTNAME || "𝐓𝐎𝐆𝐄-𝐌𝐃-𝐕𝟑",//name of the bot

//sticker details
global.stickername = process.env.STICKER || "Zₑₜₛᵤ",
global.packname = 'Sticker By'
global.author = process.env.AUTHOR || "𓆩𝐓𝐎𝐆𝐄𓆪 ✇ ◤✞𝐈𝐍𝐔𝐌𝐀𝐊𝐈",
//console view/theme
global.themeemoji = '𓅃'
global.wm = "𝐓𝐎𝐆𝐄_𝐁𝐎𝐓 𝐈𝐧𝐜 ✨"

//theme link
global.link = 'https://whatsapp.com/channel/0029VaiuD4s4IBhI0fzbv40Z'

//custom prefix
global.prefa = process.env.PREFIX || "@",

//false=disable and true=enable
global.welcome = process.env.WELCOME || "false", //auto welcome
global.autoRecording = true //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = true //auto view status/story



//reply messages
global.mess = {
    done: '💫 *voilà!* ',
    prem: '💫 *ce wé est pour les premiums *',
    admin: '💫 *ce wé est pour les admins*',
    botAdmin: '💫 *tu dois etre admin pour utiliser cette commande* ',
    owner: '💫 *ce wé est pour les proprios',
    group: '💫 *ce wé est pour les groupes*',
    private: '💫 *ce wé est pour les messages privés*',
    wait: '💫 *en cours...* ',    
    error: '💫 erreur!*',
}

global.thumb = fs.readFileSync('./lib/Assets/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
    
