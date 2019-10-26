var config = {
    testnet: false, // this is adjusted page.h if needed. dont need to change manually
    stagenet: false, // this is adjusted page.h if needed. dont need to change manually
    coinUnitPlaces: 6,
    txMinConfirms: 10,         // corresponds to CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE in WAZN
    txCoinbaseMinConfirms: 60, // corresponds to CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW in WAZN
    coinSymbol: 'WAZN',
    openAliasPrefix: "wazn",
    coinName: 'WAZN',
    coinUriPrefix: 'wazn:',
    addressPrefix: 0x137130,
    integratedAddressPrefix: 0x3e2d,
    subAddressPrefix: 0x582d,
    addressPrefixTestnet: 0x6136,
    integratedAddressPrefixTestnet: 0x3bb3,
    subAddressPrefixTestnet: 0x5533,
    addressPrefixStagenet: 0x5ebc,
    integratedAddressPrefixStagenet: 0x38b9,
    subAddressPrefixStagenet: 0x52b9,
    feePerKB: new JSBigInt('20000'),//20^10 - for testnet its not used, as fee is dynamic.
                            2000000000
    dustThreshold: new JSBigInt('1'),//10^10 used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
    txChargeRatio: 0.5,
    defaultMixin: 4, // minimum mixin for hardfork v5
    txChargeAddress: '',
    idleTimeout: 30,
    idleWarningDuration: 20,
    maxBlockNumber: 500000000,
    avgBlockTime: 120,
    debugMode: false
};
