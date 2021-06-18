#### Project Repository
https://github.com/tomijaga/Tnb-HD-Wallet

#### Issue 
https://github.com/thenewboston-developers/Projects/issues/198

#### Project Lead
Github: https://github.com/tomijaga
Discord: Tomi#8409

# Project Details

#### How would you describe your project?
An HD Wallet, or Hierarchical Deterministic wallet, is a new-age digital wallet that automatically generates a hierarchical tree-like structure of private/public addresses (or keys), thereby addressing the problem of the user having to generate each one on their own.

![image](https://user-images.githubusercontent.com/50385769/115404413-4dbb2a00-a1bb-11eb-8ef7-4d4512de5ce8.png)


#### What problem does this project solve?
This project solves privacy problems and makes it easier to manage multiple accounts

#### Who is the target market?
Anyone creating multiple accounts/wallets.

#### How will this project benefit the network and/or the community?
- Anyone with a HD wallet only needs to backup the seed key. It is the only backup they will ever need.
- You can generate an infinite number of accounts with a single seed key.
- Exchanges, Escrows and Wallet apps can generate many receiving addresses any time they receive coins from users of their app/service. HD wallets can also generate public keys without having to generate their private keys first which makes it more secure for these apps/services.
- Anyone can protect their financial privacy.

#### How is this project centered around thenewboston?
It creates and manages HD wallets on thenewboston blockchain network

#### What is the estimated completion date for this project? (rough estimates are acceptable)
Early June

#### Please include a detailed roadmap for your project below. This must include a list of all milestones where payments will be awarded upon completion of each.
This project will be an implementation of the information found at https://learnmeabitcoin.com/technical/hd-wallets and will use `tweetnacl` for hashing.

The project will provide hd wallet modules/packages in all the major languages so it is accessible by all developers. 

I have a code example [here](https://replit.com/@TomiJaga/tweetnacl-1#index.js). You will notice that the public and private keys for the child accounts are the same no matter how many times you run the program.

#### What is your Discord username?
Tomi#8409 (https://discord.gg/thenewboston)

#### Additional files and documentation including architectural diagrams, wireframes, research documents, visuals, etc… (optional)
* Typescript Package
    * HD Wallets
        * Seed Generation
        * Mnemonic sentence generation 
        * Accounts generation with master extended private key
        * Accounts generation with master extended public key
        * Normal and Hardened child accounts
        * Derivation Paths
        * Test
        * Docs

    * Example Website
        * Create HD Wallets
        * Display all accounts in HD wallet
        
        > Note: You should not be put your master seed on websites because they could store them 
and gain access to all your accounts
* Python Module
    * Same implementation as Typescript package
 
* C++ Module    
    * Same implementation as Typescript package
    
* Other Major Languages

# Milestone Details

Please include a detailed breakdown of the first milestone including a list of all quantifiable objectives and 
estimated coin value of each. Upon completion of the milestone, each objective will be reviewed by thenewboston team 
and once all objectives have been verified as completed, coins will then be rewarded.

Note that all future detailed milestone breakdowns will be written as a separate GitHub issue. Only the first one is 
included in the project proposal.

---

#### Milestone Description
Write a typescript npm package for HD wallets that is compatible with the [thenewboston-js sdk](https://github.com/thenewboston-developers/thenewboston-js), complete with documentation and tests.

#### Requested Payment Upon Completion
130000 

| # | Objective           | Estimated Value (coins)   |
| - | ------------------- | ------------------------- |
| 1 | Implementation in typescript | 90000 |
| 2 | Testing | 25000 |
| 3 | Documentation | 15000 |

#### Project Reviewer
Preferred: @itsnikhil 

#### Project Wallet
fdcae93c70a143ed36a188389e6aa37b446d3ee244e96cae0ef758672860d8d2
