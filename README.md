# Minecraft Server Status
Get the status data of a Minecraft server by providing it's IP address.

## Installation

[![NPM](https://nodei.co/npm/minecraft-server-status.png)](https://nodei.co/npm/minecraft-server-status/)

```
npm install minecraft-server-status
```

### Usage

The only and mandatory parameter for this function to be executed is a server IP.  
You can provide a port as well if needed. The default one is 25565.

Here is a quick example of how to make a call
```javascript
const getStatus = require("minecraft-server-status");

// Not providing a port
getStatus("<YourServerIP>")
  .then(console.log)
  .catch(console.error);

// Providing a port
getStatus("<YourServerIP>", 43778)
  .then(console.log)
  .catch(console.error);
```

## Data Structure
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
        "version": "<TheServersMinecraftVersion>",
        "protocol": 340
    },
    "last_online": "LastSeenOnlineTimestamp",
    "last_updated": "LastUpdatedTimestamp",
    "queryDuration": 435
}
```
The queryDuration is output in millisecond.

© 2020 - Edouard Courty  
