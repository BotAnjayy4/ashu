const fs = require('fs')
const chalk = require('chalk')

// self or public
global.self = false //jadiin true klo gk mau fitur bot lu di pke sama org lain

// setting
global.ownername ="Indra Ganteng"
global.ownernumber = "6289667644225"
global.botname = "X1Botz"
global.thumbnail = fs.readFileSync("./image/Riych.jpg") //sesuaikan dengan nama foto
global.background = "https://telegra.ph/file/6fc08035abf46b1e137c0.jpg"
global.lolkey = 'RIFQIBOTZ' //apikey
global.zenzkey = '8423e19c13' // Apikey
global.limit = {
		useri:150,
		premi:1000
	}
global.session_name = "session.json"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
