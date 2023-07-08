export function interpolateString(
  sentence: string,
  placeholder: string,
  value: string
) {
  return sentence.replace(placeholder, value);
}
