module.exports = {
    name:'kill',
    description:'Kill another user(is for fun)',
    usage: '(user)',
    async execute(message, args, client){

    if (!args[0]) return message.channel.send(`Wow, that was great..But who do I kill?`)
    let userr = message.mentions.users.first() || message.author;
    if (!userr) return message.channel.send(`Wow, that was great..But who do I kill?`)
    let user = userr.username;
    const answers = [
      `${message.author.username} sat on ${user}, as the other sadly *suffocated*`,
      `${user} dies from dancing too hard`,
      `${user} died from a heart attack`,
      `${user} died from not eating much ass`,
      `..Noo, ${message.author.username} killed them right away, ${user} seems really nice.. why them`,
      `${user} went to fight ${message.author.username}, but got **knocked** out on first round  `,
      `${user} tripped and sadly died`,
      `${user} was begging for forgiveness, but ${message.author.username} killed them right away`,
      `${user} died from aids`,
      `${message.author.username} couldn't handle ${user}'s stupidity, so they shot them`,
      `${user} died while climbing the wall of China`,
      `${user} died while *robbing* a bank`,
      `${user} died while studying history`,
      `${message.author.username} sat on ${user} killing them`,
      `${message.author.username} slapped ${user}.. rip`,
      `${user} is just too weak to handle this`,
      `Gura sat on ${user}, the other sadly *suffocated*`,
      `Gura slapped  ${user}.. rip `,
      `${message.author.username} crushes ${user} with a microwave`,
      `${user} starved to death`,
      `Sorry ${message.author.username}, ${user} seems really innocent`,
      `${user} seems too nice, I can't `,
      `${user} got hit by a car `,
      `${user} died from not getting any bitches`,
      `${user} accidentaly stepped on a bear trap`,
      `${user} died because he didn't like Waluigi`,
      `${message.author.username} tried to push ${user} off a building but managed to land on 2 feet.`,
      `${user} died from emotional damage`,
      `${user} died because "she" didn't accept their feelings`,
    ]
    if (userr.id === message.author.id) return message.channel.send(`Are you Ok?`)
    message.channel.send(`${answers[Math.floor(Math.random() * answers.length)]}`)

    }
}