var config = {
    testnet: false, // this is adjusted page.h if needed. dont need to change manually
    stagenet: false, // this is adjusted page.h if needed. dont need to change manually
    coinUnitPlaces: 0,
    txMinConfirms: 10,         // corresponds to CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE in WAZN
    txCoinbaseMinConfirms: 60, // corresponds to CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW in WAZN
    coinSymbol: 'WAZN',
    openAliasPrefix: "wazn",
    coinName: 'WAZN',
    coinUriPrefix: 'wazn:',
    addressPrefix: 0x137130,
    integratedAddressPrefix: 0x3bab30,
    subAddressPrefix: 0x2fab30,
    addressPrefixTestnet: 0x9dd32,
    integratedAddressPrefixTestnet: 0x5d32,
    subAddressPrefixTestnet: 0x5eb2,
    addressPrefixStagenet: 0x81032,
    integratedAddressPrefixStagenet: 0x5032,
    subAddressPrefixStagenet: 0x51b2,
    feePerKB: new JSBigInt('20000'),//20^10 - for testnet its not used, as fee is dynamic.
    dustThreshold: new JSBigInt('10000'),//10^10 used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
    txChargeRatio: 0.5,
    defaultMixin: 6, // minimum mixin for hardfork v9
    txChargeAddress: '',
    idleTimeout: 30,
    idleWarningDuration: 20,
    maxBlockNumber: 500000000,
    avgBlockTime: 120,
    debugMode: false
};
