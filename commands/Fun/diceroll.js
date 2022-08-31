const { MessageEmbed } = require("discord.js");
module.exports = {
    name: 'diceroll',
    aliases: ['dice', 'rolldice'],
    description: 'Dice roll command!',
    execute(message, args, client) {
        const list = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
    ]
    const rand = list[Math.floor(Math.random() * list.length)];
        let newEmbed = new MessageEmbed()
        .setTitle("🎲 Dice Roll!")
        .setColor("RANDOM")
        .setDescription(`You rolled a **${rand}**!`)
        .setTimestamp()
        message.channel.send({embeds: [newEmbed]})
    }   
}