import { Options } from "discord.js";
import { ApplicationCommandOptionTypes } from "discord.js/typings/enums";
import { ICommand } from "wokcommands";

export default {
    category: 'Addition',
    description: 'Replies with additions of 2 numbers',

    slash: 'both',
    testOnly: true,

    callback: ({}) => {
        return 'pong'
    }
} as ICommand