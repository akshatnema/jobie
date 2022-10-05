const ping = require("ping");

async function pingUrl() {
    let res = await ping.promise.probe(process.env.URL, {
        timeout: 10
    });
    if (!res.alive) console.log(res);
    else console.log("Ping successful")
    return res.alive;
}

module.exports = { pingUrl };