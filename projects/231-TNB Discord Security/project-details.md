#### Project Repository
N/A

#### Issue 
https://github.com/thenewboston-developers/Projects/issues/231

#### Project Lead
Github: https://github.com/Kycermann
Discord: Pixel#5000


#### How would you describe your project?
Imagine someones accidentally pastes their signing key into Discord!

This is a Discord bot that will:
- Immediately create a new TNB wallet
- Send all the funds from the compromised wallet to the new wallet
- DM the user who pasted the signing key with the signing key of the new wallet
- Publicly reply to the message with the exposed signing key explaining that it's dangerous to paste them, that signing key shouldn't be used anymore and that the bot has cleaned out that wallet into a new, safe wallet

The bot will not store signing keys for any longer than necessary. Once a DM was successfuly sent, the signing key will be deleted from the bot's database.

#### What problem does this project solve?
People who accidentally send signing keys in Discord will be protected.

#### Who is the target market?
Discord users who own TNB coins.

#### How will this project benefit the network and/or the community?
It will prevent (or at least reduce) TNB coin theft.

#### How is this project centered around thenewboston?
The bot will protect users' TNB funds.

#### What is the estimated completion date for this project? (rough estimates are acceptable)
2-4 weeks

#### Please include a detailed roadmap for your project below. This must include a list of all milestones where payments will be awarded upon completion of each.


#### What is your Discord username?
Pixel#5000

# Milestone Details

---

#### First Milestone Description

When a user sends a message that contains a TNB signing key:
- Immediately create a new TNB wallet
- Send all the funds from the compromised wallet to the new wallet
- DM the user who pasted the signing key with the signing key of the new wallet
- Publicly reply to the message with the exposed signing key explaining that it's dangerous to paste them, that signing keys shouldn't be pasted in public channels and that the bot has protected the funds

#### First Milestone Objectives

| # | Objective             | How can auditors verify milestone?     |
| - | --------------------- | -------------------------------------- |
| 1 | Scan all Discord messages | See the code |
| 2 | Detect TNB signing keys in Discord messages (since account numbers are the same format as signing keys, they will be treated like signing keys) | The bot will send a message |
| 3 | If the balance is 0 it could be an account number, so don't process it | Paste an account number into chat |
| 4 | If the balance is enough to withdraw more than 3 TNB (so 6 or above), then proceed to withdraw |
| 5 | DM the user with their new signing key, and if they have DMs disabled, mention them in a channel asking to enable DMs and use /recover_compromised_wallets | Try the command |
| 6 | /recover_compromised_wallets | DM the user with their new signing key and delete the new signing key from the bot's database | Try the command |
| 7 | If a user pastes a signing key or something that could be parsed as a signing key but doesn't have a balance, warn them not to paste signing keys | Paste an account number for instance |

#### How long do you estimate this first milestone will take to complete?
2-6 weeks (I'm working on other projects at the same time)

#### Project Wallet
f1decb80339a4bb6c089b77cbac553e23a6ca86b0cfc64adb8c8eb8f8b57d815
