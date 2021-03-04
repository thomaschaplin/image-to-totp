import { generateTotpFromFile } from "../src/generateTotpFromFile";
import * as path from "path";

const test = async (account: string) => {
  const projectBaseFolder = path.join(__dirname, "../");
  const imagesFolder = path.join(projectBaseFolder, "examples/images");
  const totp = await generateTotpFromFile(`${imagesFolder}/${account}.png`);
  console.log(`Account: ${account} - ${totp}`);
};

test("example1");
test("example2");
