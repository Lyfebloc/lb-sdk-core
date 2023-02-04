import JSBI from 'jsbi'
import BN from 'bn.js'

export const BNtoJSBI = (value: BN) => JSBI.BigInt(value)
export const JSBItoBN = (value: JSBI) => new BN(value.toString())
