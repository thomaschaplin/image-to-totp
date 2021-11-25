import {benchmark} from "kelonio"
import {imageToTotp} from "../image-to-totp"
import * as path from "path"

describe("Generate totp from file", () => {
    it("should generate a totp from a image file", async () => {
        const projectBaseFolder = path.join(__dirname, "../../")
        const fixturesFolder = path.join(
            projectBaseFolder,
            "src/__tests__/fixtures"
        )
        const totp = await imageToTotp(`${fixturesFolder}/2fa.png`)
        expect(typeof totp).toBe("string")
        expect(totp).toHaveLength(6)
    })

    it("performance", async () => {
        const projectBaseFolder = path.join(__dirname, "../../")
        const fixturesFolder = path.join(
            projectBaseFolder,
            "src/__tests__/fixtures"
        )
        await benchmark.record(
            ["image-to-totp", "should generate a totp from a image file"],
            () => imageToTotp(`${fixturesFolder}/2fa.png`),
            {meanUnder: 100}
        )
    })
})
