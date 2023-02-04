import JSBI from 'jsbi'
import invariant from 'tiny-invariant'
import { MaxUint256 } from '../constants'
import { ChainId, ChainType, getChainType } from '../entities/chain'

const ONE = JSBI.BigInt(1)
const ZERO = JSBI.BigInt(0)

enum RustType {
  u64 = 'u64',
  U256 = 'U256',
}

const RUST_TYPE_MAXIMA = {
  [RustType.u64]: JSBI.subtract(JSBI.exponentiate(JSBI.BigInt(2), JSBI.BigInt(64)), ONE),
  [RustType.U256]: JSBI.subtract(JSBI.exponentiate(JSBI.BigInt(2), JSBI.BigInt(256)), ONE),
}

function validateRustTypeValue(value: JSBI, rustType: RustType): void {
  invariant(JSBI.greaterThanOrEqual(value, ZERO), `${value} is not a ${rustType}.`)
  invariant(JSBI.lessThanOrEqual(value, RUST_TYPE_MAXIMA[rustType]), `${value} is not a ${rustType}.`)
}

export default function validateValue(chainId: ChainId, value: JSBI) {
  const chainType = getChainType(chainId)
  if (chainType === ChainType.SOLANA) validateRustTypeValue(value, RustType.u64)
  if (chainType === ChainType.EVM) invariant(JSBI.lessThanOrEqual(value, MaxUint256), 'AMOUNT')
}
