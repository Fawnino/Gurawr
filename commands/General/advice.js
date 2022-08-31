const Discord = require('discord.js')

module.exports = {
  name: 'advice',
  description: 'Sends advice.',
  execute(message){
require('request')('http://api.adviceslip.com/advice', function(error, response, body) {
      if (!error && response.statusCode == 200) {
        const embed = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription(`*${JSON.parse(body).slip.advice}*`)
        message.channel.send({embeds: [embed]})
      } else {
        const embed = new Discord.MessageEmbed()
          .setTitle('Oops.. An error')
          .setColor("RED")
          .setDescription(`**Advice:**\n\nI couldn't think of any advice..`)
          .setTimestamp()
        message.channel.send({embeds: [embed]})
      }
    })
  }}