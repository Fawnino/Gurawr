const fetch = require("reddit-fetcher.js");
const { EmbedBuilder } = require("discord.js");
module.exports = {
	name: "meme",
	description: "Meme command to retrieve memes",
	async execute(message, args, client) {
		const data = await fetch("memes");

		const embed = new EmbedBuilder()
			.setTitle(data.title || "No Title For This Post")
			.setImage(data.image)
			.setURL(data.url)
			.addFields({ name: "Upvotes", value: `${data.upVotes}` })
			.setColor("Random");

		return message.channel.send({ embeds: [embed] });
	},
};
