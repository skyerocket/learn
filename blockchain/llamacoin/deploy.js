const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const path = require('path');
const fs = require('fs');
const { exit } = require('process');

const provider = new HDWalletProvider(
    'math all evidence such token grass design marine tourist lend barely snake',
    'https://mainnet.infura.io/v3/cc3f4818a7e64148bd3bcf7afbb06a62'
);

const web3 = new Web3(provider);
const abiPath = path.resolve(__dirname, 'bin', 'LlamaCoin.abi');
const abi = fs.readFileSync(abiPath, 'utf8');

const bytecodePath = path.resolve(__dirname, 'bin', 'LlamaCoin.bin');
const bytecode = fs.readFileSync(bytecodePath, 'utf8');

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account ', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(abi))
        .deploy({data: bytecode})
        .send({from: accounts[0], gas: '1000000'});
    console.log('Contract deployed to ', result.options.address);
    exit(0);
}

deploy()