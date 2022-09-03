module.exports = {
  name: "guildDelete",
  async execute(guild) {
    console.log(
      `Kicked from a Guild: ${guild.name} // Members: ${guild.memberCount} // ID: ${guild.id}`
    );
  },
};
