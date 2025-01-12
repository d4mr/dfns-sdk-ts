# Biconomy Account Abstraction Gasless Transaction

Adapted from Biconomy's [gasless NFT mint example](https://docs.biconomy.io/tutorials/nodejs/gaslessmint). Demonstrates that Dfns managed keys can integrate with [ERC-4337](https://eips.ethereum.org/EIPS/eip-4337) Account Abstraction standards seamlessly.

## Prerequisites

To run the example, you must have an active `Application`. To create a new `Application`, go to `Dfns Dashboard` > `Settings` > `Org Settings` > `Applications` > `New Application`, and enter the following information

- Name, choose any name
- Type of User, `Client Side`
- Relying Party = `localhost`
- Origin = `http://localhost:3000`

After the `Application` is created, copy the `App ID`, e.g. `ap-39abb-5nrrm-9k59k0u3jup3vivo`.

You also need a `Service Account`. To create a new `Service Account`, first [generate a keypair](https://docs.dfns.co/dfns-docs/advanced-topics/authentication/credentials/generate-a-key-pair), then go to `Dfns Dashboard` > `Settings` > `Org Settings` > `Service Accounts` > `New Service Account`, and enter the following information,

- Name, choose any name
- Public Key, the public key from the step 'generate a keypair'

After the `Service Account` is created, make sure you copy the account's `authToken`. You won't be able to access the token after you navigate away from the confirmation page.

Go back to the service accounts listing, and the new `Service Account` should be listed there. copy the `Signing Key Cred ID`, e.g. `Y2ktM3E5Y2MtbXFoM20tODdiOW1jNDZqZ2gxYWJqbA`.

Copy `.env.example` to a new file `.env` and set the following values,

- `DFNS_API_URL` = `https://api.dfns.ninja`
- `DFNS_APP_ID` = the `App ID` from above
- `DFNS_APP_ORIGIN` = `http://localhost:3000`
- `DFNS_CRED_ID` = the `Signing Key Cred ID` from above
- `DFNS_PRIVATE_KEY` = the private key from the step 'generate a keypair', the newlines should not be a problem
- `DFNS_AUTH_TOKEN` = the `authToken` from above, the value should start with `eyJ0...`
- `POLYGON_WALLET_ID` = a Dfns Polygon [wallet](https://docs.dfns.co/dfns-docs/api-docs/beta-wallets-api-and-nfts/create-wallet)

## Explanation

In order to run the program, you would need a Dfns wallet. The example will create an smart contract account using the Dfns managed key. This newly created [account](https://mumbai.polygonscan.com/address/0x172a1047876608e8Ceb6ABe9FD6458376Bb5F0E1) is not funded and cannot pay for gas. Instead it uses the [Biconomy paymaster](https://docs.biconomy.io/Paymaster/description#sponsorship-paymaster) to sponsor a gasless transaction to mint a NFT token.

```shell
> ts-node main.ts

Smart account address: 0x172a1047876608e8Ceb6ABe9FD6458376Bb5F0E1
Transaction hash: 0x7d256aefb8c8942a05d372464bb4240b98040e4e6f80eddddafe609c5060fc0c
Minted NFT: https://testnets.opensea.io/0x172a1047876608e8Ceb6ABe9FD6458376Bb5F0E1
```

This is the Polygon Mumbai [transaction](https://mumbai.polygonscan.com/tx/0xb4a7076ceb11f304baf017bf92848739e93349ed9e08d4f8c170ee7d22e3826c) that minted the NFT.
