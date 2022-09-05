const { EmbedBuilder } = require("discord.js");

module.exports = {
	name: "coinflip",
	description: "Flips the coin!",
	aliases: ["cf"],
	cooldown: 3,
	async execute(message, client) {
		setTimeout(() => {
			const result = new EmbedBuilder()
				.setColor("Green")
				.setTitle(`${Math.floor(Math.random() * 2) === 1 ? "Head" : "Tail"}`)
				.setDescription("If you won Congrats!");

			message.channel.send({ embeds: [result] });
		}, 1000);
	},
};
