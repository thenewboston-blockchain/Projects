#### Project Repository
N/A

#### Issue 
https://github.com/thenewboston-developers/Projects/issues/217

#### Project Lead
Github: https://github.com/Kycermann
Discord: Pixel#5000

#### How would you describe your project?
Say hello to the TNB hero game!

I've kept the MVP scope to a minimum- there's much more to come.

Features:
- Profile: skin, experience / level, item inventory, equipped items, HP, fight power, magic points
- Profile item slots: weapon, armour, ring, amulet
- Profile item inventory
- Items have additive or multiplicative: HP, fight power, XP
- Items have stars
- Combine two N star items into an N+1 star item 
- Items are common, rare, legendary or mythical (depending on stats / skins)
- Tournaments: players fight one another to score in a leaderboard and win items
- Sell items on the market- players can bid magic points for your items
- Collect daily items & skins (or in a particlar hour or minute! Game masters release them)

#### What problem does this project solve?
It's a game based on TNB- look at Crypto Kittens!

#### Who is the target market?
Interested in crypto? Investing? Playing games!

#### How will this project benefit the network and/or the community?
Provides value for TNB- investing TNB into the game will further your progress.

#### How is this project centered around thenewboston?
The game is entirely on-chain!

#### What is the estimated completion date for this project? (rough estimates are acceptable)
For the MVP, August

#### Please include a detailed roadmap for your project below. This must include a list of all milestones where payments will be awarded upon completion of each.
- Design detailed game mechanics & write API contracts
- Create a reducer that will reduce the TNB transaction history into the current game state
- Create the reducer API that will allow anyone to run a node and easily fetch/update data without sharing their signing keys
- Comission art for 100 in-game items
- Design the game UI
- Create a web based game client that will hook into a hosted reducer node
- Release the MVP!
- More milestones TBA

#### What is your Discord username?
Pixel#5000

# Milestone Details

---

#### Backend

- Design detailed game mechanics & write API contracts
- Create a reducer that will reduce the TNB transaction history into the current game state
- Create the reducer API that will allow anyone to run a node and easily fetch/update data without sharing their signing keys

#### First Milestone Technical Objectives

| # | Objective             | How can auditors verify milestone?     |
| - | --------------------- | -------------------------------------- |
| 1 | Design detailed game mechanics. This will be a document detailing the game's mechanics and functionality. | Read a long Google Doc :) |
| 2 | Design reducer node API contract. This is a specification about how clients will interact with the game. | Read a Markdown file :) |
| 3 | Design public forward compatible game format. This is how game events will be stored on the TNB chain as memos. The format must be extensible. | Read a Markdown file, and look at a TNB TX history |
| 4 | Code reader TX to input TNB TX data into the system. This program will keep track of new TNB transactions to the game address and pass them on to the reducer. | Look at code |
| 5 | Code reducer that maintains a game state & updates it with input TXs. This is the code that maintains the game's state, e.g. which items you have and what's equipped. | Look at code |
| 6 | Code reducer API that returns aspects of the current game state & confidence level. This is an HTTP API that returns aspects of the game, e.g. which items a particular player has. | Call the API |

Features:
- Profile: skin, experience / level, item inventory, equipped items, HP, fight power, magic points
- Profile item slots: weapon, armour, ring, amulet
- Profile item inventory
- Items have additive or multiplicative: HP, fight power, XP
- Items have stars
- Combine two N star items into an N+1 star item 
- Items are common, rare, legendary or mythical (depending on stats / skins)
- Tournaments: players fight one another to score in a leaderboard and win items
- Sell items on the market- players can bid magic points for your items
- Collect daily items & skins (or in a particlar hour or minute! Game masters release them)

#### How long do you estimate this first milestone will take to complete?
1-2 months

#### Project Wallet
add7f7dc1f719179530f7e6c39cb70b2dd671119b63159e1383b190912b8e1c7

