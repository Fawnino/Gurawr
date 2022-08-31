/**
 * @file Message Based Commands Handler
 * @author Naman Vrati
 * @since 1.0.0
 */

// Declares constants (destructured) to be used in this file.

const { Collection, MessageEmbed } = require("discord.js");
const { owner, prefix} = require("../config.json");


const escapeRegex = (string) => {
	return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};

module.exports = {
	name: "messageCreate",

	/**
	 * @description Executes when a message is created and handle it.
	 * @author Naman Vrati
	 * @param {Object} message The message which was created.
	 */

	async execute(message) {
		const { client, guild, channel, content, author } = message;

		// Checks if the bot is mentioned in the message all alone and triggers onMention trigger.
		// You can change the behavior as per your liking at ./messages/onMention.js

		if (
			message.content == `<@${client.user.id}>` ||
			message.content == `<@!${client.user.id}>`
		) {
			require("../messages/onMention").execute(message);
			return;
		}

		/**
		 * @description Converts prefix to lowercase.
		 * @type {String}
		 */
    const checkPrefix = prefix.toLowerCase();

		/**
		 * @description Regex expression for mention prefix
		 */

		const prefixRegex = new RegExp(
			`^(<@!?${client.user.id}>|${escapeRegex(checkPrefix)})\\s*`
		);

		// Checks if message content in lower case starts with bot's mention.

		if (!prefixRegex.test(content.toLowerCase())) return;

		/**
		 * @description Checks and returned matched prefix, either mention or prefix in config.
		 */

		const [matchedPrefix] = content.toLowerCase().match(prefixRegex);

		/**
		 * @type {String[]}
		 * @description The Message Content of the received message seperated by spaces (' ') in an array, this excludes prefix and command/alias itself.
		 */

		const args = content.slice(matchedPrefix.length).trim().split(/ +/);

		/**
		 * @type {String}
		 * @description Name of the command received from first argument of the args array.
		 */

		const commandName = args.shift().toLowerCase();

		// Check if mesage does not starts with prefix, or message author is bot. If yes, return.

		if (!message.content.startsWith(matchedPrefix) || message.author.bot)
			return;

		/**
		 * @description The message command object.
		 * @type {Object}
		 */

		const command =
			client.commands.get(commandName) ||
			client.commands.find(
				(cmd) => cmd.aliases && cmd.aliases.includes(commandName)
			);

    console.log(`${message.author.username} used ${JSON.stringify(command)} in ${guild.name}`)

		// If it's not a command, return :)

		if (!command) return;

		// Owner Only Property, add in your command properties if true.

		if (command.ownerOnly && message.author.id !== owner) {
			const ownerOnlyembed = new MessageEmbed()
			ownerOnlyembed.setTitle(':negative_squared_cross_mark:| You can\t execute that command!')
			ownerOnlyembed.setDescription('That command is restricted for users who is not my owner.')
			ownerOnlyembed.setFooter('Owner Only')
			return message.reply({
				embeds: [ownerOnlyembed]
			});
		}

		// Guild Only Property, add in your command properties if true.

		if (command.guildOnly && message.channel.type === "dm") {
			const dms = new MessageEmbed()
			dms.setTitle(':negative_squared_cross_mark:| I can\'t execute that command inside DMs!')
			dms.setDescription('Try to execute commands inside a server/guild.')
			dms.setFooter('Server/Guild only')
			return message.reply({
				embeds: [dms]
			});
		}

		// Author perms property

		if (command.permissions) {
			const authorPerms = message.channel.permissionsFor(message.author);
			if (!authorPerms || !authorPerms.has(command.permissions)) {
				const insufficentPermissions = new MessageEmbed()
			insufficentPermissions.setTitle(':negative_squared_cross_mark:| You can\'t execute that command!')
			insufficentPermissions.setDescription('You don\'t have the required permissions to use this command.')
			insufficentPermissions.setFooter('Insufficient Permissions')
			return message.reply({
				embeds: [insufficentPermissions]
			});
		}
	}
		// Args missing

		if (command.args && !args.length) {
			let reply = ':negative_squared_cross_mark:| Insufficient Arguments'

			if (command.usage) {
				reply += `\n:negative_squared_cross_mark:| The proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
			}

			return message.channel.send({ content: reply });
		}
		// Cooldowns

		const { cooldowns } = client;

		if (!cooldowns.has(command.name)) {
			cooldowns.set(command.name, new Collection());
		}

		const now = Date.now();
		const timestamps = cooldowns.get(command.name);
		const cooldownAmount = (command.cooldown || 3) * 1000;

		if (timestamps.has(message.author.id)) {
			const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

			if (now < expirationTime) {
				const timeLeft = (expirationTime - now) / 1000;
				const currentlyOnCooldown = new MessageEmbed()
			currentlyOnCooldown.setTitle(`:negative_squared_cross_mark:| ${command.name} is still on cooldown!`)
			currentlyOnCooldown.setDescription(`Try to execute the command in ${timeLeft.toFixed(1)}.`)
			currentlyOnCooldown.setFooter('Cooldown')
			return message.reply({
				embeds: [currentlyOnCooldown]
			});
			}
		}

		timestamps.set(message.author.id, now);
		setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

		// Rest your creativity is below.

		// execute the final command. Put everything above this.
		try {
			command.execute(message, args);
		} catch (error) {
			console.error(error);
			const commandInteruppted = new MessageEmbed()
			commandInteruppted.setTitle(':negative_squared_cross_mark:| I can\'t execute that command due to an error!')
			commandInteruppted.setDescription('The command has been interrupted due to an error.')
			commandInteruppted.setFooter('Error')
			return message.reply({
				embeds: [commandInteruppted]
			});
		}
	},
 };

