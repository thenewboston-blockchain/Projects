#### Project Repository
https://github.com/Kycermann/TNB-Shop

#### Issue 
https://github.com/thenewboston-developers/Projects/issues/222

#### Project Lead
Github: https://github.com/Kycermann
Discord: Pixel#5000


#### How would you describe your project?
Sell Discord roles for TNB! This will use Discord's shiny new slash commands, so users will be able to use the bot in any channel without sending public messages.

Sell anything to do with Discord roles:
1. Access to exclusive channels
2. Fancy name colours
3. Username hoisting
4. Optionally sell roles that expire after some time!

#### What problem does this project solve?
This lets people buy exclusive Discord roles with TNB! 

#### Who is the target market?
Discord server owners & admins, and Discord users.

#### How will this project benefit the network and/or the community?
Discord server owners will be able to earn TNB by managing their server, and community members will be able to purchase exclusive roles on the servers they love.

#### How is this project centered around thenewboston?
Roles are bought exclusively with TNB.

#### What is the estimated completion date for this project? (rough estimates are acceptable)
4-12 weeks

#### Please include a detailed roadmap for your project below. This must include a list of all milestones where payments will be awarded upon completion of each.
1. Create Discord bot
2. Create web based admin panel (optional)
3. Collect & display statistice online (optional)

#### What is your Discord username?
Pixel#5000

# Milestone Details

---

#### Discord Bot

Commands:
/roleshop admin set_account_number TNB_ACCOUNT_NUMBER - Sets the TNB wallet to receive funds
/roleshop admin set_log_channel #Channel - Sets the channel to send log messages to
/roleshop admin sell @Role [Price: 100 TNB] [Optional time: 30 days] - Puts a role up for sale
/roleshop admin give @Role @User [Optional time: 30 days] - Give a role to a user
/roleshop admin list - Lists all role sales (could include the same role multiple times)
/roleshop admin remove SaleId - Removes a particular role sale from the shop
/roleshop admin info - Shows how many times each role was bought

/roleshop list - Lists available roles & prices
/roleshop buy @Role

To buy a role, users will send TNB to the given account number with the memo: "<Discord User ID> <Sale ID>".
This memo will be given to copy/paste when the user uses `/roleshop buy @Role`.

#### First Milestone Objectives

| # | Objective             | How can auditors verify milestone?     |
| - | --------------------- | -------------------------------------- |
| 1 | Set up Discord bot code | Use the bot, this is the base code :) |
| 2 | Register slash commands | Slash commands are available in the testing Discord server |
| 3 | Scan TNB transactions for role purchases and give out roles | Buy a role, I'll make a test role that costs 1 TNBC |
| 4 | Remove expired roles | The test role will expire after 1 day |
| 5 | /roleshop admin sell @Role [Price: 100 TNB] [Optional time: 30 days] | Use the slash command and then the list command |
| 6 | /roleshop admin set_account_number TNB_ACCOUNT_NUMBER | Use the slash command and then the info one to check that the account numbers match |
| 7 | /roleshop admin list | Use the slash command |
| 8 | /roleshop admin remove SaleId | Use the slash command & then the list command |
| 9 | /roleshop admin info | Use the slash command |
| 10 | /roleshop list | Use the slash command. The list should exclude permanent roles that the user already has |
| 11 | /roleshop buy @Role | Use the slash command, and buy a role using the given memo for an end-to-end test |
| 12 | /roleshop admin give @Role @User [Optional time: 30 days] | Use the slash command |
| 13 | /roleshop admin set_log_channel #Channel | Use the slash command |
| 14 | The bot must keep a list of pending tasks (give/take role) and notify server admin if it doesn't have the right permissions | Take away bot's permissions & see what happens |
| 15 | Make a logo | See the logo |

#### How long do you estimate this first milestone will take to complete?
4-6 weeks

#### Project Wallet
add7f7dc1f719179530f7e6c39cb70b2dd671119b63159e1383b190912b8e1c7
