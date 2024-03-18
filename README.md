# Edited BAF

My attempt to edit Luiz-Baf and port it into the new version.

## Is this bannable

Yes, it is against the TOS of Hypixel, so don't use it if you don't want to risk that. Futhermore, this is my edit and I'm barely capable of coding.

## Note

-   Keep money in your purse and have booster cookie active gang

## Getting Started

### Executable

For Windows there is a PowerShell-Script "BAF.ps1". This script automatically downloads/updates and starts the newest version from GitHub and saves it at `%appdata$/BAF`. Created files like the config and log file are also stored there. You can execute it by right-clicking and "Run with PowerShell".

You can also paste this command into the PowerShell to run the script: `Invoke-Expression (New-Object System.Net.WebClient).DownloadString("https://raw.githubusercontent.com/Hannesimo/auto-flipper/master/start_script/BAF.ps1`. This command downloads the Script and executes it.

If you want to start the .exe yourself, make sure to open the PowerShell and execute the program with `./BAF-[version]-win.exe`. Don't just run it by double clicking as it will use the Windows CMD and there seems to be an internal issue with the npm minecraft-protocol package and CMD causing the bot to timeout after a while.

Tutorial on how to open PowerShell: https://www.youtube.com/watch?v=aLwq9AggFw8&t=1s

For Mac/Linux just execute the corresponding files as usual. I am not aware of similar issues there.

### Node

To run or build the code, you need Node and npm.

-   To run it just execute `npm install` followed by `npm run start`<br/><br/>
-   To build the executables the following command for the following OS:
    -   Windows: `npm run build-executables-win`
    -   Linux: `npm run build-executables-linux`

NOTE: You only need this if you want to build the code yourself. If you are using a executable, you can ignore the node steps.

### Linux
To execute on linux use the following (and follow the input requests)
```bash
version=1.1.9
wget -c https://github.com/Hannesimo/auto-flipper/releases/download/$version/BAF-$version-linux
chmod +x BAF-$version-linux 
./BAF-$version-linux
```


## Configuration

The bot creates a config.toml file after the first start. This file contains configuration properties for the bot. Currently, only the ingame username is stored, so you don't need to enter it every time. I may add more configurations in the future. The Cofl configurations apply as normal.
<br/> NOTE: The mod uses the Median price (minus a bit to sell faster) to auto-sell


## Webhook

You can add a Webhook URL into your config.toml to get different notifications (init, selling, purchasing, relisting).
Just add the line `WEBHOOK_URL = "YOUR_URL"` into your config. Make sure to place it above the sessions part (will be created automatically on your first start).
