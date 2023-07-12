function handler(m) {
  
  const kontak = {
	"displayName": 'My owner',
	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:testo\nitem1.TEL;waid=905355825662:905355825662\nitem1.X-ABLabel:\nمص2\nURL;My Web:https://مصص\nEMAIL;Email Owner:mhamadtftnaz11@gmail.com\nORG: NOT A BOT + NOT CALL\nEND:VCARD`
}

conn.sendMessage(m.chat, { contacts: { contacts: [kontak] }}, { quoted: m })
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator|مطور|المطور)$/i

export default handler