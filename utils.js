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
            const _stdout = stdout.replace(/\r/g, '').replace(/\t/g, '');
            const _stderr = stderr.replace(/\r/g, '').replace(/\t/g, '');
            resolve(`> ${command}\n ${_stdout} ${_stderr}`);
        });
    });
}

export function text2Png(text, path, style = defaultStyle) {
    fs.writeFileSync(path, text2png(text, style));
}

export function runCmdAsync(command, screenshotFolder, baseName = '') {
    const promises = command.args.map((arg, index) => {
        return new Promise((resolve, reject) => {
            const cmd = command.name + ' ' + arg;
            console.log(`${cmd} start`);
            execCommand(cmd).then((output) => {
                console.log(`${cmd} end`);
                console.log(`${cmd} start screen`);
                text2Png(output, `${screenshotFolder}\\${command.name}_${baseName}_${index}.png`);
                console.log(`${cmd} end screen`);
                resolve();
            });
        });
    });

    return Promise.all(promises);
}

export function runCmdSync(command, screenshotFolder, baseName = '') {
    return command.args.reduce((prev, arg, index) => {
        return prev.then(() => {
            return new Promise((resolve, reject) => {
                const cmd = command.name + ' ' + arg;
                console.log(`${cmd} start`);
                execCommand(cmd).then((output) => {
                    console.log(`${cmd} end`);
                    console.log(`${cmd} start screen`);
                    text2Png(output, `${screenshotFolder}\\${command.name}_${baseName}_${index}.png`);
                    console.log(`${cmd} end screen`);
                    resolve();
                });
            });
        })
    }, Promise.resolve());
}

export function combineCmd(cmd) {
    const args = cmd.args.reduce((accumulator1, arg1, index1) => {
        return [...cmd.args.reduce((accumulator2, arg2, index2) => {
            if (index1 !== index2) {
                return [...accumulator2, arg1 + ' ' + arg2];
            }
            return accumulator2;
        }, []), ...accumulator1]
    }, []);

    return {
        name: cmd.name,
        args
    }
}