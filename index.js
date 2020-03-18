/**
 * @param {string} ip
 * @param { int | string } port
 * @returns {Promise<Object>}
 */
module.exports = (ip, port = 25565) => {
  return new Promise((resolve, reject) => {
      if (typeof ip !== "string") {
        return reject("IP must be a string.")
      }

      port = parseInt(port);
      if (port > 65535) {
        return reject("Port must me lower than 65535.")
      }

      request(`https://mcapi.us/server/status?ip=${ip}&port=${port}`)
        .then(result => handleResolve(result, resolve, reject))
        .catch(reject)
    }
  )
};

/**
 * @param data { Object }
 * @param resolve { function }
 * @param reject { function }
 * @returns { * }
 */
handleResolve = (data, resolve, reject) => {
  if (data.status !== "success" || data.error) {
    return reject(data.error || "An error occured.")
  }
  delete data.status;
  delete data.error;
  data.queryDuration = data.duration * 0.000001; // Getting milliseconds from nanoseconds
  delete data.duration;
  resolve(data)
};

/**
 * Using axios or request is for losers.
 * @param url { String }
 * @returns { Promise<Object> }
 */
request = (url) => {
  return new Promise((resolve, reject) => {
    require("https").get(url, res => {
        if (res.statusCode !== 200) {
          reject("Request failed.");
        }
        res.on("data", d => {
          resolve(JSON.parse(d.toString()))
        })
      }).on("error", reject).end()
  })
};

// I want to thank Syfaro for letting his MCApi free and easy-to-use.
