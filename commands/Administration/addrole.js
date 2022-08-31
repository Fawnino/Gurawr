const Discord = require('discord.js')

module.exports = {
  name: 'addrole',
  description: 'adds roles to users',
  permissions: 'MANAGE_ROLES',
  args: 0,
  async execute(message,args,client){

    const target = message.mentions.members.first()
    if(!target){
      return message.channel.send({content:"Please specify user"})
    }
    const role = message.mentions.roles.first()

    if(!role){
      return message.channel.send({content:"Please specify role to give"})
    }

    await target.roles.add(role)

    message.channel.send({content:`${target.user.username} has been given a new role`})

  }

}