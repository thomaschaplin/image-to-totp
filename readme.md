<img src="assets/logo.png" alt="logo" width="213" height="213" />

# authy-clone

Authy clone written in [TypeScript](https://www.typescriptlang.org/ =320x320)

## Description

This repository is a clone of the popular authy application used to generate 2FA codes.

This project uses:

* jest
* jimp
* jsqr
* otpauth

## Setup

Make sure you have [Node.js](https://nodejs.org/en/) installed on your machine

## Instructions

* Clone this repository `git clone git@github.com:thomaschaplin/authy-clone.git`
* Change directory `cd authy-clone`
* Install the dependencies `npm install`
* Transpile the code `npm run build` or `npm run watch`
* Run the tests `npm test` or `npm test:coverage`
* Run the application `npm start`

#### Example output:

```
Account: example1 - 488169
Account: example2 - 667679
```

#### Example output of tests:

```
 PASS  build/__tests__/generateTotpFromParsedQrCode.spec.js
  Generate totp from parsed qr code
    ✓ should generate a totp for totp uri: "otpauth://totp/Example:alice@google.com?secret=JBSWY3DPEHPK3PXP&issuer=Example" (4 ms)
    ✓ should generate a totp for totp uri: "otpauth://totp/ACME%20Co:john.doe@email.com?secret=HXDMVJECJJWSRB3HWIZR4IFUGFTMXBOZ&issuer=ACME%20Co&algorithm=SHA1&digits=6&period=30" (1 ms)
    ✓ should generate a totp for totp uri: "otpauth://TYPE/LABEL?PARAMETERS"
    ✓ should generate a totp for totp uri: "otpauth://HTOP/Account-Name?secret=shhhh" (1 ms)
    ✓ should generate a totp for totp uri: "otpauth://topt/Big%20Corporation%3A%20alice%40bigco.com?secret=shhhh"
    ✓ should generate a totp for totp uri: "otpauth://topt/Big%20Corporation%3A%20alice%40bigco.com" (1 ms)

 PASS  build/__tests__/parseTotpUri.spec.js
  Parse totp uri
    ✓ should parse totp uri: "otpauth://totp/Example:alice@google.com?secret=JBSWY3DPEHPK3PXP&issuer=Example" (4 ms)
    ✓ should parse totp uri: "otpauth://totp/ACME%20Co:john.doe@email.com?secret=HXDMVJECJJWSRB3HWIZR4IFUGFTMXBOZ&issuer=ACME%20Co&algorithm=SHA1&digits=6&period=30" (1 ms)
    ✓ should parse totp uri: "otpauth://TYPE/LABEL?PARAMETERS"
    ✓ should parse totp uri: "otpauth://HTOP/Account-Name?secret=shhhh" (1 ms)
    ✓ should parse totp uri: "otpauth://topt/Big%20Corporation%3A%20alice%40bigco.com?secret=shhhh"
    ✓ should parse totp uri: "otpauth://topt/Big%20Corporation%3A%20alice%40bigco.com" (1 ms)
    ✓ should not parse totp uri: "otpauth://topt/"
    ✓ should not parse totp uri: "short"

 PASS  build/__tests__/parseQrCode.spec.js
  Parse QR code
    ✓ should parse valid totp qr code (95 ms)
    ✓ should throw an error when parsing a totp qr code which does not exist

 PASS  build/__tests__/generateTotpFromFile.spec.js
  Generate totp from file
    ✓ should generate a totp from a image file (93 ms)

--------------------|---------|----------|---------|---------|-------------------
File                | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
--------------------|---------|----------|---------|---------|-------------------
All files           |   96.55 |       92 |     100 |   96.43 |
 ...TotpFromFile.ts |     100 |      100 |     100 |     100 |
 ...ParsedQrCode.ts |     100 |      100 |     100 |     100 |
 parseQrCode.ts     |   91.67 |       75 |     100 |   91.67 | 20
 parseTotpUri.ts    |   97.56 |    95.24 |     100 |   97.44 | 32
--------------------|---------|----------|---------|---------|-------------------
Test Suites: 4 passed, 4 total
Tests:       17 passed, 17 total
Snapshots:   0 total
Time:        1.986 s, estimated 2 s
```

Image by <a href="https://pixabay.com/users/mohamed_hassan-5229782/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5661868">mohamed Hassan</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5661868">Pixabay</a>
