export const publishedYearMask = (value: string | undefined) => {
  if (!value) return ''

  return value.replace(/[\D]/g, '').replace(/(\d{4})(\d+?)/, '$1')
}
