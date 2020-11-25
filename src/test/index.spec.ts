import { sum } from '../index'

describe('test', () => {
  it('should sum', () => {
    const param1: number = 1
    const param2: number = 1
    const suma: sum = new sum()

    expect(2).toEqual(suma.sum(param1, param2))
  })
})
