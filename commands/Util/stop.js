module.exports = {
  name: "stop",
  description: "Stops the client",
  ownerOnly: true,
  execute(message, channel) {
    message.channel
      .send("Stopping the client...")
      .then((msg) => process.exit());
  },
};
