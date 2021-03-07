type Label = {
    issuer: string
    account: string
}

type Query = {
    secret: string
    issuer: string
}

export type Totp = {
    fullUri: string
    type: string
    label: Label
    query: Query
}

const getType = (uri: string): string => {
    const regex: RegExp = /.+?:\/\/(.+?)\//
    const regexResult = uri.match(regex)
    if (!regexResult || !regexResult[1]) {
        return ""
    } else {
        return regexResult[1]
    }
}

const getFullLabel = (uri: string): string => {
    const regex: RegExp = /.+?:\/\/.+?\/(.+?)(\?.+)?$/
    const regexResult = uri.match(regex)
    if (!regexResult || !regexResult[1]) {
        return ""
    } else {
        return regexResult[1]
    }
}

const getQueryParams = (uri: string): string => {
    const regex: RegExp = /.+?:\/\/.+?\/.+?\?(.*)/
    const regexResult = uri.match(regex)
    if (!regexResult || !regexResult[1]) {
        return ""
    } else {
        return regexResult[1]
    }
}

const checkUriLength = (uri: string) => {
    if (uri.length < 7) {
        throw new Error(
            `Cannot parse the provided uri "${uri}". The provided uri does not meet the minimum length criteria. We received a length of "${uri.length}" but were expecting a length greater than "7".`
        )
    }
}

const decodeLabel = (label: string): string => decodeURIComponent(label)

const getLabelSections = (label: string): string[] => label.split(/: ?/)

const generateLabel = (labelSections: string[], decodedLabel: string): Label =>
    labelSections && labelSections.length === 2
        ? {issuer: labelSections[0], account: labelSections[1]}
        : {issuer: "", account: decodedLabel}

const generateQueryStrings = (queryParams: string): URLSearchParams =>
    new URLSearchParams(queryParams)

const generateQuery = (queryStrings: any): Query =>
    [...queryStrings].reduce((acc, [key, value]) => {
        acc[key] = value
        return acc
    }, {})

export const parseTotpUri = (uri: string): Totp => {
    checkUriLength(uri)

    const type = getType(uri)
    const fullLabel = getFullLabel(uri)
    const queryParams = getQueryParams(uri)

    const decodedLabel = decodeLabel(fullLabel)
    const labelSections = getLabelSections(decodedLabel)

    const label = generateLabel(labelSections, decodedLabel)
    const queryStrings = generateQueryStrings(queryParams)

    const query = generateQuery(queryStrings)

    return {
        fullUri: uri,
        type: type.toLowerCase(),
        label,
        query,
    }
}
