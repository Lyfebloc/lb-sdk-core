import { getAddress } from '@ethersproject/address'
import { PublicKey } from '@solana/web3.js'
import { ChainId, ChainType, getChainType } from '../entities/chain'

const isValidSolanaAddress = (address: string): boolean => {
  try {
    if (!address) return false
    const pub = new PublicKey(address)
    if (PublicKey.isOnCurve(pub)) return true
    // .isOnCurve false on some valid address
    // e.g: DAI https://solscan.io/address/EjmyN6qEC1Tf1JxiG1ae7UTJhUxSwk1TCWNWqxWV4J6o
    return true
  } catch (e) {
    return false
  }
}

/**
 * Validates an address and returns the parsed (checksummed) version of that address
 * @param address the unchecksummed hex address
 */
export function validateAndParseAddress(address: string, chainId: ChainId): string {
  try {
    const chainType = getChainType(chainId)
    if (chainType === ChainType.SOLANA) {
      if (isValidSolanaAddress(address)) return address
      throw new Error(`${address} is not a valid address.`)
    }
    return getAddress(address)
  } catch (error) {
    throw new Error(`${address} is not a valid address.`)
  }
}
