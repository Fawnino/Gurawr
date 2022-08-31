const Discord = require("discord.js")
const fetch = (args) => import('node-fetch').then(({default: fetch}) => fetch(args));

module.exports = {
    name: 'howgay',
    description: 'Gay Rate Command',
    usage: '[user]',
    async execute(message, args,client){
    try{
        const member = message.mentions.users.first() || message.author;
        const user = member.displayAvatarURL({dynamic:false, format:'png'})
        let gayrate = Math.floor(Math.random() * 101)

       let image = " ";

     image = await fetch(`https://luminabot.xyz/api/image/gay?image=${user}`)
            .then(response => 
                image = response.url
          )

        if(gayrate >=70){

         let embed = new Discord.MessageEmbed()
            .setTitle("Gayrate Machine")
            .setColor("#000000")
            .setImage(image)
            .setDescription(`${member.username} is \`${gayrate}%\` gay 🏳️‍🌈`)
          
            message.channel.send({embeds:[embed]})
            

        }
    else{
            
    
        let embed = new Discord.MessageEmbed()
            .setTitle("Gayrate Machine")
            .setColor("RANDOM")
            .setDescription(`${member.username} is \`${gayrate}%\` gay 🏳️‍🌈`)
          
        message.channel.send({embeds:[embed]})
     }
    } catch(err){
        message.channel.send("API Error")
    }
}
}