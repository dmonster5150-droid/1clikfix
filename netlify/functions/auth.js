export async function handler(event) {

const { pass } = JSON.parse(event.body)

if (pass === process.env.OWNER_PASSKEY) {

return {
statusCode: 200,
body: JSON.stringify({ success: true })
}

}

return {
statusCode: 401,
body: JSON.stringify({ success: false })
}

}
