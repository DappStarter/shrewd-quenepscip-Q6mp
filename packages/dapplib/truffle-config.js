require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict drum off uphold drift reward stereo punch grace logic sugar sponsor'; 
let testAccounts = [
"0x672bead61c2e7f949102e81f083347b2a44eb22b7a4fffe2003a26f16e5f386d",
"0x373b66494f42e5672143984f89a3a828d1df2fa960e15789a2318a9f09e625c7",
"0xbc770fb13e603094ca442da779753fed7724b10a6d90b862228e670e692ff57b",
"0x6c0ad02d7f50a1fb601d87d1f64db3d70efbe6d57b0304513b0b48bff1801269",
"0x9992ea2504e920c8f5e9bfc7f651c7fd2642bcaf45ffcd3c2265233c54276b2c",
"0x0b3785fdfdd3e7da7d30823628eb2a704aa3470819d1783e1ac51cf2a8026a06",
"0x7f1b177f689a4b93b5c7bb8b21704c08698f8476d5a7f4ec2c8af9527320e06b",
"0xcc5e9e28920b3bf251751837573d38126c99a61aa52f85865341c1133099a19d",
"0xa4a007b6e26431ce54145177475a6e79c606b110c44c774a2003c0771e451071",
"0x0a0a8187a5cf21ab62274afd4ace35493433384ceb9a47627e0bd1cd52557775"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


