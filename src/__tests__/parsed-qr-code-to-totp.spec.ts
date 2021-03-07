import {benchmark} from "kelonio"
import {parseTotpUri} from "../parse-totp-uri"
import {generateTotpFromParsedQrCode} from "../parsed-qr-code-to-totp"
import * as validUris from "./fixtures/valid-uris.json"

describe("Generate totp from parsed qr code", () => {
    validUris.forEach(([uri]) => {
        it(`should generate a totp for totp uri: "${uri}"`, () => {
            const parsedTotpUri = parseTotpUri(uri.toString())
            const totp = generateTotpFromParsedQrCode(
                parsedTotpUri.label.issuer,
                parsedTotpUri.query.issuer,
                parsedTotpUri.query.secret
            )
            expect(typeof totp).toBe("string")
            expect(totp).toHaveLength(6)
            expect(parseInt(totp)).not.toEqual(NaN)
        })
    })

    it("performance", async () => {
        const uri = validUris[0][0].toString()
        const parsedTotpUri = parseTotpUri(uri)
        await benchmark.record(
            ["parse-qr-code-to-totp", "should generate a totp for totp uri"],
            () =>
                generateTotpFromParsedQrCode(
                    parsedTotpUri.label.issuer,
                    parsedTotpUri.query.issuer,
                    parsedTotpUri.query.secret
                ),
            {meanUnder: 1}
        )
    })
})
