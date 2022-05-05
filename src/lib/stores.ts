import { writable } from 'svelte/store';

const defaultDeviceName = 'kepi';

const deviceName = writable('kepi');

export {
    defaultDeviceName,
    deviceName,
}