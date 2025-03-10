---
sidebar_label: Base Marketplace
sidebar_position: 1
---

# NFT Marketplace

![img alt](./../img/nft-marketplace.png)

NFT marketplace is a contract where you can buy and sell non-fungible tokens for fungible tokens. The contract also supports holding the NFT auctions and making/accepting purchase offers on NFTs.

A smart contract examples created by Gear are available on GitHub so anyone can easily create their own NFT marketplace application and run it on the Gear Network:

- [Gear Non-Fungible Token](https://github.com/gear-dapps/non-fungible-token/). 
- [NFT marketplace](https://github.com/gear-dapps/nft-marketplace).

- Marketplace UI available on [Github](https://github.com/gear-dapps/nft-marketplace/tree/master/frontend)

## How to run 

### ⚒️ Build programs

- Build [NFT contract](https://github.com/gear-dapps/non-fungible-token/) as described in `README.md`
- Build [Marketplace contract](https://github.com/gear-dapps/nft-marketplace/) as described in `README.md`

### 🏗️ Upload programs

You can deploy a program using [idea.gear-tech.io](https://idea.gear-tech.io/). In the network selector choose `Staging Testnet` or `Development` (in this case, you should have a local node running).

*** Non-Fungible Token ***

1. Upload program `nft.opt.wasm` from `/target/wasm32-unknown-unknown/release/`
2. Upload metadata file `meta.txt`
3. Specify `init payload` and calculate gas!

:::info
Init payload:

- name `Str` - NFT collection name
- symbol `Str` - NFT collection symbol
- base_uri `Str` - NFT collection base URI
- royalties `Option<Royalties>` - Optional param to specify accounts to pay royalties
:::

*** Marketplace ***

1. Upload program `marketplace.opt.wasm` from `/target/wasm32-unknown-unknown/release/`
2. Upload metadata file `meta.txt`
3. Specify `init payload` and calculate gas!

:::info
InitMarket payload:

- admin_id (ActorId) -  marketplace admin
- treasury_id (ActorId) - an account that receives a commission from sales on the marketplace
- treasury_fee (U16) -  sales commission
:::

### 🖥️ Run UI

1. Install packages

```sh
yarn install
```

2. Configure .evn file. Specify network address and program ID like in the example below:

For proper application functioning, one needs to adjust an environment variable parameters. An example is available [here](https://github.com/gear-tech/gear-js/blob/master/apps/marketplace/.env.example).

```sh
REACT_APP_NODE_ADDRESS=wss://rpc-node.gear-tech.io:443
REACT_APP_IPFS_ADDRESS=https://ipfs.gear-tech.io/api/v0
REACT_APP_IPFS_GATEWAY_ADDRESS=https://ipfs-gw.gear-tech.io/ipfs
REACT_APP_MARKETPLACE_CONTRACT_ADDRESS=0xf8e5add537887643f8aa1ee887754d9b2d8c20d4efd062d6c1dc673cbe390d6f
REACT_APP_NFT_CONTRACT_ADDRESS=0xa7874ff27e9bac10bf7fd43f4908bb1e273018e15325c16fb35c71966c0c4033
```

- `REACT_APP_NODE_ADDRESS` is Gear Network address (wss://rpc-node.gear-tech.io:443)
- `REACT_APP_IPFS_ADDRESS` is address of IPFS to store NFT assets (https://ipfs.gear-tech.io/api/v0 was used for Gear Marketplace implementation)
- `REACT_APP_IPFS_GATEWAY_ADDRESS` is IPFS Gateway address (https://ipfs-gw.gear-tech.io/ipfs)
- `REACT_APP_MARKETPLACE_CONTRACT_ADDRESS` is NFT Marketplace contract address in Gear Network
- `REACT_APP_NFT_CONTRACT_ADDRESS` is Gear Non-Fungible Token contract address in Gear Network

3. Run app

```sh
yarn start
```

## Marketplace contract logic

This article explains the programming interface, data structure, basic functions and explains their purpose. It can be used as is or modified to suit your own scenarios.

<!-- You can watch a video on how to get the NFT Marketplace application up and running and its capabilities here: **https://youtu.be/4suveOT3O-Y**.
-->

To use the hashmap you should include `hashbrown` package into your *Cargo.toml* file:
```toml
[dependencies]
# ...
hashbrown = "0.13.1"
```

## Logic
The contract state:
```rust
use hashbrown::{HashMap, HashSet};

pub struct Market {
    pub admin_id: ActorId,
    pub treasury_id: ActorId,
    pub treasury_fee: u128,
    pub items: HashMap<ContractAndTokenId, Item>,
    pub approved_nft_contracts: HashSet<ActorId>,
    pub approved_ft_contracts: HashSet<ActorId>,
    pub tx_id: TransactionId,
}
```
- `admin_id` - an account who has the right to approve non-fungible-token and fungible-tokens contracts that can be used in the marketplace contract;
- `treasury_id` - an account to which sales commission will be credited;
- `treasury_fee` - 
commission percentage (from 1 to 5 percent)
The marketplace contract is initialized with the following fields;
- `items` - listed NFTs;
- `approved_nft_contracts` - NFT contracts accounts that can be listed on the marketplace;
- `approved_ft_contracts` - 
fungible token accounts for which it is possible to buy marketplace items;
- `tx_id` - the id for tracking transactions in the fungible and non-fungible contracts (See the description of [fungible token](/examples/gft-20.md) and [non-fungible token](/examples/gnft-721.md)).


The marketplace item has the following struct:
```rust
pub struct Item {
    pub owner: ActorId,
    pub ft_contract_id: Option<ContractId>,
    pub price: Option<Price>,
    pub auction: Option<Auction>,
    pub offers: BTreeMap<(Option<ContractId>, Price), ActorId>,
    pub tx: Option<(TransactionId, MarketTx)>,
}
```
- `owner` - an item owner;
- `ft_contract_id` - a contract of fungible tokens for which that item can be bought. If that field is `None` then the item is on sale for native Gear value;
- `price` - 
the item price. `None` field means that the item is not on the sale;
- `auction` - 
a field containing information on the current auction. `None` field means that there is no current auction on the item;
- `offers` - 
purchase offers made on that item;
- `tx` - a pending transaction on the item. `None` means that there are no pending transactions. 

`MarketTx` is an enum of possible transactions that can occur with NFT:

```rust
#[derive(Debug, Encode, Decode, TypeInfo, Clone, PartialEq, Eq)]
pub enum MarketTx {
    CreateAuction,
    Bid {
        account: ActorId,
        price: Price,
    },
    SettleAuction,
    Sale {
        buyer: ActorId,
    },
    Offer {
        ft_id: ContractId,
        price: Price,
        account: ActorId,
    },
    AcceptOffer,
    Withdraw {
        ft_id: ContractId,
        price: Price,
        account: ActorId,
    },
}
```
### Listing NFTs, changing the price or stopping the sale.
To list NFT on the marketplace or modify the terms of sale send the following message: 
```rust
/// Adds data on market item.
/// If the item of that NFT does not exist on the marketplace then it will be listed.
/// If the item exists then that action is used to change the price or suspend the sale.
///
/// # Requirements
/// * [`msg::source()`](gstd::msg::source) must be the NFT owner
/// * `nft_contract_id` must be added to `approved_nft_contracts`
/// * if item already exists, then it cannot be changed if there is an active auction
///
/// On success replies [`MarketEvent::MarketDataAdded`].
AddMarketData {
    /// the NFT contract address
    nft_contract_id: ContractId,
    /// the fungible token contract address (If it is `None` then the item is traded for the native value)
    ft_contract_id: Option<ContractId>,
    /// the NFT id
    token_id: TokenId,
    /// the NFT price (if it is `None` then the item is not on the sale)
    price: Option<Price>,
}
```
### NFT purchase.
To buy NFT send the following message: 

```rust
/// Sells the NFT.
/// 
/// # Requirements:
/// * The NFT item must exist and be on sale.
/// * If the NFT is sold for a native Gear value, then a buyer must attach a value equal to the price.
/// * If the NFT is sold for fungible tokens then a buyer must have enough tokens in the fungible token contract.
/// * There must be no open auction on the item.
/// 
/// On success replies [`MarketEvent::ItemSold`].
BuyItem {
    /// NFT contract address
    nft_contract_id: ContractId,
    /// the token ID
    token_id: TokenId,
}
```

### NFT auction.

The marketplace contract includes the *English auction*. *English auction* is an open auction at an increasing price, where participants openly bid against each other, with each subsequent bid being greater than the previous one.

The auction has the following struct:
```rust
pub struct Auction {
    pub bid_period: u64,
    pub started_at: u64,
    pub ended_at: u64,
    pub current_price: Price,
    pub current_winner: ActorId,
}
```
- `bid_period` - the time interval. If the auction ends before `exec::blocktimestamp() + bid_period` then the auction end time is delayed for `bid_period`;
- `started_at` - auction start time;
- `ended_at` - auction end time;
- `current_price` - the current offered price for the NFT;
- `current_winner` - the current auction winner

The auction is started with the following message:

```rust
/// Creates an auction for selected item.
/// If the NFT item doesn't exist on the marketplace then it will be listed
///
/// Requirements:
/// * Only the item owner can start the auction.
/// * `nft_contract_id` must be in the list of `approved_nft_contracts`
/// *  There must be no active auction
/// 
/// On success replies [`MarketEvent::AuctionCreated`].
CreateAuction {
    /// the NFT contract address
    nft_contract_id: ContractId,
    /// the fungible token contract address (If it is `None` then the item is traded for the native value)
    ft_contract_id: Option<ContractId>,
    /// the NFT id
    token_id: TokenId,
    /// the starting price
    min_price: Price,
    /// the time interval the auction is extended if bid is made if the auction ends before `exec::blocktimestamp() + bid_period`
    bid_period: u64,
    /// the auction duration
    duration: u64,
},
```

To add bid to the current auction send the following message:
```rust
/// Adds a bid to an ongoing auction.
/// 
/// # Requirements:
/// * The item must exist.
/// * The auction must exist on the item.
/// * If the NFT is sold for a native Gear value, then a buyer must attach a value equal to the price indicated in the arguments.
/// * If the NFT is sold for fungible tokens then a buyer must have   enough tokens in the fungible token contract.
/// * `price` must be greater than the current offered price for that item.
///  
/// On success replies [`MarketEvent::BidAdded`].
AddBid {
    /// the NFT contract address
    nft_contract_id: ContractId,
    /// * `token_id`: the NFT id
    token_id: TokenId,
    /// the offered price
    price: Price,
},
```

If auction period is over then anyone can send message `SettleAuction` that will send the NFT to the winner and pay to the owner:
```rust
/// Settles the auction.
/// 
/// Requirements:
/// * The auction must be over.
///   
/// On successful auction replies [`MarketEvent::AuctionSettled`].
/// If no bids were made replies [`MarketEvent::AuctionCancelled`].
SettleAuction {
    /// the NFT contract address
    nft_contract_id: ContractId,
    /// the NFT id
    token_id: TokenId,
}
```

### Offers.
To make offer on the marketplace item send the following message:
```rust
/// Adds a price offer to the item.
/// 
/// Requirements:
/// * NFT items must exist and be listed on the marketplace.
/// * There must be no ongoing auction on the item.
/// * If a user makes an offer in native Gear value, then he must attach a value equal to the price indicated in the arguments.
/// * If a user makes an offer in fungible tokens then he must have  enough tokens in the fungible token contract.
/// * The price can not be equal to 0.
/// * There must be no identical offers on the item.
///     
/// On success replies [`MarketEvent::OfferAdded`].
AddOffer {
    /// the NFT contract address
    nft_contract_id: ContractId,
    /// the FT contract address (if it is `None, the offer is made for the native value)
    ft_contract_id: Option<ContractId>,
    /// the NFT id
    token_id: TokenId,
    /// the offer price
    price: u128,
},
```
The item owner can accept the offer:
```rust
/// Accepts an offer.
/// 
/// Requirements:
/// * NFT items must exist and be listed on the marketplace.
/// * Only the owner can accept the offer.
/// * There must be no ongoing auction.
/// * The offer with indicated hash must exist.
///      
/// On success replies [`MarketEvent::OfferAccepted`].
AcceptOffer {
    /// the NFT contract address
    nft_contract_id: ContractId,
    /// the NFT id
    token_id: TokenId,
    /// the fungible token contract address
    ft_contract_id: Option<ContractId>,
    /// the offer price
    price: Price,
}
```
The user who made the offer can also withdraw his tokens:

```rust
/// Withdraws tokens.
/// 
/// Requirements:
/// * NFT items must exist and be listed on the marketplace.
/// * Only the offer creator can withdraw his tokens.
/// * The offer with indicated hash must exist.
/// 
/// On success replies [`MarketEvent::TokensWithdrawn`].
Withdraw {
    /// the NFT contract address
    nft_contract_id: ContractId,
    /// the FT contract address (if it is `None, the offer is made for the native value)
    ft_contract_id: Option<ContractId>,
    /// the NFT id
    token_id: TokenId,
    /// The offered price (native value)
    price: Price,
},
```
## Consistency of contract states

The `market` contract interacts with `fungible` and `non-fungible` token contracts. Each transaction that changes the states of several contracts is stored in the state until it is completed. Every time a user interacts with an item, the marketplace contract checks for an pending transaction and, if there is one, asks the user to complete it, not allowing to start a new one. The idempotency of the token contracts allows to restart a transaction without duplicate changes which guarantees the state consistency of 3 contracts.

## Program metadata and state
Metadata interface description:

```rust
pub struct MarketMetadata;

impl Metadata for MarketMetadata {
    type Init = In<InitMarket>;
    type Handle = InOut<MarketAction, MarketEvent>;
    type Others = ();
    type Reply = ();
    type Signal = ();
    type State = Market;
}
```
To display the full contract state information, the `state()` function is used:

```rust
#[no_mangle]
extern "C" fn state() {
    msg::reply(
        unsafe {
            let market = MARKET.as_ref().expect("Uninitialized market state");
            &(*market).clone()
        },
        0,
    )
    .expect("Failed to share state");
}
```

To display only necessary certain values from the state, you need to write a separate crate. In this crate, specify functions that will return the desired values from the `Market` state. For example - [gear-dapps/nft-marketplace/state](https://github.com/gear-dapps/nft-marketplace/tree/master/state):

```rust
#[metawasm]
pub trait Metawasm {
    type State = <MarketMetadata as Metadata>::State;

    fn all_items(state: Self::State) -> Vec<Item> {
        ...
    }

    fn item_info(args: ItemInfoArgs, state: Self::State) -> Item {
        ...
    }
}
```
