const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("patate")) {
    message.channel.send("Ta gueule !");
  }
});

client.login("NDIzMjI5MDExMzgxMDU5NjA0.DYnTeA.HuHGlyz4X_ti2i7oPDPaP4SYzAY");