import fs from 'fs';
import path from 'path';
import os from 'os';

export const savePassword = (password) => {
    const __filename = new URL(import.meta.url).pathname;
    const __dirname = path.dirname(__filename);

    fs.open(path.join(__dirname, '../', 'passwords.txt'), 'a', 0o664, (e, id) => {
        fs.write(id, password + os.EOL, null, 'utf-8', () => {
            fs.close(id, () => {
                console.log('password saved to passwords.txt')
            })
        })
    })
}
