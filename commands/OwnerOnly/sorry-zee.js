const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "sorry-zee",
  description: "hi zee i'm very sorry",
  ownerOnly: true,
  async execute (message) {
  const list = [
"https://cdn.discordapp.com/attachments/867575039825543169/1008994328787558450/03037C79-C86B-4305-B186-FE74A50D9C8B.jpg",      "https://cdn.discordapp.com/attachments/867575039825543169/1008994416440115250/B0CFC835-0B9B-457F-A816-9F842CC95095.jpg",     "https://cdn.discordapp.com/attachments/867575039825543169/1008994289478537256/95B2B747-D389-4866-B5D1-07DE1A661DC7.jpg",
"https://media.discordapp.net/attachments/867575039825543169/1008994956100239360/00A6D1D0-DD86-4D4E-8875-CBC96ECE7A41.jpg?width=355&height=473", "https://media.discordapp.net/attachments/867575039825543169/1010439329463685130/0FE638FF-42E7-4C03-BBA8-C65100AFEEEF.jpg?width=251&height=467",
"https://cdn.discordapp.com/attachments/867575039825543169/1010439574390063124/FC13B66C-7966-475B-A699-F305C28C55B2.jpg", "https://media.discordapp.net/attachments/867575039825543169/1010440318409265162/C26C6500-1828-4B22-833B-D5DEEED1F2CC.jpg?width=251&height=467"
    ]
    const rand = list[Math.floor(Math.random() * list.length)];
    
    const sorryzee = new MessageEmbed()
    .setTitle(`Hi Zee, I'm very sorry.`)
    .setDescription(`Hi <@919322871245996052> I'm very sorry for offendinating you.`)
    .setTimestamp()
    .setImage(rand)
    message.channel.send({embeds: [sorryzee]})
  }
  
}