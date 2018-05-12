import {execCommand, text2Png} from "./utils";

const screenshot_folder = 'C:\\Users\\scrat98\\Google Drive\\Универ\\4 семестр\\Telecommunications\\Lab1\\screenshots';

const commands = [{
    name: 'arp',
    args: [],
}, {
    name: 'ipconfig',
    args: []
}, {
    name: 'netstat',
    args: []
}, {
    name: 'ping',
    args: []
}, {
    name: 'route',
    args: []
}, {
    name: 'tracert',
    args: []
}];

execCommand('ping').then((resolve) => {
    text2Png(resolve, `${screenshot_folder}\\out.png`);
});
