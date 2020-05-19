const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));



for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}





client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();





const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

if (!command) return;

















try {
	command.execute(message, args);
} catch (error) {
	console.error(error);
	message.reply('Doppio-banane a céssé de fonctionner !');
}



	













	
	if (command === 'ping') {
	client.commands.get('ping').execute(message, args);
	} 


	if (command === 'beep') {
	client.commands.get('beep').execute(message, args);
	} 


	if (command === 'avatar') {
	client.commands.get('avatar').execute(message, args);
	} 


	if (command === 'info-serveur') {
	client.commands.get('info-serveur').execute(message, args);
	} 


	if (command === 'info-demoi') {
	client.commands.get('info-demoi').execute(message, args);
	} 


	if (command === 'clear') {
	client.commands.get('clear').execute(message, args);
	} 


	if (command === 'help') {
	client.commands.get('help').execute(message, args);
	} 


	if (command === 'help-ping') {
	client.commands.get('help-ping').execute(message, args);
	} 


});


client.login(token);