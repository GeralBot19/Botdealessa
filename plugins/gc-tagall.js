let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `👑𝐋𝐋𝐀𝐌𝐀𝐍𝐃𝐎 𝐀 𝐋𝐀𝐒 𝐏𝐋𝐀𝐍𝐓𝐀𝐒👑: ${pesan}`
let teks =`📝 𝙼𝙴𝙽𝚂𝙰𝙹𝙴: 𝙰𝙽𝙾𝚃𝙰𝚃𝙴 𝙿𝙻𝙰𝙽𝚃𝙰 𝙾 𝚂𝙴𝚁𝙰𝚂 𝙲𝚄𝙿𝙾 \n\n❏ ${oi}\n❏ @𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂 \n`
for (let mem of participants) {
teks += `👑 @${mem.id.split('@')[0]}\n`}
teks += `➥👑𝐁𝐨𝐭 𝐝𝐞 𝐀𝐥𝐞𝐬𝐬𝐚👑 `
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.register = true
export default handler
