# who-is-eth
Who is eth? Run a batch check on a list of Ethereum addresses to check if it's a contract or an EOA (externally owned account).
Only for Ethereum mainnet.

## Setup
Add your provider url (e.g. Infura) to line 1 (PROVIDER_URL) of file `check.js` 

## Run with 1 argument being the input file (txt)
`yarn start {your-txt-input-file-path}.txt` 

## In put file
The input file is passed as an argument in the command above. The content of the input.txt file should be 1 address per line. For example:
```
0x0000000000000000000000000000000000000000
0x0000000000000000000000000000000000000000
0x0000000000000000000000000000000000000000
0x0000000000000000000000000000000000000000
0x0000000000000000000000000000000000000000
```

## Output
Outputs 3 files to ./output/:
- `/output/smartcontracts.txt` => All smart contract addresses
- `/output/EOA.txt` => All EOA accounts (externally owned accounts AKA regular non-smart contract accounts)
- `/output/ERRORS.txt` => All addresses that errored out + error message. Usually non-checksummed accounts, .ETH addresses or otherwise

## Todo
- Detect if an address is a smart contract + segment by chain (Mainnet, Gnosis Chain, etc.)
