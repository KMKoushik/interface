import { FACTORY_ADDRESS as V2_FACTORY_ADDRESS } from '@uniswap/v2-sdk'

import { constructSameAddressMap } from '../utils/constructSameAddressMap'
import { SupportedChainId } from './chains'

type AddressMap = { [chainId: number]: string }

export const UNI_ADDRESS: AddressMap = constructSameAddressMap('0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984')
export const MULTICALL_ADDRESS: AddressMap = {
  ...constructSameAddressMap('0x1F98415757620B543A52E61c46B32eB19261F984', [SupportedChainId.OPTIMISTIC_KOVAN]),
  [SupportedChainId.OPTIMISM]: '0x90f872b3d8f33f305e0250db6A2761B354f7710A',
  [SupportedChainId.ARBITRUM_ONE]: '0xadF885960B47eA2CD9B55E6DAc6B42b7Cb2806dB',
  [SupportedChainId.ARBITRUM_RINKEBY]: '0xa501c031958F579dB7676fF1CE78AD305794d579',
}
export const V2_FACTORY_ADDRESSES: AddressMap = constructSameAddressMap(V2_FACTORY_ADDRESS)
export const V2_ROUTER_ADDRESS: AddressMap = constructSameAddressMap('0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D')

/**
 * The oldest V0 governance address
 */
export const GOVERNANCE_ALPHA_V0_ADDRESSES: AddressMap = constructSameAddressMap(
  '0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F'
)
/**
 * The older V1 governance address
 */
export const GOVERNANCE_ALPHA_V1_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0xC4e172459f1E7939D522503B81AFAaC1014CE6F6',
}
/**
 * The latest governor bravo that is currently admin of timelock
 */
export const GOVERNANCE_BRAVO_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0x408ED6354d4973f66138C91495F2f2FCbd8724C3',
}

export const TIMELOCK_ADDRESS: AddressMap = constructSameAddressMap('0x1a9C8182C09F50C8318d769245beA52c32BE35BC')

export const MERKLE_DISTRIBUTOR_ADDRESS: AddressMap = {
  [SupportedChainId.MAINNET]: '0x090D4613473dEE047c3f2706764f49E0821D256e',
}
export const ARGENT_WALLET_DETECTOR_ADDRESS: AddressMap = {
  [SupportedChainId.MAINNET]: '0xeca4B0bDBf7c55E9b7925919d03CbF8Dc82537E8',
}

export const V3_CORE_FACTORY_ADDRESSES: AddressMap = {
  ...constructSameAddressMap('0xa9C2f675FF8290494675dF5CFc2733319EaeeFDc', [SupportedChainId.ROPSTEN]),
  [SupportedChainId.GOERLI]: '0x55c0cef3cc64f511c34b18c720bcf38fec6c6ffa',
}
export const QUOTER_ADDRESSES: AddressMap = {
  ...constructSameAddressMap('0x267aEB76BEb6DC7Ab0D88FeEaC8A948e237e2d69', [SupportedChainId.ROPSTEN]),
  [SupportedChainId.GOERLI]: '0x759442726c06f7938cd2cb63ac9ae373dc1decf6',
}
export const NONFUNGIBLE_POSITION_MANAGER_ADDRESSES: AddressMap = {
  ...constructSameAddressMap('0x8c7C1F786dA4DEe7d4bB49697A9B0C0c8Fb328e0', [SupportedChainId.ROPSTEN]),
  [SupportedChainId.GOERLI]: '0x24a66308bab3bebc2821480ada395bf1c4ff8bf2',
}
export const ENS_REGISTRAR_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  [SupportedChainId.ROPSTEN]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  [SupportedChainId.GOERLI]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  [SupportedChainId.RINKEBY]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
}
export const SOCKS_CONTROLLER_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0x65770b5283117639760beA3F867b69b3697a91dd',
}
export const SWAP_ROUTER_ADDRESSES: AddressMap = {
  ...constructSameAddressMap('0x528a19A3e88861E7298C86fE5490B8Ec007a4204', [SupportedChainId.ROPSTEN]),
  [SupportedChainId.GOERLI]: '0x833a158da5cebc44901211427e9df936023ec0d3',
}
export const V3_MIGRATOR_ADDRESSES: AddressMap = constructSameAddressMap('0xA5644E29708357803b5A882D272c41cC0dF92B34', [
  SupportedChainId.ARBITRUM_ONE,
  SupportedChainId.ARBITRUM_RINKEBY,
])
