const path = require('path');
const fs = require('fs');
const solc = require('solc');

const llamaCoinPath = path.resolve(__dirname, 'contract', 'LlamaCoin.sol');
const source = fs.readFileSync(llamaCoinPath, 'utf8');

var input = {
    language: 'Solidity',
    sources: {
        'LlamaCoin.sol' : {
            content: source
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*']
            }
        }
    }
};

var output = JSON.parse(solc.compile(JSON.stringify(input)));
var contract = output.contracts['LlamaCoin.sol']['LlamaCoin'];

var dirName = 'bin';
const contractByteCodePath = path.join(dirName, 'LlamaCoin.bin');
fs.writeFileSync(contractByteCodePath, contract.evm.bytecode.object);

const contractAbiPath = path.join(dirName, 'LlamaCoin.abi');
fs.writeFileSync(contractAbiPath, JSON.stringify(contract.abi));

