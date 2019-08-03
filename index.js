const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({ disableEveryone: true });

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`)
    bot.user.setActivity("789 Users Overall! | *help", { type: "WATCHING" })
});

bot.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if (cmd === `${prefix}panic`) {
        return message.channel.send(`<@&480511766187606016> & <@&477806074121027586> Attention Units! Panic button Activated by ${message.member}, Respond Code 03, Signal 100 Active!`);
    }
    if (cmd === `${prefix}highpriority`) {
        return message.channel.send(`Attention <@&477806083713531944> High Priority is now In effect, Please hold all prioritys!`);
    }
    if (cmd === `${prefix}lowpriority`) {
        return message.channel.send(`Attention <@&477806083713531944> Low Priority is now In effect, Please hold all prioritys!`);
    }
    if (cmd === `${prefix}help`) {

        let helpEmbed = new Discord.RichEmbed()
            .setTitle('Commands Held By Bot')
            .setDescription('Shows all the commands of the bot.')
            .setThumbnail('https://cdn.discordapp.com/attachments/532289762850111488/579370058208247828/SAR_New.png')
            .setColor('RANDOM')
            .addField('*help', 'Displays this page.')
            .addField('*version', 'Shows the Bot Version!')
            .addField('*transfer', 'Displays the servers Transfer Form!')
            .addField('*multiclan', "Displays the Multiclanning Form!")
            .addField('*staffapp', 'Displays the Staff Application!')
            .addField('*website', 'Displays the website for the server.')
            .addField('*av + *avatar', 'Displays your avatar!')
            .addField('*cad', 'Displays the Official CAD/MDT System!')
            .addField('*bug', 'Reports a Bug to the Development Team!')
            .addField('*ping', 'Shows your ping!')
            .addField('*highpriority', 'Activates High Priority Signal', true)
            .addField('*lowpriority', 'Activates Low Priority Signal', true)
            .addField('*panic', 'Activates Panic Button through discord.')
            .setTimestamp()
            .setFooter("Bot Made by the San Andreas Reborn Bot Development Team(HCFSpeed#2581), Report any issues to them.");

        return message.channel.send(helpEmbed);
    }
    if (cmd === `${prefix}cad`) {

        let cad = new Discord.RichEmbed()
            .setTitle("CAD/MDT Systems")
            .setDescription("Click here for our [CAD/MDT](https://sarebornrp.bubbleapps.io/) System!")
            .setColor("#15f153")

        return message.channel.send(cad);
    }
    if (cmd === `${prefix}communications`) {

        let communications = new Discord.RichEmbed()
            .setTitle("Promotions/Demotions!")
            .setDescription("Displays relevant information regarding the Communications department.")
            .setColor("#15f153")
            .addField("Dylan --> Dispatch Supervisor", `Authorized by ${message.author} - California Communications Department Staff.`)
            .addField("New Change #1", "Dispatch Cadets Have to be overlooked by the Department Staff.")
            .addField("New Change #2", "Dispatcher Cadet - Dispatcher II cannot take primary in Emergency Transmissions/Priority Transmissions.")
            .setFooter("Bot Authorized By The Dispatch Director in Coordination with the layout of communications.")

            let commschannel = message.guild.channels.find(`name`, "communications-department");
            if (!commschannel) return message.channel.send("I couldn't Find such a channel called 'report'!")

            message.delete().catch(_O_o => { });
            commschannel.send(communications);

            return;
    }
    if (cmd === `${prefix}version`) {

        let version = new Discord.RichEmbed()
            .setTitle("Bot Version")
            .setDescription(`Current Version of ${bot.user.username} is **Version 1.2!**`)
            .setColor("#15f153")

        return message.channel.send(version);
    }
    if (cmd === `${prefix}botoffline`) {

        let botoffline = new Discord.RichEmbed()
            .setTitle("Bot Is going Offline")
            .setDescription(`Bot is Going Offline as ${message.author} is going offline.`)
            .setColor("#15f153")

            message.delete().catch(_O_o => { });
        return message.channel.send(botoffline);
    }
    if (cmd === `${prefix}911`) {

        let comms = new Discord.RichEmbed()
            .setTitle("911 Call")
            .setDescription(`Attention Operator! ${message.member} Is awaiting your presence in  911 Call!`)
            .setColor("#15f153")

        return message.channel.send(comms);
    }
    if (cmd === `${prefix}newuser`) {

        let test = new Discord.RichEmbed()
            .setTitle(`Welcome To San Andreas Reborn New users!`)
            .setDescription(`I am ${bot.user.username} and I am part of ${message.guild}! You are ${message.author}! If you require any help do *help!`)
            .setColor("RANDOM")

        let testchannel = message.guild.channels.find(`name`, "general-chat");
        if (!testchannel) return message.channel.send("I couldn't Find such a channel called 'report'!")

        message.delete().catch(_O_o => { });
        testchannel.send(test);

        return;
    }
    if (cmd === `${prefix}ping`) {

        let ping = new Discord.RichEmbed()
            .setTitle("Your ping is:")
            .setColor('RANDOM')
            .setDescription(new Date().getTime() - message.createdTimestamp + " ms")

        return message.channel.send(ping);
    }
    if (cmd === `${prefix}transfer`) {

        let transferf = new Discord.RichEmbed()
            .setTitle("San Andrea's Reborn's Transfer Form")
            .setColor('RANDOM')
            .setDescription('Click this link for the [transfer](https://docs.google.com/forms/d/e/1FAIpQLSf7JnSETTZacKclO7XLOYEkIAGfi7oeOQxN1nTUrjXQHYXp4w/viewform?usp=sf_link) form!')

        return message.channel.send(transferf);
    }
    if (cmd === `${prefix}staffapp`) {

        let staffapp = new Discord.RichEmbed()
            .setTitle("San Andrea's Reborn's Staff Application")
            .setColor('RANDOM')
            .setDescription('Click this link for the Staff Application!')

        return message.channel.send(staffapp)
    }
    if (cmd === `${prefix}website`) {

        let website = new Discord.RichEmbed()
            .setTitle("Official San Andreas Reborn's Website!")
            .setColor('RANDOM')
            .setDescription("Click this link for the [Official SA'R Website](https://sarebornrp.com)!")

        return message.channel.send(website)
    }
    if (cmd === `${prefix}avatar`) {

        let avatar = new Discord.RichEmbed()
            .setTitle("Provides a link for your avatar!")
            .setColor('RANDOM')
            .setDescription(message.author.avatarURL)

        return message.channel.send(avatar)
    }
});

bot.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if (cmd === `${prefix}av`) {

        let av = new Discord.RichEmbed()
            .setTitle("Provides a link for your avatar!")
            .setColor('RANDOM')
            .setDescription(message.author.avatarURL)
            .setThumbnail(message.author.avatar)

        return message.channel.send(av)
    }
    if (cmd === `${prefix}report`) {

        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!rUser) return message.channel.send("Couldn't Find user!")
        let reason = args.join(" ").slice(22);

        let reportEmbed = new Discord.RichEmbed()
            .setTitle("A new report!")
            .setColor("RANDOM")
            .setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Rezky825WPfTfvNNHjfHydioPx2diBaVeCV1KSzyxX189mnI")
            .addField("Reported User:", `${rUser} with ID: ${rUser.id}`)
            .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
            .addField("Time", message.createdAt)
            .addField("Reason:", reason);

        let reportchannel = message.guild.channels.find(`name`, "reports");
        if (!reportchannel) return message.channel.send("I couldn't Find such a channel called 'reports'!")

        message.delete().catch(_O_o => { });
        reportchannel.send(reportEmbed);

        return;
    }
    if (cmd === `${prefix}bug`)
        return message.channel.send(`${message.member} Please await A bot Developer To assist you!`)

    if (cmd === `${prefix}multiclan`) {

        let multiclan = new Discord.RichEmbed()
            .setTitle("Provides a link for the multiclanning form!")
            .setColor('RANDOM')
            .setDescription("Follow this link for the [multiclanning form](https://docs.google.com/forms/d/e/1FAIpQLSeMij1lh1jXVhD92WN_56LSnw-gLJ3CCEh9J71Yfk_zL9vopg/viewform)!")

        return message.channel.send(multiclan)
    }

    if (cmd === `${prefix}say`) {

      message.channel.send(args.join(" "))
    }

    if (cmd === `${prefix}botsuggest`) {

      let suggestion = args.join(" ")

      let botEmbed = new Discord.RichEmbed()
      .setTitle("New Suggestion Submitted")
      .setDescription("Suggetion Aspect")
      .addField("Suggestion By" + message.author)
      .addField("Time", message.createdAt)
      .addField("Suggestion", suggestion)

      let suggestchannel = message.guild.channels.find(`name`, "staff-chat");
      if (!suggestchannel) return message.channel.send("I couldn't Find such a channel called 'staff-chat'!")

      message.delete().catch(_O_o => { });
      suggestchannel.send(botEmbed);

    }

    if (cmd === `${prefix}donate`) {

    let donatembed = new Discord.RichEmbed()
      .setTitle("Donation Page")
      .setDescription("[Donate Here](http://bit.ly/sarebornrp-donate)")

    message.channel.send(donatembed)

  }

});

bot.login("");
