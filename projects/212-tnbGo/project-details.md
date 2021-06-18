#### Project Repository
https://github.com/AbhayAysola/tnb-go

#### Issue 
https://github.com/thenewboston-developers/Projects/issues/212

#### Project Lead
Github: https://github.com/AbhayAysola
Discord: Abhay#6969


#### How would you describe your project?
tnbGo is a project which looks to provide an SDK written in Go to interact with thenewboston network.

#### What problem does this project solve?
Many programmers who use languages other than Javascript do not have an easy and simple way to acccess the network.

#### Who is the target market?
Any developers interested in interacting with the chain through Golang

#### How will this project benefit the network and/or the community?
More apps and projects will pop up written in Golang which will be helpful because of Golang's unique features.

#### How is this project centered around thenewboston?
It is an SDK for thenewboston network.

#### What is the estimated completion date for this project? (rough estimates are acceptable)
2-4 weeks from approval

#### Please include a detailed roadmap for your project below. This must include a list of all milestones where payments will be awarded upon completion of each.
**Milestones are subject to change due to change in the beta API**
1. Golang Implementation

    * Account
        * Tests
        * Documentation
        * createAccount
            * From signingKey
            * Random new account
        * createSignature
        * verifySignature
        * verifyKeyPair
    * Node
        * Tests
        * Documentation
        * getAccount
            * balance
            * balance_lock
            * transactions
        * getBlocks
        * postBlocks
        * addTransferRequest
        * getNodes
        * postNodes
    * Block
        * coinTransfer
        * coinLock
        * nodeRegistration
        * nodeBoost
        * schedule
        * usernameRegistration
        * governerApplication
        * votePurchase
        * governerVote
    * Others (Voting, Governance, Lockup Coins)
        * Tests
        * Documentation
        * Not sure about this part yet
    * Build Example App to show how the sdk works.

I am planning to split this into two packages, one as a payment library for developers and the other as a library to maintain the node. (nodeRegistration and such)

#### What is your Discord username?
Abhay#6969

#### Additional files and documentation including architectural diagrams, wireframes, research documents, visuals, etc…
- I will be following the https://github.com/thenewboston-developers/thenewboston-js/ repo and using their implementation as a base.  

# Milestone Details

Please include a detailed breakdown of the first milestone including a list of all quantifiable objectives. Upon 
completion of the milestone, each objective will be reviewed by thenewboston team and once all objectives have been 
verified as completed, coins will then be rewarded.

Note that all future detailed milestone breakdowns will be written as a separate GitHub issue. Only the first milestone 
is included in this project proposal.

---

#### First Milestone Description
Thenewboston account implementation in Golang using crypto libraries.

#### First Milestone Objectives

| # | Objective             | How can auditors verify milestone?     | Estimated Value in coins | Estimated time in Hours |
| - | --------------------- | -------------------------------------- | ------- | ---------------------------------------------- |    
| 1 | createAccount | Check code in Github and verify using the network | 3000 | 3 |
| 2 | createSignature and verifySignature | Check code in Github and verify using the network | 2500 | 3 |
| 3 | verifyKeyPair | Check code in Github and verify using the network | 1500 | 1.5 |
| 4 | Tests | Run the test command in the repo and see if it passes | 3000 | 3 |
| 5 | Documentation| Read the docs | 2500 | 2.5 |

#### How long do you estimate this first milestone will take to complete?
< 1 week

#### Project Wallet
81a1f1f5d167011f96a7e919997c5aca3f79f9389ba865901ab12c7ef1ade556
