import jsqr from "jsqr";
import * as jimp from "jimp";
import { existsSync, readFileSync } from "fs";
// eslint-disable-next-line no-unused-vars
import { parseTotpUri, Totp } from "./parseTotpUri";

type Value = {
  result: string;
};

export const parseQrCode = (filePath: string): Promise<Totp> => {
  if (!existsSync(filePath)) {
    throw new Error(`File "${filePath}" does not exist.`);
  }

  return new Promise((resolve, reject) => {
    const data = readFileSync(filePath);
    jimp.read(data, (err, img) => {
      if (err) {
        reject(err);
      }
      const qrCodeImageArray = new Uint8ClampedArray(
        img.bitmap.data.buffer,
      );
      const code = jsqr(
        qrCodeImageArray,
        img.bitmap.width,
        img.bitmap.height,
      );
      const totp = parseTotpUri(code.data);
      resolve(totp);
    });
  });
};
