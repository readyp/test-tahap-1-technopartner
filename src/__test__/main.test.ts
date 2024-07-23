import { describe, test, expect } from 'vitest'
import { sortNumber, testNomor1, testNomor2, testNomor3 } from '../main'

describe('Main Suite Test', () => {
  test('Sanity Check', () => {
    expect(1 + 1).toBe(2)
  })

  test('fn sortNumber should return correct value', () => {
    expect(sortNumber([5, 2, 9, 1, 5, 6])).toEqual([9, 6, 5, 5, 2, 1])
  })

  test('fn testNomor1 should return correct value', () => {
    expect(testNomor1([1, 12, 31, 5, 3, 23, 4, 5, 22])).toBe(23)
    expect(testNomor1([-0.5, -0.76, 0.45, -0.2, 4.5, 3.5])).toBe(3.5)
    expect(testNomor1([98, 12, 42, 13, 13, 56, 100, 99])).toBe(99)
  })

  test('fn testNomor2 should return correct value', () => {
    expect(testNomor2(['A', 'B', 'C', 'B', 'A'])).toBe('B')
    expect(testNomor2(['A', 'B', 'C', 'D', 'E', 'C', 'F', 'Z'])).toBe('C')
    expect(testNomor2(['A', 'B', 'C', 'X', 'Y', 'Z'])).toBeFalsy()
  })

  test('fn testNomor3 should return correct value', () => {
    expect(testNomor3([1, 2, 4, 4, 5, 6, 7, 7, 8, 8], 12)).toBeTruthy()
    expect(testNomor3([1, 2, 4, 4, 5, 8, 9, 9, 12, 19], 4)).toBeFalsy()
    expect(testNomor3([-9.3, -0.5, 0.25, 0.3, 1.34], -7.96)).toBeTruthy()
  })
})
