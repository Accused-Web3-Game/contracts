/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.11",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  // networks: {
  //   moonbase: {
  //     url: 'https://rpc.api.moonbase.moonbeam.network', // Insert your RPC URL here
  //     chainId: 1287, // (hex: 0x507),
  //     accounts: ['5822c6eaf95874755529a599f5b3042911c487d16639c79956646c02a5048494']
  //   },
  // }
};