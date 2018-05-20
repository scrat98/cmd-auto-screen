import {combineCmd, runCmdAsync, runCmdSync} from "./utils";
import {
    arp,
    ipconfig,
    netstat,
    netstatCombine as _netstatCombine,
    ping,
    pingCombine as _pingCombine
} from './cmd'

const screenshotFolder = 'C:\\Users\\scrat98\\Google Drive\\Универ\\4 семестр\\Telecommunications\\Lab1\\screenshots';

// runCmdSync(arp, `${screenshotFolder}\\arp`);

// runCmdAsync(ipconfig, `${screenshotFolder}\\ipconfig`);

// runCmdAsync(netstat, `${screenshotFolder}\\netstat`);
// const netstatCombine = combineCmd(_netstatCombine);
// runCmdAsync(netstatCombine, `${screenshotFolder}\\netstat`, 'combine');

runCmdAsync(ping, `${screenshotFolder}\\ping`);
const pingCombine = combineCmd(_pingCombine);
runCmdAsync(pingCombine, `${screenshotFolder}\\ping`, 'combine');