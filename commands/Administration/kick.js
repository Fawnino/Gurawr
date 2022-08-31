const { MessageEmbed } = require('discord.js')

module.exports = {

  name:"kick",
  description: "kicks members from server",
  usage: '(member)',
  permissions: 'BAN_MEMBERS',
  async execute(message,args, client){

    const member = message.mentions.members.first()

    if(!member) return message.channel.send({content:'Please specify a member to kick'})

    if(
      message.member.roles.highest.position <= member.roles.highest.position
    ) return message.channel.send({content:'You cannot kick people who are at the same role level or higher role level than you'})

    let reason = args.slice(1).join(" ") || "No Reason"

   
    
   const kickembed = new MessageEmbed()
    .setTitle(`User Kicked`)
    .setDescription(`Reason: ${reason}`)
    .setTimestamp()
    .setFooter(message.author.tag)
   member.kick()





    return message.channel.send({embeds: [kickembed]});

  }
}