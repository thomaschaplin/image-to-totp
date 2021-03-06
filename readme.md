<img src="assets/logo.png" alt="logo" width="213" height="213" />

# image-to-totp

![](https://img.shields.io/npm/v/@thomaschaplin/image-to-totp?style=plastic)
![](https://img.shields.io/npm/dw/@thomaschaplin/image-to-totp?style=plastic)
![](https://img.shields.io/bundlephobia/min/@thomaschaplin/image-to-totp?style=plastic)
![](https://img.shields.io/github/license/thomaschaplin/image-to-totp?style=plastic)

image-to-totp is a library to generate totp codes from a QR code image with a single API.

## Usage

```
npm install @thomaschaplin/image-to-totp
```

### Example Usage

Find full example [here](https://github.com/thomaschaplin/image-to-totp/blob/master/examples/src/image-to-totp.ts) but see the below code snippet

<img src="./src/__tests__/fixtures/2fa.png" alt="example-qr-code" width="100" height="100" />

```
src/
  images/
    example1.png
    example2.png
```

```ts
import { imageToTotp } from "@thomaschaplin/image-to-totp";
import * as path from "path";

const example = async (account: string) => {
  const projectBaseFolder = path.join(__dirname, "../");
  const imagesFolder = path.join(projectBaseFolder, "src/images");
  const totp = await imageToTotp(`${imagesFolder}/${account}.png`);
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
- Run the tests with coverage `npm run test:coverage`
- Run the tests with mutation testing `npm run test:mutation`

---

Image by
<a href="https://pixabay.com/users/mohamed_hassan-5229782/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5661868">mohamed
Hassan</a> from
<a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5661868">Pixabay</a>
