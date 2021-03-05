import { imageToTotp } from "../image-to-totp";
import * as path from "path";

describe("Generate totp from file", () => {
  it("should generate a totp from a image file", async () => {
    const projectBaseFolder = path.join(__dirname, "../../");
    const fixturesFolder = path.join(
      projectBaseFolder,
      "src/__tests__/fixtures",
    );
    const totp = await imageToTotp(`${fixturesFolder}/2fa.png`);
    expect(typeof totp).toBe("string");
    expect(totp).toHaveLength(6);
  });
});
