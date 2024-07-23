// utility fn
export const sortNumber = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }

  return arr
}

export const testNomor1 = (arr: number[]): number | null => {
  if (arr.length < 2) {
    return null
  }

  const sortedNumber = sortNumber(arr)
  return sortedNumber[1]
}

export const testNomor2 = (arr: string[]): string | boolean => {
  const recurringObject: Record<string, number> = {}

  for (let char of arr) {
    if (recurringObject[char]) {
      return char
    }

    recurringObject[char] = (recurringObject[char] ?? 0) + 1
  }

  return false
}

export const testNomor3 = (arr: number[], arg: number): boolean => {
  let left = 0
  let rigth = arr.length - 1
  let totalSum = 0

  while (left < rigth) {
    totalSum = arr[left] + arr[rigth]

    if (Math.abs(totalSum - arg) < 1e-10) {
      return true
    } else if (totalSum > arg) {
      rigth--
    } else {
      left++
    }
  }

  return false
}
