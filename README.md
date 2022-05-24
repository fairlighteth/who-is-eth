# who-is-eth
Who is eth? Run a batch check on a list of Ethereum addresses to check if it's a contract or an EOA (externally owned account).

## Setup
Add your provider url (e.g. Infura) to line 1 (PROVIDER_URL) of file `check.js` 

## Run with 1 argument being the input file (txt)
`yarn start {your-txt-input-file-path}.txt` 

## Output
Outputs 3 files to ./output/

## Todo
- Detect if an address is a smart contract + segment by chain (Mainnet, Gnosis Chain, etc.)
