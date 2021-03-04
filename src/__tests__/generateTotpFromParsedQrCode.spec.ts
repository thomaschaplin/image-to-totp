import { parseTotpUri } from "../parseTotpUri";
import { generateTotpFromParsedQrCode } from "../generateTotpFromParsedQrCode";
import * as validUris from "./fixtures/validUris.json";

describe("Generate totp from parsed qr code", () => {
  validUris.forEach(([uri]) => {
    it(`should generate a totp for totp uri: "${uri}"`, () => {
      const parsedTotpUri = parseTotpUri(uri.toString());
      const totp = generateTotpFromParsedQrCode(
        parsedTotpUri.label.issuer,
        parsedTotpUri.query.issuer,
        parsedTotpUri.query.secret,
      );
      expect(typeof totp).toBe("string");
      expect(totp).toHaveLength(6);
      expect(parseInt(totp)).not.toEqual(NaN);
    });
  });
});
