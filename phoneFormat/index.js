/**
 * Number Pattern.
 * Creating the regex pattern.
 *
 * @param {array} pattern - Pattern passed from the config.
 */
function numberPattern(pattern) {
  const newPattern = pattern.map(value => `(\\d{${value}})`)

  return new RegExp(newPattern.join(''))
}

/**
 * Pattern Replacement.
 * Getting the replacement pattern keys.
 *
 * @param {array} pattern - Pattern passed from the config.
 */
function patternReplacement(pattern) {
  const replacement = pattern.map((value, key) => `$${key + 1}`)

  return replacement.join(' ')
}

/**
 * Code Length.
 * Getting the characters from the beginning of phone number
 * on the basis of supplied length.
 *
 * @param {string} phone - Phone number from the form.
 * @param {array} code - Different numbers to match.
 */
function codeLength(phone, code) {
  return phone.substr(0, code[0].length)
}

/**
 * Phone Format.
 * Changing the phone format with the supplied patterns.
 *
 * @param {string} phone - Phone number from the form.
 * @param {object} phoneConfig - Phone config with different patterns and codes.
 */
export default function phoneFormat(phone, phoneConfig = {}) {
  const {
    domCodes,
    intlCodes,
    domPattern,
    intlPattern,
    mobileCode,
    mobilePattern,
    intlMobileCode,
    intlMobilePattern,
  } = phoneConfig
  // Setting the default format.
  let formattedPhone = phone.replace(/(\d{3})(\d{4})(\d{6})/, '$1 $2 $3')

  // Format for mobile numbers.
  if (mobileCode && codeLength(phone, mobileCode).includes(mobileCode)) {
    formattedPhone = phone.replace(numberPattern(mobilePattern), patternReplacement(mobilePattern))
  }

  // Format for landline numbers.
  if (domCodes && domCodes.some(i => codeLength(phone, domCodes).includes(i))) {
    formattedPhone = phone.replace(numberPattern(domPattern), patternReplacement(domPattern))
  }

  // Format for landline numbers with international code.
  if (intlCodes && intlCodes.some(i => codeLength(phone, intlCodes).includes(i))) {
    formattedPhone = phone.replace(numberPattern(intlPattern), patternReplacement(intlPattern))
  }

  // Format for mobile numbers with international code.
  if (intlMobileCode && codeLength(phone, intlMobileCode).includes(intlMobileCode)) {
    formattedPhone = phone.replace(numberPattern(intlMobilePattern), patternReplacement(intlMobilePattern))
  }

  return formattedPhone
}
