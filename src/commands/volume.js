module.exports = {
    name: 'volume',
    aliases: ['v'],
    utilisation: `{prefix}volume [number]`,
    voiceChannel: true,

    async execute(client, message, args) {
        const maxVolume = client.config.maxVolume;
        const queue = client.player.getQueue(message.guild.id);

        if (!queue || !queue.playing)
            return message.channel.send(`❌ | ไม่มีเพลงที่กำลังเล่นอยู่`);

        await message.react('👍');
        const vol = parseInt(args[0]);

        if (!vol)
            return message.channel.send(`ระดีบเสียงขณะนี้: **${queue.volume}** 🔊\n**เพื่อเปลี่ยนระดับเสียง, with \`1\` to \`${maxVolume}\` พิมพ์ตัวเลขระหว่าง**`);

        if (queue.volume === vol)
            return message.channel.send(`❌ | ระดับเสียงที่คุณต้องการเปลี่ยนคือระดับเสียงปัจจุบันแล้ว`);

        if (vol < 0 || vol > maxVolume)
            return message.channel.send(`❌ | **พิมพ์ตัวเลขจาก \`1\` to \`${maxVolume}\` เพื่อเปลี่ยนระดับเสียง**`);

        const success = queue.setVolume(vol);

        return message.channel.send(success ? `🔊 **${vol}**/**${maxVolume}**%` : `❌ | บางอย่างผิดพลาด.`);
    },
};