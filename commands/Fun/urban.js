const { EmbedBuilder } = require("discord.js");
const axios = require("axios");

module.exports = {
	name: "urban",
	aliases: ["urbandictionary"],
	description: "Looks Up Stuff on Urban Dictionary",
	usage: "(query)",
	async execute(message, args, client) {
		let query = args.join(" ");

		if (!query) {
			return message.channel.send("Please specify word to look up");
		}
		query = encodeURIComponent(query);

		try {
			const {
				data: { list },
			} = await axios.get(
				`https://api.urbandictionary.com/v0/define?term=${query}`
			);
			const [answer] = list;

			const embed = new EmbedBuilder()
				.setTitle(answer.word)
				.setURL(answer.permalink)
				.setColor("Random")
				.addFields(
					{
						name: "RATINGS",
						value: `${answer.thumbs_up} 👍 || ${answer.thumbs_down} 👎`,
					},
					{
						name: "DEFINITION",
						value: `${trim(answer.definition)}`,
					},
					{
						name: "EXAMPLE",
						value: `${trim(answer.definition)}`,
					}
				);

			return message.channel.send({ embeds: [embed] });
		} catch (err) {
			return message.channel.send(`Word ${query} not found`);
		}
	},
};

function trim(input) {
	return input.length > 1024 ? `${input.slice(0, 1020)} ... ` : input;
}
