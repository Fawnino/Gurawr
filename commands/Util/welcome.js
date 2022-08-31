const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'welcome',
  description: 'Sends a welcome Message!',
  async execute(message) {
    const embed = new MessageEmbed()
    .setTitle('Welcome to the server!')
    .setDescription(`Welcome, have a look around the server. Welcome again! make sure to have fun.`)
    .setTimestamp()
    message.channel.send({embeds: [embed]})
  }
}