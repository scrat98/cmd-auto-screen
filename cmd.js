export const arp = {
    name: 'arp',
    args: [
        '',
        '/?',
        '/s 157.55.85.212 00-aa-00-62-c6-09',
        '/a',
        '/d 157.55.85.212',
        '/a',
        '/a /n 127.0.0.1 /v',
    ]
};

export const ipconfig = {
    name: 'ipconfig',
    args: [
        '',
        '/?',
        '/all',
        '/allcompartments /all',
        '/displaydns',
        '/showclassid *',
        '/showclassid6 *',
        '/flushdns',
        '/registerdns',
        '/release',
        '/release6',
        '/renew',
        '/renew6',
        '/setclassid "Wireless LAN adapter Wi-Fi" TEST',
        '/setclassid6 "Wireless LAN adapter Wi-Fi" TEST',
    ]
};

export const netstat = {
    name: 'netstat',
    args: [
        '',
        '/?',
        '/r',
        '/e',
        '/s',
        '/e /s',
        '/x',
        '/y',
    ]
};

export const netstatCombine = {
    name: 'netstat',
    args: [
        '/a',
        '/b',
        '/f',
        '/n',
        '/o',
        '/p tcp',
        '/q',
    ]
};

export const ping = {
    name: 'ping',
    args: [
        '',
        '/?',
    ]
};

export const route = {
    name: 'route',
    args: [
        '',
        '/?'
    ]
};

export const tracert = {
    name: 'tracert',
    args: [
        '',
        '/?'
    ]
};