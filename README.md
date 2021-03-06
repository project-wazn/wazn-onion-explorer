Wazn Onion Blockchain Explorer
======================

[![License](https://img.shields.io/badge/license-EUPL--1.2-red)](https://opensource.org/licenses/EUPL-1.2)

Currently available blockchain explorers have several limitations which are of special importance to privacy oriented users:

 - they use JavaScript,
 - have images which might be used for [cookieless tracking](http://lucb1e.com/rp/cookielesscookies/),
 - track users activates through google analytics,
 - are closed sourced,
 - are not available as hidden services,
 - do not support Wazn testnet or stagenet networks,
 - have limited JSON API.

In this example, these limitations are addressed by development of
an Wazn Onion Blockchain Explorer. The example not only shows how to use
Wazn C++ libraries, but also demonstrates how to use:

 - [crow](https://github.com/ipkn/crow) - C++ micro web framework
 - [mstch](https://github.com/no1msd/mstch) - C++ {{mustache}} templates
 - [json](https://github.com/nlohmann/json) - JSON for Modern C++
 - [fmt](https://github.com/fmtlib/fmt) - Small, safe and fast string formatting library

## Onion Explorer hosts
- [explorer.wazn.io](https://explorer.wazn.io)
- [xmrchain.net](https://xmrchain.net)
- [blox.minexmr.com](https://blox.minexmr.com)
- [explorer.uplexa.com](https://explorer.uplexa.com)
- [monerochain.com](https://monerochain.com)

<img src="https://wazn.io/downloads/img/explorer2.jpg">

## Wazn Onion Blockchain Explorer features

The key features of the Wazn Onion Blockchain Explorer are:

 - no cookies, no web analytics trackers, no images,
 - by default no JavaScript, but can be enabled for client side decoding and proving transactions,
 - open sourced,
 - made fully in C++,
 - showing encrypted payments ID,
 - showing ring signatures,
 - showing transaction extra field,
 - showing public components of Wazn addresses,
 - decoding which outputs and mixins belong to the given Wazn address and viewkey,
 - can prove that you sent WAZN to someone,
 - detailed information about ring members, such as, their age, timescale and their ring sizes,
 - showing number of amount output indices,
 - support Wazn testnet and stagnet networks,
 - tx checker and pusher for online pushing of transactions,
 - estimate possible spendings based on address and viewkey,
 - can provide total amount of all miner fees,
 - decoding encrypted payment id,
 - decoding outputs and proving txs sent to sub-address.

## Compilation on Ubuntu 18.04/20.04

##### Compile latest Wazn version (v1.2.9) on Ubuntu 20.04

```bash
# first install Wazn dependecines
sudo apt update

sudo apt update && sudo apt install build-essential cmake pkg-config libboost-all-dev libssl-dev libzmq3-dev libunbound-dev libsodium-dev libunwind8-dev liblzma-dev libreadline6-dev libldns-dev libexpat1-dev doxygen graphviz libpgm-dev qttools5-dev-tools libhidapi-dev libusb-1.0-0-dev libprotobuf-dev protobuf-compiler libudev-dev

# go to home folder
cd ~
git clone --recursive https://github.com/project-wazn/wazn

cd wazn/

USE_SINGLE_BUILDDIR=1 make
```

```

##### Compile and run the explorer

Once the Wazn compiles, the explorer can be downloaded and compiled
as follows:

```bash
# go to home folder if still in ~/wazn
cd ~

# download the source code
git clone https://github.com/project-wazn/wazn-onion-explorer

# enter the downloaded sourced code folder
cd wazn-onion-explorer

# make a build folder and enter it
mkdir build && cd build

# create the makefile
cmake ..

# alternatively can use: cmake -DWAZN_DIR=/path/to/wazn_folder ..
# if Wazn is not in ~/wazn
#
# also can build with ASAN (sanitizers), for example
# cmake -DSANITIZE_ADDRESS=On ..

# compile
make
```


To run it:
```
./waznblocks
```

By default it will look for blockchain in its default location i.e., `~/var/lib/wazn/lmdb`.
You can use `-b` option if its in different location.

For example:

```bash
./waznblocks -b /var/lib/wazn/lmdb
```

Example output:

```bash
[mwo@arch wazn-onion-explorer]$ ./waznblocks
2016-May-28 10:04:49.160280 Blockchain initialized. last block: 24372, d0.h0.m12.s47 time ago, current difficulty: 101763414
(2016-05-28 02:04:49) [INFO    ] Crow/0.1 server is running, local port 8081
```

Go to your browser: http://127.0.0.1:8081

## The explorer's command line options

```
waznblocks, Wazn Onion Blockchain Explorer:
  -h [ --help ] [=arg(=1)] (=0)         produce help message
  -t [ --testnet ] [=arg(=1)] (=0)      use testnet blockchain
  -s [ --stagenet ] [=arg(=1)] (=0)     use stagenet blockchain
  --enable-pusher [=arg(=1)] (=0)       enable signed transaction pusher
  --enable-randomx [=arg(=1)] (=0)      enable generation of randomx code
  --enable-mixin-details [=arg(=1)] (=0)
                                        enable mixin details for key images,
                                        e.g., timescale, mixin of mixins, in tx
                                        context
  --enable-key-image-checker [=arg(=1)] (=0)
                                        enable key images file checker
  --enable-output-key-checker [=arg(=1)] (=0)
                                        enable outputs key file checker
  --enable-json-api [=arg(=1)] (=0)     enable JSON REST api
  --enable-as-hex [=arg(=1)] (=0)       enable links to provide hex
                                        represtations of a tx and a block
  --enable-autorefresh-option [=arg(=1)] (=0)
                                        enable users to have the index page on
                                        autorefresh
  --enable-emission-monitor [=arg(=1)] (=0)
                                        enable Wazn total emission monitoring
                                        thread
  -p [ --port ] arg (=8081)             default explorer port
  -x [ --bindaddr ] arg (=0.0.0.0)      default bind address for the explorer
  --testnet-url arg                     you can specify testnet url, if you run
                                        it on mainnet or stagenet. link will
                                        show on front page to testnet explorer
  --stagenet-url arg                    you can specify stagenet url, if you
                                        run it on mainnet or testnet. link will
                                        show on front page to stagenet explorer
  --mainnet-url arg                     you can specify mainnet url, if you run
                                        it on testnet or stagenet. link will
                                        show on front page to mainnet explorer
  --no-blocks-on-index arg (=10)        number of last blocks to be shown on
                                        index page
  --mempool-info-timeout arg (=5000)    maximum time, in milliseconds, to wait
                                        for mempool data for the front page
  --mempool-refresh-time arg (=5)       time, in seconds, for each refresh of
                                        mempool state
  -c [ --concurrency ] arg (=0)         number of threads handling http
                                        queries. Default is 0 which means it is
                                        based you on the cpu
  -b [ --bc-path ] arg                  path to lmdb folder of the blockchain,
                                        e.g., ~/var/lib/wazn/lmdb
  --ssl-crt-file arg                    path to crt file for ssl (https)
                                        functionality
  --ssl-key-file arg                    path to key file for ssl (https)
                                        functionality
  -d [ --deamon-url ] arg (=http:://127.0.0.1:11787)
                                        Wazn daemon url
  --daemon-login arg                    Specify username[:password] for daemon
                                        RPC client
```

Example usage, defined as bash aliases.

```bash
# for mainnet explorer
alias waznblocksmainnet='~/wazn-onion-explorer/build/waznblocks    --port 8081 --testnet-url "http://139.162.32.245:8082" --enable-pusher --enable-emission-monitor'

# for testnet explorer
alias waznblockstestnet='~/wazn-onion-explorer/build/waznblocks -t --port 8082 --mainnet-url "http://139.162.32.245:8081" --enable-pusher --enable-emission-monitor'
```

These are aliases similar to those used for http://139.162.32.245:8081/ and http://139.162.32.245:8082/, respectively.

## Enable Wazn emission

Obtaining current Wazn emission amount is not straight forward. Thus, by default it is
disabled. To enable it use `--enable-emission-monitor` flag, e.g.,

```bash
waznblocks --enable-emission-monitor
```

This flag will enable emission monitoring thread. When started, the thread will initially scan the entire blockchain, and calculate the cumulative emission based on each block.Since it is a separate thread, the explorer will work as usual during this time. Every 10000 blocks, the thread will save current emission in a file, by default, in `~/var/lib/wazn/lmdb/emission_amount.txt`. For testnet or stagenet networks,it is `~/var/lib/wazn/testnet/lmdb/emission_amount.txt` or `~/var/lib/wazn/stagenet/lmdb/emission_amount.txt`. This file is used so that we don't need to rescan entire blockchain whenever the explorer is restarted. When the explorer restarts, the thread will first check if `~/var/lib/wazn/lmdb/emission_amount.txt` is present, read its values, and continue from there if possible. Subsequently, only the initial use of the tread is time consuming. Once the thread scans the entire blockchain, it updates the emission amount using new blocks as they come. Since the explorer writes this file, there can be only one instance of it running for mainnet, testnet and stagenet. Thus, for example, you cant have two explorers for mainnet running at the same time, as they will be trying to write and read the same file at the same time, leading to unexpected results. Off course having one instance for mainnet and one instance for testnet is fine, as they write to different files.

When the emission monitor is enabled, information about current emission of coinbase and fees is
displayed on the front page, e.g., :

```
Wazn emission (fees) is ??? (???) as of 1500 block
```

The values given, can be checked using Wazn daemon's  `print_coinbase_tx_sum` command.
For example, for the above example: `print_coinbase_tx_sum 0 1313449`.

To disable the monitor, simply restart the explorer without `--enable-emission-monitor` flag.

## Enable JavaScript for decoding proving transactions

By default, decoding and proving tx's outputs are done on the server side. To do this on the client side (private view and tx keys are not send to the server) JavaScript-based decoding can be enabled:

```
waznblocks --enable-js
```

## Enable SSL (https)

By default, the explorer does not use ssl. But it has such a functionality.

As an example, you can generate your own ssl certificates as follows:

```bash
cd /tmp # example folder
openssl genrsa -out server.key 1024
openssl req -new -key server.key -out server.csr
openssl x509 -req -days 3650 -in server.csr -signkey server.key -out server.crt
```

Having the `crt` and `key` files, run `waznblocks` in the following way:

```bash
./waznblocks --ssl-crt-file=/tmp/server.crt --ssl-key-file=/tmp/server.key
```

Note: Because we generated our own certificate, modern browsers will complain
about it as they cant verify the signatures against any third party. So probably
for any practical use need to have properly issued ssl certificates.

## JSON API

The explorer has JSON api. For the API, it uses conventions defined by [JSend](https://labs.omniti.com/labs/jsend).
By default the api is disabled. To enable it, use `--enable-json-api` flag, e.g.,

```
./waznblocks --enable-json-api
```


## License
```
Licensed under the EUPL-1.2
Copyright (c) 2019-2021 WAZN Project  
Copyright (c) 2016-2018 moneroexamples
```
