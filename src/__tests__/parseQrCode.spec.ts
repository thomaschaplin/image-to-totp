import { parseQrCode } from "../parseQrCode";
import * as path from "path";

describe("Parse QR code", () => {
  const projectBaseFolder = path.join(__dirname, "../../");
  const fixturesFolder = path.join(
    projectBaseFolder,
    "src/__tests__/fixtures",
  );

  const validTotpQrCode = `${fixturesFolder}/2fa.png`;
  const nonExistantTotpQrCode = `${fixturesFolder}/2fa_not_exist.png`;

  it("should parse valid totp qr code", async () => {
    const parsedQrCode = await parseQrCode(validTotpQrCode);
    expect(parsedQrCode).toStrictEqual({
      fullUri: "otpauth://totp/label?secret=secret&issuer=issuer",
      type: "totp",
      label: {
        issuer: "",
        account: "label",
      },
      query: { secret: "secret", issuer: "issuer" },
    });
  });

  it("should throw an error when parsing a totp qr code which does not exist", async () => {
    try {
      await parseQrCode(nonExistantTotpQrCode);
    } catch (error) {
      expect(error.message).toStrictEqual(
        `File "${nonExistantTotpQrCode}" does not exist.`,
      );
    }
  });
});
