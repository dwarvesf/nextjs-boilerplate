export function formatNumber(number: number) {
  return Intl.NumberFormat().format(number)
}
