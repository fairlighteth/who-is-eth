const PROVIDER_URL = 'YOUR-PROVIDER-URL-HERE'
const Web3 = require('web3')
const fs = require('fs-extra')

console.log("======== WHO IS ETH? ========")
const web3 = new Web3(PROVIDER_URL);

// Clean /output/ folder
fs.emptyDir('./output/', err => { if (err) console.error(err) })

// Create output files
const file_output_smartcontracts = './output/smartcontracts.txt'
const file_output_EOA = './output/EOA.txt'
const file_output_ERRORS = './output/ERRORS.txt'

fs.ensureFileSync(file_output_EOA);
fs.ensureFileSync(file_output_smartcontracts)
fs.ensureFileSync(file_output_ERRORS);

// check if address is a contract address or a wallet address (0x) 
const isAddress = async (address) => {
  try {
    const isAddress = await web3.eth.getCode(address).then(code => {
      if (code === '0x') {
        console.log(`${address} is EOA ? => true`)
        fs.appendFileSync(file_output_EOA, `${address}\n`)
      } else {
        console.log(`${address} is EOA ? => false`)
        fs.appendFileSync(file_output_smartcontracts, `${address}\n`)
      }
    });
  } catch (error) {
    console.log(`${address} is EOA ? => ERROR!`)
    fs.appendFileSync(file_output_ERRORS, `${address} ${error}\n`)
  }
}

// Read input file
const inputFilePath = process.argv[2]
console.log(`Reading file from: ${inputFilePath}`)
fs.readFile(inputFilePath, 'utf8', (err, data) => {
  if (err) {
    console.log(err)
  }

  const inputFileData = data.split('\n')
  console.log(`File read. ${inputFileData.length} lines found.`)
  console.log(`Checking addresses...\n====================`)
  inputFileData.forEach(async (address) => {
    if (address.length > 0) {
      await isAddress(address)
    }
  })
})
