import { imageToTotp } from "@thomaschaplin/image-to-totp";
import * as path from "path";

const test = async (account: string) => {
  const projectBaseFolder = path.join(__dirname, "../");
  const imagesFolder = path.join(projectBaseFolder, "src/images");
  const totp = await imageToTotp(`${imagesFolder}/${account}.png`);
  console.log(`Account: ${account} - ${totp}`);
};

test("example1");
test("example2");
