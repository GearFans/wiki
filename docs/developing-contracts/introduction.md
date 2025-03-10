---
sidebar_label: Introduction
sidebar_position: 1
---

# Attention developers!

:::important
 Want to take your blockchain development skills to the next level? Join **[Gear Academy's](https://academy.gear.foundation/)** free course, "Gear Smart Contract Developer." In this comprehensive course, you'll learn the ins and outs of developing on the Gear Protocol, from deploying programs onto the blockchain and interacting with them, to testing your programs on the Gear Network. You'll also gain hands-on experience navigating the `@gear-js` library for interacting with contracts on the client side and developing real-world applications, including contracts and frontends. Don't miss this opportunity to become a pro Gear blockchain developer. Enroll now in Gear Academy's **"[Gear Smart Contract Developer](https://academy.gear.foundation/course/tamagotchi)"** course!
:::

## What is a Gear smart contract?

Gear smart contract a just a program that runs on the Gear Protocol. It is a piece of code compiled to Wasm that is deployed to the blockchain and can be executed by anyone who sends a message to it. The program can store data, receive and send messages, and perform any other actions that are allowed by the Gear Protocol.

Every program should have a set of exported functions that can be called by the Gear Protocol. These functions are called entry points. The Gear Protocol has a set of predefined entry points that are used to initialize the program, handle incoming messages, and process replies to previously sent messages.

But we can't implement any business logic without using imported functions that form the API for the program. The Gear Protocol has a set of predefined API functions that can be used by any program. There are low-level functions that allow us to load incoming message's payload, send messages, and perform other actions. And there are higher-level libraries that allow us to interact with the Gear Protocol in a more convenient way.

## Predefined entry points (exported functions)

The central exported function of the Gear smart contract is `handle()`. It is called every time the program receives an incoming message. Below is the Rust example code:

```rust
#[no_mangle]
extern "C" fn handle() {
    // Execute this code during explicitly incoming message
}
```

This function is obligatory to be defined in the program.

In this function, we are to define the main business logic of our program. For example, we can check the incoming message and perform some actions depending on the message type. Also, we can send a message to another program. Finally, we can send a reply to the message that was received by the program.

As with any other program intended to be executed in some environment, Gear smart contract has its own lifecycle. It is initialized, receives messages, and can be terminated. We are to define the optional `init()` function if we want to perform some actions during the initialization of the program. For example, we can store some data in the program's memory. The `init()` function is called only once during the program initialization.

```rust
#[no_mangle]
extern "C" fn init() {
    // Execute this code during contract initialization
}
```

If there is no `init()` function in the program, the program will be initialized without any custom actions.

And the third most important function is `handle_reply()`. It is called when the program receives a reply to the message that was sent by the program. For example, we can check the reply and perform some actions depending on the reply type.

```rust
#[no_mangle]
extern "C" fn handle_reply() {
    // Execute this code during handling reply on the previously sent message
}
```

There is no need to define the `handle_reply()` function if the program doesn't intend to receive replies. In this case, the program will ignore all incoming replies.

The reply message is similar to the ordinary message, but it has some differences:

- The reply message is sent to the user or program that has sent the original message. We can't set the destination of the reply message explicitly.
- We can send only one reply message per execution. We get an error if we try to send more than one reply message.
- Even if the program execution is failed (for example, panic is called or the gas limit is exceeded), the reply message will be sent anyway.
- The reply message is processed in `handle_reply()` function instead of `handle()` function for the ordinary message. We have mentioned this above but it is worth to underline it again.

## API functions (imported functions)

There are a lot of imported functions that can be used by the Gear smart contract. They are called API functions. These functions are provided by the runtime that executes the Gear smart contract. The most convenient way to use these functions is to use the Gear standard library called [`gstd`](https://docs.gear.rs/gstd/). It is a set of high-level functions that are implemented on top of the low-level API functions.

More details about the Gear standard library can be found in the [Gear Library](/docs/developing-contracts/gstd.md) section.

## Basic stages of the Gear smart contract lifecycle

Let's explore the typical lifecycle of a Gear smart contract. We will use the Rust programming language for the examples, but the same principles are applied to any other language that can be compiled into Wasm.

**Step 1.** Write the program code.

You can find the minimal example in the [Getting Started](/docs/getting-started-in-5-minutes.md) section. It is a simple program that stores the counter, can increment and decrement it, and return the current value of the counter.

More advanced examples can be found in the Gear dApps organization on GitHub: https://github.com/gear-dapps

**Step 2.** Test the program.

We recommend using the [`gtest`](https://docs.gear.rs/gtest/) crate for testing Gear smart contracts. It allows us to write unit tests for the program and run them in the local environment.

The more advanced way to test the program is to use the [`gclient`](https://docs.gear.rs/gclient/) crate that allows you to run the program in the blockchain network. It is useful when you need to test the program in a real environment.

You can find more details about testing in the [Program Testing](/docs/developing-contracts/testing.md) section.

**Step 3.** Compile the program into Wasm.

We recommend using the [`gear-wasm-builder`](https://docs.gear.rs/gear_wasm_builder/) crate in a custom build script `build.rs`.

Add it to the `[build-dependencies]` section in the `Cargo.toml` file:

```toml
[build-dependencies]
gear-wasm-builder = { git = "https://github.io/gear-tech/gear.git", features = ["wasm-opt"] }
```

And add the following code to the `build.rs` file:

```rust
fn main() {
    gear_wasm_builder::build();
}
```

You can find built Wasm files in the `target/wasm32-unknown-unknown/release` directory.

**Step 4.** Deploy the program to the blockchain.

Program deployment is a process of storing the program's Wasm code on the blockchain and its initialization. The user pays a fee for the deployment transaction. The program is deployed to the blockchain only once. After that, it can be executed by anyone by sending a message to it.

If initialization fails (for example, the program panics in the `init()` function), the program is not deployed and the user gets an error.

Also, it is important to underline that someone should pay rent for keeping the program in the blockchain after a free period that is equal to 5 million blocks (it is about 2 months for networks with 1 block per second production). It is possible to add funds for rent using the [`pay_program_rent`](https://docs.gear.rs/pallet_gear/pallet/struct.Pallet.html#method.pay_program_rent) extrinsic (by the user) or with the [`gstd::exec::pay_program_rent`](https://docs.gear.rs/gstd/exec/fn.pay_program_rent.html) API function (by the program). If the rent is not paid, the program state changes to pause, its persistent memory is removed from the storage, and the program can't be executed. The program can be resumed by uploading its memory pages to the blockchain and paying the rent.

You can find more details about program deployment in the [Upload Program](/docs/developing-contracts/deploy.md) section.

**Step 5.** Execute the program.

The program can be executed by sending a message to it. The message can be sent by the user or by another program. The user pays a fee for the message execution. The program can send a reply to the message. The reply is sent to the user or program that has sent the original message.

**Step 6.** Terminate the program.

The program can be terminated by calling the [`gstd::exec::exit`](https://docs.gear.rs/gstd/exec/fn.exit.html) function. Also, the program is paused if the rent is not paid.

The program can't be executed after termination.

## Smart contract key features

Gear smart contracts have a lot of features that make them unique. Let's explore the most important of them.

### State function

Gear smart contracts can store the state in persistent memory. Anyone can read this memory from the blockchain.

To make state reading more convenient, Gear smart contracts can define the `state()` function.

```rust
#[no_mangle]
extern "C" fn state() {
    msg::reply(any_encodable_data, 0).expect("Failed to share state");
}
```

This function is stored in the blockchain in the same Wasm blob with `handle()` and `init()` functions. But unlike them, it is not executed using extrinsic and doesn't affect the blockchain state. It can be executed for free by any node with a fully synchronized blockchain state. There is a dedicated [`read_state`](https://docs.gear.rs/pallet_gear_rpc/trait.GearApiServer.html#tymethod.read_state) RPC call for this.

The data returned by the `state()` function can be converted to any convenient representation by using a state-conversion program. This is a separate program compiled into Wasm and dedicated to being executed on the off-chain runner. It should contain a set of meta-functions that accept the data returned by the `state()` function and return the data in a convenient format. There is a dedicated [`read_state_using_wasm`](https://docs.gear.rs/pallet_gear_rpc/trait.GearApiServer.html#tymethod.read_state_using_wasm) RPC call for reading the program state using the state-conversion program.

More details about state functions can be found in the [State Functions](/docs/developing-contracts/state.md) section.

### Asynchronous programming

In some cases, it is more convenient to express some concepts in an asynchronous programming style. For example, when you need to wait for a reply from another program or wait for a certain time.

Under the hood, the `async`/`await` syntax is a kind of syntactic sugar that generates a state machine around [`gstd::exec::wait`](https://docs.gear.rs/gstd/exec/fn.wait.html) and [`gstd::exec::wake`](https://docs.gear.rs/gstd/exec/fn.wake.html) functions. The state machine is stored in the program's persistent memory.

Note that in case of using async functions, you are to declare the `async main()` function with `#[async_main]` attribute instead of the `handle()` function:

```rust
#[gstd::async_main]
async fn main() {
    // Async code here
}
```

The initialization function can also be declared as an async function:

```rust
#[gstd::async_init]
async fn init() {
    // Async init code here
}
```

You can find more details about asynchronous programming in the [Asynchronous Programming](/docs/developing-contracts/interactions-between-programs.md) section.

### Creating programs from programs

Both users and programs are actors in terms of the Gear smart contract model. Therefore, any actor can create a new program and deploy it to the blockchain.

The only pre-requisite is that the code of the program should be stored in the blockchain. This can be done by using the [`upload_code`](https://docs.gear.rs/pallet_gear/pallet/struct.Pallet.html#method.upload_code) extrinsic that returns an identifier of the uploaded code. The code can be uploaded only once, then it can be used for creating multiple programs.

There are several helper functions for creating programs from programs in the [`gstd::prog`](https://docs.gear.rs/gstd/prog/) module.

More details about creating programs from programs can be found in the [Create Program](/docs/developing-contracts/create.md) section.

### Gas reservation

Gear smart contracts use gas for measuring the complexity of the program execution. The user pays a fee for the gas used by the program. Some part of the gas limit may be reserved during the current execution to be spent later. This gas reserving mechanism can be used to shift the burden of paying for program execution from one user to another. Also, it makes it possible to run some deferred actions using delayed messages described below.

You can find more details about gas reservation in the [Gas Reservation](/docs/developing-contracts/gas-reservation.md) section.

### Delayed messages

Gear smart contracts can send messages to other actors not only during the current execution but also after some time. This mechanism can be used to implement deferred actions.

Use functions with `*_delayed` suffix from [`gstd::msg`](https://docs.gear.rs/gstd/msg/index.html) module to send a delayed message to a program or user. The message will be sent after the specified number of blocks.

More details about delayed messages can be found in the [Delayed Messages](/docs/developing-contracts/delayed-messages.md) section.

### System signals

Sometimes the system that executes the program should communicate with it in some manner. For example, the program should be notified when the rent is not paid. This can be done by using system signals.

The `handle_signal()` function should be declared in the program to handle system signals. It is executed when the program receives a system signal.

```rust
 #[no_mangle]
extern "C" fn handle_signal() {
    // Handle system signal here
}
```

You can find more details about system signals in the [System Signals](/docs/developing-contracts/system-signals.md) section.
