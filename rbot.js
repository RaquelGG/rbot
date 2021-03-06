#!/usr/bin/env node
require('dotenv').config();
const mineflayer = require('mineflayer');
const AutoAuth =  require('mineflayer-auto-auth');
const blockFinderPlugin = require('mineflayer-blockfinder')(mineflayer);
const navigatePlugin = require('mineflayer-navigate')(mineflayer);
const navigate2Plugin = require('./avoidBedrock.js')(mineflayer);
const async=require('async');
const bot = mineflayer.createBot({
	host: process.env.MC_HOST,
	port: process.env.MC_PORT,
	username: process.env.MC_USERNAME,
	puglins: [AutoAuth]
});

navigatePlugin(bot);
navigate2Plugin(bot);
bot.loadPlugin(blockFinderPlugin);
const task=require('./task');
const achieve=require('./achieve');

bot.loadPlugin(() => {
  task.init(bot,achieve.achieve,achieve.achieveList,achieve.processMessage,async);
achieve.init(task.all_task.tasks,task.all_task.giveUser,task.all_task.parameterized_alias,task.all_task.alias,task.all_task.stringTo,bot,process.argv[6]);
});


bot.on('error',(err) => {
  console.log(err);
});

bot.on('login', function() {
  console.log("I logged in.");
  console.log("settings", bot.settings);
});


bot.on('spawn', function() {
  console.log("game", bot.game);
});
bot.on('death', function() {
  bot.chat("I died x.x");
});

bot.on('chat',function(username,message){achieve.processMessage(message,username,function(err){if(!err) bot.chat("I "+(!err ? "achieved" : "failed")+" task "+message);});});

bot.navigate.on('pathFound', function (path) {
  console.log("found path. I can get there in " + path.length + " moves.");
});
bot.navigate.on('cannotFind', function () {
  console.log("unable to find path");
});

bot.on('health', function() {
  console.log("I have " + bot.health + " health and " + bot.food + " food");
});

bot.on('playerJoined', function(player) {
  console.log("hello, " + player.username + "! welcome to the server.");
});
bot.on('playerLeft', function(player) {
  console.log("bye " + player.username);
});
bot.on('kicked', function(reason) {
  console.log("I got kicked for", reason, "lol");
});


bot.on('nonSpokenChat', function(message) {
  console.log("non spoken chat", message);
});
