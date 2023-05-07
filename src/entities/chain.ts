export enum ChainId {
  MAINNET = 1,
  GÖRLI = 5,
  MATIC = 137,
  MUMBAI = 80001,
  BSCTESTNET = 97,
  BSCMAINNET = 56,
  AVAXTESTNET = 43113,
  AVAXMAINNET = 43114,
  FANTOM = 250,
  CRONOS = 25,
  ARBITRUM = 42161,
  BTTC = 199,
  VELAS = 106,
  AURORA = 1313161554,
  OASIS = 42262,
  OPTIMISM = 10,
  SOLANA = 101, //fake id
}

export function getChainType(chainId: ChainId) {
  if (chainId === ChainId.SOLANA) return ChainType.SOLANA
  return ChainType.EVM
}

export enum ChainType {
  EVM = 'EVM',
  SOLANA = 'SOLANA',
}
