const { MessageEmbed } = require("discord.js")

module.exports = {
  name: 'invite',
  aliases: ['invitebot', 'invq'],
  description: 'Shows invite link for Bot',
  cooldown: 3,
  async execute (message){
    const inviteLink = new MessageEmbed()
    .setTitle("Inviting Gura to your server?")
    .setColor("#ADD8E6")
    .setDescription(`**I'm a cool Discord Bot, aren't I? Use the buttons below to invite me to your server or join our support server!\n\nStay Safe :wave:. \n[Click here to Invite me!](https://discord.com/api/oauth2/authorize?client_id=885002893671927848&permissions=8&redirect_uri=https%3A%2F%2Fdiscord.events.stdlib.com%2Fdiscord%2Fauth%2F&scope=bot%20applications.commands)\n[Click here to join the Discord Support Server!](https://discord.gg/8vBCnAwqqP)**`)
    .setFooter("Thanks for inviting!")
    message.channel.send({embeds: [inviteLink]})
  }
} 