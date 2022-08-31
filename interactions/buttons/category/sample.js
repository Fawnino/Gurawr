const {MessageEmbed, MessageActionRow, MessageButton } = require("discord.js")
module.exports = {
    name: "invite",
    description: "Invite me to your server!",
    async execute(client, interaction, args) {
      
        const Invite = new MessageEmbed()
        .setTitle("Invite Me!")
        .setDescription("I'm a cool Discord Bot, ain't I? Use the buttons below to invite me to your server or join our support server!\n\nStay Safe 👋")
         .setColor("PINK")
         .setThumbnail(client.user.displayAvatarURL())

      let row = new MessageActionRow().addComponents(
        new MessageButton()         .setURL("https://discord.com/api/oauth2/authorize?client_id=885002893671927848&permissions=8&redirect_uri=https%3A%2F%2Fdiscord.events.stdlib.com%2Fdiscord%2Fauth%2F&scope=bot%20applications.commands")
          .setLabel("Invite Me")
          .setStyle("LINK"),

        new MessageButton()
        .setURL("https://discord.gg/a9gFcHJS")
          .setLabel("Support Server")
          .setStyle("LINK"),

      );
      interaction.followUp({ embeds: [Invite], components: [row] });
    }
  };