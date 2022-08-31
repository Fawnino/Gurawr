const Discord = require("discord.js")
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

module.exports = {
    name: 'pp',
    description: 'Gets how long your pp is.',
    async execute(message, args,client){

    try{
        const member = message.mentions.users.first() || message.author;
        const user = member.displayAvatarURL({dynamic:false, format:'png'})
        let gayrate = Math.floor(Math.random() * 101)

      const list = [
      "8=D so small lmao.",
      "8==D",
      "8===D",
      "8====D",
      "8=====D",
      "8======D",
      "8========D",
      "8==========D",
      "8===========D",
      "8============D",
      "8=============D",
      "8==============D",
      "8================D",
      "8=================D ",
      "8==================D",
      "8===================D"
    ]
    const rand = list[Math.floor(Math.random() * list.length)];

        if(gayrate >=70){

         let embed = new Discord.MessageEmbed()
            .setTitle("Pp Machine")
            .setColor("#000000")
            .setDescription(`${member.username} has a ${rand} pp`)
            message.channel.send({embeds:[embed]})
            

        }
    else{
            
    
        let embed = new Discord.MessageEmbed()
            .setTitle("Pp Machine")
            .setColor("RANDOM")
            .setDescription(`${member.username} has a ${rand} pp`)
          
        message.channel.send({embeds:[embed]})
     }
    } catch(err){
        message.channel.send("API Error")
    }
}
}