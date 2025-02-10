export const sum = (...arg: number[]): number => {
  return arg.reduce((n: number, reduced: number) => reduced + n, 0)
}
