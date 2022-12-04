export function formatPhoneNumber(value: string, code: string) {
  if (!value) {
    return value;
  }

  const phoneNumber = value.replace(/[^\d]/g, "");
  const phoneNumberLength = phoneNumber.length;
  const start = code.length;

  if (phoneNumberLength < 4) {
    return code + ' ' +phoneNumber;
  }

    if (phoneNumberLength < 7) {
      return `${phoneNumber.slice(0, start)} (${phoneNumber.slice(start, start+3)}) ${phoneNumber.slice(start+3)}`;
    }

  return `${phoneNumber.slice(0, start)} (${phoneNumber.slice(start, start+3)}) ${phoneNumber.slice(
    start+3,
    start+6
  )}-${phoneNumber.slice(start+6, start+10)}`;
}
