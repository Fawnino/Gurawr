const { MessageEmbed } = require('discord.js')
const os = require('os')

module.exports = {
  name: 'server-stats',
  aliases: ['serverstats', 'stats'],
  description: 'Sends the server stats',
  async execute(message, args, client) {
    const embed = new MessageEmbed()
     .setColor('RED')
     .setTitle('Current Server Specs')
     .addFields([
    { name: 'Threads', value : os.cpus().length.toString() },
   { name : 'CPU', value: os.cpus()[0].model },
    { name : 'Platform', value: process.platform },
   { name : 'Uptime', value: Math.floor(process.uptime() / 60 / 60).toString() + ' hours' } 
       ])
       message.channel.send({embeds: [embed]})
  }
}
