import DiscordJS, { Intents } from 'discord.js'
import WOKCommands from 'wokcommands'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () => {
    console.log('WaifuEmpire is online')

    new WOKCommands(client, {
        commandsDir: path.join(__dirname, 'commands'),
        testServers: ['358344889231998977'],
        
    })
})



client.login(process.env.TOKEN)