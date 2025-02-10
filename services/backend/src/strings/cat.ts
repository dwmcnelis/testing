export const cat = (...arg: string[]): string => {
  return arg.reverse().reduce((s: string, reduced: string) => reduced + s, '')
}
