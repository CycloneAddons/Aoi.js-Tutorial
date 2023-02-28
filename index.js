const aoijs = require("aoi.js");

const bot = new aoijs.AoiClient({
  token: "write ur token",
  prefix: "write ur prefix",
  intents: "all",

});


//events
bot.onMessage()
bot.onJoin()

// Ping Command Example
bot.command({
  name: "ping",
  code: `Pong! $pingms`
});

//tesing the welcome image
bot.joinCommand({
  channel: "channel Id where u want welcome image send",
  code: ` $djsEval[
(async () => {
const Discord = require('discord.js')
const { MessageAttachment, MessageEmbed } = require('discord.js');
const Welcomer = require('@cycloneaddons/welcomer');

const image = new Welcomer()
    .setBackground("https://media.discordapp.net/attachments/1078243575776682034/1078568707716022334/uwp1085854.gif")
    .setGIF(true)
    .setAvatar(member.user.displayAvatarURL({ format: "png" }))
    .setName(member.user.username)
    .setDiscriminator(member.user.discriminator)
    .setBlur(2)
    
const attachments = new MessageAttachment(await image.generate(), "cycloid-welcome.gif")

const exampleEmbed = new MessageEmbed()
	.setImage('attachment://cycloid-welcome.gif')
  .setColor('#8df7d9')
  .setTitle('title for welcomer')
  .setDescription('description for welcomer')

channel.send({ embeds: [exampleEmbed], files: [attachments] })
})()]`
})


