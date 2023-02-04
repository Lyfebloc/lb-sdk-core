import { Ether } from './ether'

describe('Ether', () => {
  it('static constructor uses cache', () => {
    expect(Ether.onChain(1) === Ether.onChain(1)).toEqual(true)
  })
  it('caches once per chain ID', () => {
    expect(Ether.onChain(1) !== Ether.onChain(10)).toEqual(true)
  })
  it('#equals returns false for diff chains', () => {
    expect(Ether.onChain(1).equals(Ether.onChain(10))).toEqual(false)
  })
  it('#equals returns true for same chains', () => {
    expect(Ether.onChain(1).equals(Ether.onChain(1))).toEqual(true)
  })
})
