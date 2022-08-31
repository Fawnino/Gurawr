const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'ricklink',
  description: 'Make a rick roll hyperlink!',
  usage: '<display-text>',
    async execute(message, args, client) {
      const textforembed = args.join(" ")
      const link = "https://www.youtube.com/watch?v=K7XHy8nppf4" /* <= click here for free cookies and milk */
const hyperlinkembed = new MessageEmbed()
.setDescription(`**[${textforembed}](${link} 'Never gonna give you up\nNever gonna let you down\nNever gonna run around and desert you\nNеver gonna make you cry\nNevеr gonna say goodbye\nNever gonna tell a lie and hurt you\n\n(Oooh, give you up)\n(Oooh, give you up)\n(Oooh) Never gonna give, never gonna give\n(Give you up)\n(Oooh) Never gonna give, never gonna give\n(Give you up)')**`)
      message.channel.send({embeds: [hyperlinkembed]})
    }
}