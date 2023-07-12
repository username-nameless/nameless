import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['905255825662', '905355825662', true],
  ['905355825662'], 
  ['905355825662'],
  ['905355825662']
] //Numeros de owner 

global.mods = ['905355825662'] 
global.prems = ['905355825662', '905355825662', '905355825662']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.packname = 'testo bot' 
global.author = '𝚉𝙴𝙿𝙷𝚈𝚁 𝙱𝙾𝚃' 
global.fgig = 'test2 \ntest\n' 
global.dygp = 'https://chat.whatsapp.com/FAnaNactiJ5GQ0xC2G4QUc'
global.fgsc = 'https://github.com/nanzone' 
global.fgyt = 'http://TESTTT/'
global.fgpyp = 'TEST5'
global.fglog = 'https://i.ibb.co/Csp01NQ/nero-thumbnail.jpg' 

global.wait = '*⌛ _Loading..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})