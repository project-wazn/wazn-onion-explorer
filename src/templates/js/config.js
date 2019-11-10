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
    addressPrefix: 0xd1,
    integratedAddressPrefix: 0x404f,
    subAddressPrefix: 0x3750,
    addressPrefixTestnet: 0xd1,
    integratedAddressPrefixTestnet: 0x404f,
    subAddressPrefixTestnet: 0x3750,
    addressPrefixStagenet: 0xd1,
    integratedAddressPrefixStagenet: 0x404f,
    subAddressPrefixStagenet: 0x3750,
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
