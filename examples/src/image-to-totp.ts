import { imageToTotp } from "@thomaschaplin/image-to-totp";
import * as path from "path";

const example = async (account: string) => {
  const projectBaseFolder = path.join(__dirname, "../");
  const imagesFolder = path.join(projectBaseFolder, "src/images");
  const totp = await imageToTotp(`${imagesFolder}/${account}.png`);
  console.log(`Account: ${account} - ${totp}`);
};

example("example1");
example("example2");
