const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const Discord = require('discord.js');

module.exports = {
    name: 'wikipedia',
    aliases: ['wiki'],
    description: 'Search for wikipedia',
    usage: '(query)',
    args: 0,
    async execute(message,args,client){
        const wiki = args.slice().join(' ')

        if(!wiki) return message.channel.send('Provide query to search')

        const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(wiki)}`

        let response

        try{
            response = await fetch(url).then(res => res.json())
        }
        catch(e){
            return message.channel.send('An error occurred')
        }


        try{
            if(response.type === 'disambiguation'){
                const embed = new Discord.MessageEmbed()
                 .setColor('RANDOM')
                 .setTitle(response.title)
                 .setURL(response.content_urls.desktop.page)
                 .setDescription([`${response.extract} Links for Topic You Searched [Link](${response.content_urls.desktop.page})`])
                return message.channel.send({embeds:[embed]});    
            } else{
                const embed = new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle(response.title)
                    .setThumbnail(response.thumbnail.source)
                    .setURL(response.content_urls.desktop.page)
                    .setDescription(response.extract)
                return message.channel.send({embeds:[embed]});

            }
        }
        catch{
            return message.channel.send('Provide a valid query to search')
        }


    }

}