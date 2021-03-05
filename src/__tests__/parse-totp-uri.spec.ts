import { parseTotpUri } from "../parse-totp-uri";
import * as validUris from "./fixtures/valid-uris.json";
import * as invalidUris from "./fixtures/invalid-uris.json";
import { benchmark } from "kelonio";

describe("Parse totp uri", () => {
  validUris.forEach(([uri, expected]) => {
    it(`should parse totp uri: "${uri}"`, () => {
      expect(parseTotpUri(uri.toString())).toStrictEqual(expected);
    });
  });

  it("performance", async () => {
    const uri = validUris[0][0].toString();
    await benchmark.record(
      [
        "parse-totp-uri",
        "should parse totp uri",
      ],
      () => parseTotpUri(uri),
      { meanUnder: 0.5 },
    );
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
