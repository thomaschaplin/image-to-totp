# authy-clone

Authy clone written in [TypeScript](https://www.typescriptlang.org/)

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
* Run the tests `npm test`
* Run the application `npm start`

#### Example output:

```
Account: example1 - 488169
Account: example2 - 667679
```

#### Example output of tests:

```
 PASS  build/__tests__/parseTotpUri.spec.js
  Parse totp uri
    ✓ should parse totp uri: "otpauth://totp/Example:alice@google.com?secret=JBSWY3DPEHPK3PXP&issuer=Example" (3 ms)
    ✓ should parse totp uri: "otpauth://totp/ACME%20Co:john.doe@email.com?secret=HXDMVJECJJWSRB3HWIZR4IFUGFTMXBOZ&issuer=ACME%20Co&algorithm=SHA1&digits=6&period=30" (1 ms)
    ✓ should parse totp uri: "otpauth://TYPE/LABEL?PARAMETERS" (1 ms)
    ✓ should parse totp uri: "otpauth://HTOP/Account-Name?secret=shhhh"
    ✓ should parse totp uri: "otpauth://topt/Big%20Corporation%3A%20alice%40bigco.com?secret=shhhh"
    ✓ should parse totp uri: "otpauth://topt/Big%20Corporation%3A%20alice%40bigco.com" (1 ms)
    ✓ should not parse totp uri: "otpauth://topt/"
    ✓ should not parse totp uri: "short"

 PASS  build/__tests__/generateTotpFromParsedQrCode.spec.js
  Generate totp from parsed qr code
    ✓ should generate a totp for totp uri: "otpauth://totp/Example:alice@google.com?secret=JBSWY3DPEHPK3PXP&issuer=Example" (4 ms)
    ✓ should generate a totp for totp uri: "otpauth://totp/ACME%20Co:john.doe@email.com?secret=HXDMVJECJJWSRB3HWIZR4IFUGFTMXBOZ&issuer=ACME%20Co&algorithm=SHA1&digits=6&period=30" (1 ms)
    ✓ should generate a totp for totp uri: "otpauth://TYPE/LABEL?PARAMETERS" (1 ms)
    ✓ should generate a totp for totp uri: "otpauth://HTOP/Account-Name?secret=shhhh"
    ✓ should generate a totp for totp uri: "otpauth://topt/Big%20Corporation%3A%20alice%40bigco.com?secret=shhhh" (1 ms)
    ✓ should generate a totp for totp uri: "otpauth://topt/Big%20Corporation%3A%20alice%40bigco.com" (1 ms)

 PASS  build/__tests__/parseQrCode.spec.js
  Parse QR code
    ✓ should parse valid totp qr code (77 ms)
    ✓ should throw an error when parsing a totp qr code which does not exist

 PASS  build/__tests__/generateTotpFromFile.spec.js
  Generate totp from file
    ✓ should generate a totp from a image file (83 ms)

Test Suites: 4 passed, 4 total
Tests:       17 passed, 17 total
Snapshots:   0 total
Time:        2.392 s
```
