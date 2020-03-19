# Minecraft Status

### Install the package

Require the package using the following command.  
`npm install minecraft-status`

### Requesting the API

The only and mandatory parameter for this function to be executed is a server IP.  
You can provide a port as well if needed. The default one is 25565.

Here is a quick example of how to make a call
```javascript
const minecraftStatus = require("minecraft-status");

// Not providing a port
minecraftStatus("<YourServerIP>")
  .then(console.log)
  .catch(console.error);

// Providing a port
minecraftStatus("<YourServerIP>", 43778)
  .then(console.log)
  .catch(console.error);
```

### Data Structure
The output data will look like the following:
```json
{
    "online": true,
    "motd": "<TheServersMOTD>",
    "players": {
        "max": 5,
        "now": 0
    },
    "server": {
        "name": "<TheServersMinecraftVersion>",
        "protocol": 340
    },
    "last_online": "LastSeenOnlineTimestamp",
    "last_updated": "LastUpdatedTimestamp",
    "queryDuration": 435
}
```
The queryDuration is output in millisecond.