import {generateTotpFromFile} from './generateTotpFromFile'
import * as path from 'path'

const test = async (account: string) => {
    const projectBaseFolder = path.join(__dirname, '../')
    const imagesFolder = path.join(projectBaseFolder, 'src/images')
    const totp = await generateTotpFromFile(`${imagesFolder}/${account}.png`)
    console.log(totp)
}

test('example1')
test('example2')
