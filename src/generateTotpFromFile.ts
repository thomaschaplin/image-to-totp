import { parseQrCode } from "./parseQrCode";
import { generateTotpFromParsedQrCode } from "./generateTotpFromParsedQrCode";

export const generateTotpFromFile = async (
  filePath: string,
): Promise<string> => {
  const parsedQrCode = await parseQrCode(filePath);
  const totp = generateTotpFromParsedQrCode(
    parsedQrCode.label.issuer,
    parsedQrCode.query.issuer,
    parsedQrCode.query.secret,
  );
  return totp;
};
