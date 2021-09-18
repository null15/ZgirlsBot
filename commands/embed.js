"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
exports.default = {
    category: 'testing',
    description: 'Sends an embed',
    permissions: ['ADMINISTRATOR'],
    callback: ({ message, text }) => {
        const embed = new discord_js_1.MessageEmbed()
            .setTitle('Important Information')
            .setURL('https://discord.gg/s8es9d7nqU')
            .setDescription('The following rules applies to both Guild Members and Guests.')
            .setColor('BLURPLE')
            .setImage('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/794c2ebe-31d9-4a3f-a641-8484be6023fe/dechujq-382bcce1-f6bb-48a4-a9a1-816913ed6468.png/v1/fill/w_509,h_350,strp/aurora_banner_rules_by_narkofficial_dechujq-350t.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODgxIiwicGF0aCI6IlwvZlwvNzk0YzJlYmUtMzFkOS00YTNmLWE2NDEtODQ4NGJlNjAyM2ZlXC9kZWNodWpxLTM4MmJjY2UxLWY2YmItNDhhNC1hOWExLTgxNjkxM2VkNjQ2OC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.sOjDiHveVFEqnUGU80XWpAWsb8Cq3Vsqwqsy0AnXLxY')
            .setFooter('WaifuEmpire personal bot')
            .addFields([
            {
                name: '🔷 Donation',
                value: '10 donations per day is mandatory.',
            },
            {
                name: '🔷 Inactivity',
                value: 'Inactive for more than 48h means kick. There are times when we are busy, and thats ok as long as you let an admin know beforehand.'
            },
            {
                name: '🔷 Respect',
                value: 'We dont want any kind of toxicity, we aim to be a very fun and loving community! Lets all have fun collecting waifus.'
            },
            {
                name: '🔻 Validation',
                value: 'This is for Guild Members of WaifuEmpire. If you recently joined this discord, head over to channel <#886231357825626134> and tell us your ingame-name to validate yourself!'
            },
        ]);
        message.channel.send({ embeds: [embed] });
    }
};
