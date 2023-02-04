import { BaseCurrency } from './baseCurrency'
import { Currency } from './currency'
import { Token } from './token'
import { WETH } from './weth'

/**
 * Represents the native currency of the chain on which it resides, e.g.
 */
export class NativeCurrency extends BaseCurrency {
  public readonly isNative: true = true
  public readonly isToken: false = false

  public constructor(chainId: number, decimals: number, symbol?: string, name?: string) {
    super(chainId, decimals, symbol, name)
  }

  get wrapped(): Token {
    return WETH[this.chainId]
  }

  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId
  }
}
