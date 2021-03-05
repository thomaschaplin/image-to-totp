<img src="assets/logo.png" alt="logo" width="213" height="213" />

# image-to-totp

image-to-totp is a library to generate totp codes from a QR code image with a single API.

## Usage

```
npm install @thomaschaplin/image-to-totp
```

### Example Usage

```ts
import { generateTotpFromFile } from "@thomaschaplin/image-to-totp";
import * as path from "path";

const example = async (account: string) => {
  const projectBaseFolder = path.join(__dirname, "../");
  const imagesFolder = path.join(projectBaseFolder, "examples/images");
  const totp = await generateTotpFromFile(`${imagesFolder}/${account}.png`);
  console.log(`Account: ${account} - ${totp}`);
};

example("example1"); // Account: example1 - 034624
example("example2"); // Account: example2 - 084841
```

## Description

This repository allows you to take a QR code image and turn it into a TOTP code.

This project uses:

- [jimp](https://github.com/oliver-moran/jimp)
- [jsqr](https://github.com/cozmo/jsQR)
- [otpauth](https://github.com/hectorm/otpauth)

## Setup

Make sure you have [Node.js](https://nodejs.org/en/) installed on your machine

### Development

#### Installation

- Clone this repository
  `git clone git@github.com:thomaschaplin/image-to-totp.git`
- Change directory `cd image-to-totp`
- Install the dependencies `npm install`
- Transpile the code `npm run build` or `npm run watch`

#### Tests

- Run the tests `npm test`
- Run the tests with coverage `npm test:coverage`

---

Image by
<a href="https://pixabay.com/users/mohamed_hassan-5229782/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5661868">mohamed
Hassan</a> from
<a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5661868">Pixabay</a>
