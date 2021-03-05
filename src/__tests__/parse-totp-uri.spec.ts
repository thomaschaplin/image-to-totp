import { parseTotpUri } from "../parse-totp-uri";
import * as validUris from "./fixtures/valid-uris.json";
import * as invalidUris from "./fixtures/invalid-uris.json";

describe("Parse totp uri", () => {
  validUris.forEach(([uri, expected]) => {
    it(`should parse totp uri: "${uri}"`, () => {
      expect(parseTotpUri(uri.toString())).toStrictEqual(expected);
    });
  });

  invalidUris.forEach(([uri, expected]) => {
    it(`should not parse totp uri: "${uri}"`, () => {
      try {
        parseTotpUri(uri.toString());
      } catch (error) {
        expect(error.message).toStrictEqual(expected);
      }
    });
  });
});
