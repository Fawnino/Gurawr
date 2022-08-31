const fetch = require('reddit-fetcher.js')
const Discord = require('discord.js')
module.exports = {
name: "foodporn",
description:'Foodporn command to retrieve food',
async execute(message, args,client) {


    const data = await fetch("foodporn")

    const embed = new Discord.MessageEmbed()
        .setTitle(data.title || "No Title For This Post")
        .setImage(data.image)
        .setURL(data.url)
        .addField("Upvotes", `${data.upVotes}`)
        .setColor("RANDOM");


    return message.channel.send({embeds:[embed]});


    

    

}
}