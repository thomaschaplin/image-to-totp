import {parseTotpUri} from '../parseTotpUri'
import * as validUris from './fixtures/validUris.json'
import * as invalidUris from './fixtures/invalidUris.json'

describe('Parse totp uri', () => {
    validUris.forEach(([uri, expected]) => {
        it(`should parse totp uri: "${uri}"`, () => {
            expect(parseTotpUri(uri.toString())).toStrictEqual(expected)
        })
    })

    invalidUris.forEach(([uri, expected]) => {
        it(`should not parse totp uri: "${uri}"`, () => {
            try {
                parseTotpUri(uri.toString())
            } catch (error) {
                expect(error.message).toStrictEqual(expected)
            }
        })
    })
})
