import {exec} from 'child_process'
import fs from 'fs';
import text2png from 'text2png';

const defaultStyle = {
    font: '80px Futura',
    textColor: 'teal',
    bgColor: 'linen',
    lineSpacing: 10,
    padding: 20
};

export function execCommand(command) {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            const out = stdout.replace(/\r/g, '');
            resolve(`> ${command}\n ${out}`);
        });
    });
}

export function text2Png(text, path, style = defaultStyle) {
    fs.writeFileSync(path, text2png(text, style));
}