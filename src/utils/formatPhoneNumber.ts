export function formatPhoneNumber(value: string, code: string) {
  if (!value) {
    return value;
  }

  const phoneNumber = value.replace(/[^\d]/g, "");
  const phoneNumberLength = phoneNumber.length;

  if (phoneNumberLength < 4) {
    return phoneNumber;
  }

  if (phoneNumberLength < 7) {
    return `${code}(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }

  return `${code}(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6
  )}-${phoneNumber.slice(6, 10)}`;
}
