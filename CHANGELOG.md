# Changelog

## 0.3.1 (2024-02-08)

- Added SDK integration with Algorand, see `@dfns/lib-algorand`

## 0.3.0 (2024-02-01)

- Migrated `DfnsApiClient.permissions` to permissions v2 [breaking]
- Added React Native Passkey signer, see `@dfns/sdk-react-native`
- Added browser compatible key signer, `BrowserKeySigner`

## 0.2.5 (2024-01-24)

- Reverted `DfnsApiClient.permissions` to old code generator
- Added `DfnsApiClient.permissionsV2` to support permissions v2
- Bumped `viem` from `1.19.11` to `1.21.4`

## 0.2.4 (2024-01-19)

- Renamed BlockchainNetwork `Ripple` to `XrpLedger`
- Migrated `DfnsApiClient.permissions` to a new code generator [breaking]

## 0.2.3 (2024-01-16)

- Removed `mediation: required` from WebAuthn signer

## 0.2.2 (2024-01-04)

- Added AWS KMS signer, see `@dfns/sdk-awskmssigner`

## 0.2.1 (2023-12-22)

- Added `DfnsApiClient.policies` support
- Added SDK integration with BitcoinJS, see `@dfns/lib-bitcoinjs`
- Added SDK integration with Tezos Taquito, see `@dfns/lib-taquito`
- Added SDK integration with XRP Ledger, see `@dfns/lib-xrpl`

## 0.2.0 (2023-12-06)

- Added wallets signature support for ECDSA Stark curve with `KeyEDCSAStark`
- Migrated `DfnsApiClient.wallets` and `DfnsApiClient.signers` to a new code generator [breaking]
- Migrated all third-party library integrations to synchronous signing flow and deprecated polling
- Updated all examples and READMEs to align with the core SDK changes

## 0.1.2 (2023-11-29)

- Added `DfnsApiClient.webhooks` support
- Added `@dfns/lib-viem` and an example of alchemy gasless integration

## 0.1.1 (2023-11-14)

- Added `delegateWallet` to the wallets API
- Added blockchain support for `Base`, `BaseGoerli` and `ArbitrumSepolia`
- Added a Biconomy account abstraction example

## 0.1.0 (2023-11-03)

- Released stable version

## 0.1.0-beta.8 (2023-11-03)

- Added key export support and example (#38)
- Added `signVersionedTransaction` support to `lib-solana` (#57)
- Added new signature and broadcast type `Transaction` to wallets API (#56)
- Added new nextjs delegated recovery flow example (#55)
- Added user logout method to BaseAuthApi (#41)
- Various dependabot module bumps

## 0.1.0-beta.7 (2023-10-23)

- Added allowing custom base auth url (https://github.com/dfnsext/typescript-sdk/pull/37)

## 0.1.0-beta.6 (2023-10-17)

- Added wallet import feature and example (https://github.com/dfnsext/typescript-sdk/pull/34)
- Added SDK integration with TronWeb, see `@dfns/lib-tron` (https://github.com/dfnsext/typescript-sdk/pull/30)

## 0.1.0-beta.5 (2023-10-03)

- Fixed `createUserRecovery` wrong input type ([PR-33](https://github.com/dfnsext/typescript-sdk/pull/33))

## 0.1.0-beta.4 (2023-09-25)

- Added `createDelegatedUserRecovery` for delegated user recovery flow
- Added `Executing` to TransferStatus, TransactionStatus and SignatureStatus

## 0.1.0-beta.3 (2023-08-15)

- Added `PaymentAmountOutgoingVelocity` to policy rule configurations
- Fixed WebAuthn not detecting multiple credentials

## 0.1.0-beta.2 (2023-08-09)

- Added `TransferLimit` to policy rule configurations
- Added `network` to `SignatureRequest` in the wallets API

## 0.1.0-beta.1 (2023-08-02)

- Added `restartDelegatedUserRegistration` for resuming an interrupted delegated registration flow
- Added new blockchain networks (Arbitrum, Avalanche, Fantom and Optimism) to wallets API
- Added `KeyEDCSA` and `KeyEdDSA` to wallets API
- Added `AlwaysActivated` policy for wallets tranfer asset, broadcast transaction and generate signature
- Renamed package `@dfns/ethersjs-wallet` to `@dfns/lib-ethersjs6` [breaking]
- Added SDK integration with ethers.js v5, see `@dfns/lib-ethersjs5`
- Added SDK integration with Solana web3.js, see `@dfns/lib-solana`
- Added SDK integration with Vechain Connex, see `@dfns/lib-vechain`
- Fixed `Buffer.toString('base64url')` not supported by older runtimes
- Fixed `DfnsDelegatedApiClient` missing auth client

## 0.1.0-alpha.10 (2023-07-20)

- Fixed Android WebAuthn bug where userHandle is empty
- Fixed asymmetric key signer for EdDSA keys

## 0.1.0-alpha.9 (2023-07-13)

- Renamed `BlockchainNetwork` names for the wallets API [breaking]
- Deprecated `IdentityKind` enum for the permissions API
- Added EVM broadcast transaction kinds `Eip1559` and `EvmLegacy`
- Added network specific encoding of signature to signed signature requests
- Expanded README.md for all the examples with clearer directions and explanations

## 0.1.0-alpha.8 (2023-06-28)

- Added @dfns/ethersjs-wallet package
- Added a uniswap example using Dfns ethers.js wallet
- Added typedoc generation

## 0.1.0-alpha.7 (2023-06-22)

- Removed the blockchain fees endpoint

## 0.1.0-alpha.6 (2023-06-21)

- Exposed Blockchains client methods
- Fixed input type of public key create transaction method

## 0.1.0-alpha.5 (2023-06-21)

- Removed some deprecated endpoints

## 0.1.0-alpha.4 (2023-06-21)

- Fixed return types of some Policies domain methods

## 0.1.0-alpha.3 (2023-06-20)

- Removed some unusable api endpoints

## 0.1.0-alpha.2 (2023-06-20)

- Renamed to `CredentialSigner` and `CredentialStore` interfaces
- Added `auth-delegated` and `nextjs-delegated` examples
