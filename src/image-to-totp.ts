import { parseQrCode } from "./parse-qr-code";
import { generateTotpFromParsedQrCode } from "./parsed-qr-code-to-totp";

export const imageToTotp = async (
  filePath: string,
): Promise<string> => {
  const parsedQrCode = await parseQrCode(filePath);
  const totp = generateTotpFromParsedQrCode(
    parsedQrCode.label.issuer,
    parsedQrCode.query.issuer,
    parsedQrCode.query.secret,
  );
  return new Promise((resolve) => {
    resolve(totp)
  })
}
