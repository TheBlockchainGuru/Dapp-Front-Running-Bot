# Wallet tracked Buy bot

A wallet tracker bot is a bot that can copy transactions from the target wallets at the same time.

## IMPORTANT NOTES BEFORE RUNNING THE BOT !!!

1) The bot uses a wallet address and private key
    - if this is **NOT** configured correctly you will get an error that says "(node:45320) UnhandledPromiseRejectionWarning: Error: insufficient funds for intrinsic transaction cost"

2) Make **sure** you have the following assets in your MetaMask wallet **FOR THE ACCOUNT ADDRESS WITH WHICH YOU ARE USING THE BOT**
    - **ETH** (this is needed for gas)
    - **WETH** (this is used to purchase the desired token)


# BOT SETUP & CONFIGURATION INSTRUCTIONS

1) Download & Install Node.js - https://nodejs.org/en/

2) Extract the bot zip / download contents to a folder, example 
C:\users\username\Downloads\BHG-wallet-tracked-bot

3) open the command prompt to install the necessary modules for the bot (it should be in the same directory it was earlier when you copy the bot)

```
$ npm install
```

4) After installing modules, type 'npm start' and hit ENTER to run the bot.

```
$ npm start

```
# Usage


1. You have to input the information to run the bot.

```
- Min ETH to follow : Minimum ETH amount of transactions you want to follow. (E.g. 2 ETH : follow more than 2 ETH transactions)

- Wallet Memory

Please add wallet address you want on the wallet memory
 ```

2. if you complete the setting of bot,  you can click the "Start bot" to run the bot  

*** setting ***

Reset or clear the bot's data if you want.


