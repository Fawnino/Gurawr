module.exports = {
  name: "say",
  aliases: ["echo"],
  description: "Repeats text mentioned",
  usage: '<message>',
  async execute(message, args){
    const say = args.join(" ")

    message.channel.send(say)
          }
        }
