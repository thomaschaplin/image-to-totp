import OTPAuth from 'otpauth'

export const generateTotpFromParsedQrCode = (
    issuer: string,
    label: string,
    secret: string
): string => {
    const totp = new OTPAuth.TOTP({
        issuer,
        label,
        algorithm: 'SHA1',
        digits: 6,
        period: 30,
        secret,
    })
    return totp.generate()
}
