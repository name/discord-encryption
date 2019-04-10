# Discord Encryption
An experimental encryption solution for Discord using [BetterDiscord](https://github.com/jiiks/betterdiscordapp)

## Features
Adds ability to encrypt / decrypt messages on discord using a set password
 - Utilizes AES-256 encryption via the [stanford javascript crypto library](https://github.com/bitwiseshiftleft/sjcl)
 - Messages are decrypted the moment they are receved with little to no delay
 - Encrypted messages appear as green
 - Messages that fail to be decrypted (most likely due to an incorrect password) display a message and appear as red

## How to use
### Install
 - Place 'encryption.plugin.js' in BetterDiscord's plugin folder and then enable it in the settings
 - To set the encryption password open discord with the plugin enabled and an input box will appear for the password to be entered (can be changed / recovered by right-clicking the lock icon)
 
![Context](https://i.imgur.com/H2Z7N7I.png)
![Context](https://i.imgur.com/Ea0AdqO.png)
### Usage
 - To encrypt a message simpily click the added lock button in the message bar and the message will be replaced in its encrypted form
 - Receved messages are decrypted automatically
 - To view or change the encryption password simply right-click the lock icon and an input box will appear - passwords are automatically saved as you type
 
![Context](https://i.imgur.com/Zumi9SZ.png)
 
## Bugs
 - On start the lock button may not appear - to solve this just open another channel and reopen the desired chat and the button should reinitialize 

### Encrypted Message
![Context](https://i.imgur.com/lh0O2Aq.png)