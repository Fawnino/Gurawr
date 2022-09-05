const { EmbedBuilder } = require("discord.js");

module.exports = {
	name: "ban",
	description: "Bans members from server",
	permissions: "BAN_MEMBERS",
	usage: "(member)",
	async execute(message, args, client) {
		const member =
			message.mentions.members.first() ||
			message.guild.members.cache.get(args[0]);

		if (!member)
			return message.channel.send({
				content: "Please specify a member to ban",
			});

		if (message.member.roles.highest.position <= member.roles.highest.position)
			return message.channel.send({
				content:
					"You cannot ban people who are at the same role level or higher role level than you",
			});

		const reason = args.slice(1).join(" ") || "No Reason";

		const embed = new EmbedBuilder()
			.setTitle(`User banned`)
			.setDescription(`Reason: ${reason}`)
			.setTimestamp()
			.setFooter({ text: `${message.author.tag}` });

		member.ban();

		return message.channel.send({ embeds: [embed] });
	},
};
