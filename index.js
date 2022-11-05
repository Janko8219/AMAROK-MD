const { Client } = require('../lib/client.js');
const { DATABASE, VERSION } = require('../config.js');
const start = async () => {
	try {
		const bot = new Client()
		console.log(`levanter ${VERSION}`)
		await DATABASE.sync()
		console.log('Database syncing...')
		await bot.connect()
	} catch (error) {
		console.error(error)
	}
}
start()
