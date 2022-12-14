const { EmbedBuilder } = require("discord.js");
const Discord = require("discord.js");
module.exports = {
	name: "eval",
	description: "Eval Command",
	ownerOnly: true,
	async execute(message, args, client) {
		const embed = new EmbedBuilder()
			.setTitle("Evaluating...")
			.setAuthor({
				name: `${message.author.username}`,
				iconURL: `${message.author.displayAvatarURL({ dynamic: true })}`,
			});
		const msg = await message.channel.send({ embeds: [embed] });
		try {
			const data = eval(args.join(" ").replace(/```/g, ""));
			const embed = new EmbedBuilder()
				.setTitle("Output: ")
				.setDescription("```await data```");
			await msg.edit(embed);
			await msg.react("✅");
			await msg.react("❌");
			const filter = (reaction, user) =>
				(reaction.emoji.name === "❌" || reaction.emoji.name === "✅") &&
				user.id === message.author.id;
			msg.awaitReactions(filter, { max: 1 }).then((collected) => {
				collected.map((emoji) => {
					switch (emoji._emoji.name) {
						case "✅":
							msg.reactions.removeAll();
							break;
						case "❌":
							msg.delete();
							break;
					}
				});
			});
		} catch (e) {
			const embed = new EmbedBuilder().setTitle("An Error has occured");
			return await msg.edit(embed);
		}
	},
};
