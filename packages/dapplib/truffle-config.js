require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remember huge hover area olympic gasp'; 
let testAccounts = [
"0xd722e8962a76bc69602381a3360fae8acbe017015541fb6dbcfa837690f880a3",
"0x50c17da27c7898e9d6f449e85e8f91f81a55896c8266d3672ac62cd01581ab30",
"0x4b35515192797c938e82c08faeea494280f4d084f024185220f36d1012ef077e",
"0x585ad2891bc9446593f66512e9f372cd4c6833506e1db1680ea6fb50da1896ad",
"0x849138492d40f5d6b60911f4cfc864965481ecad6d497411d40e6af8e6d2e996",
"0x4a6154461f17a87c42212f01868320405801622304ead141dce2647e5166513d",
"0x42d6706caa8ea130478d59ffbedf82852a26bb249d861f2544346e2d229b53af",
"0xffcb9e436fc0b0d05c8faae4bbf5e59898e13af70f12a302e878d498d6df3e62",
"0xaf93195c27207e87b7a5f7724bfad0491b935195450aeaf6dbd7643dee3c4661",
"0x886541aeda9c2ed5afd7afd321a7ee16ae3a2801f299f45c5e462790e7c96859"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

