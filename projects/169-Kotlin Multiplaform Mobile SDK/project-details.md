#### Project Repository
https://github.com/thenewboston-developers/Kotlin-SDK

#### Issue 
https://github.com/thenewboston-developers/Projects/issues/169

#### Project Lead
Github: https://github.com/IanArb
Discord: Ian Arbuckle#7689

#### How would you describe your project?
We've already started implementing all the core API endpoints for the Kotlin SDK repository here - https://github.com/thenewboston-developers/Kotlin-SDK

Kotlin Multiplatform Mobile is a framework introduced by Jetbrains to share core business logic across platforms such as Android and iOS. Instead of using cross platform technologies such as React Native or Flutter we can share the business logic and leverage the native capabilities of Android and iOS for better user experience. 

This means we won't have to have 2 projects for each platform, Android and iOS. The core business logic would be written in Kotlin and compiled to the specific platform’s language, Swift/Objective C for iOS and Java/Kotlin for Android. I encourage you to read the official statement and the use cases from Jetbrains. https://kotlinlang.org/lp/mobile/

#### What problem does it solve?
The goal of the Kotlin Multiplatform SDK is to provide a wrapper library for the REST APIs. This will target Android and iOS platforms. It will release an aar library for Android and a cocoapods framework for iOS. 

#### Who is the target market?
Android and iOS apps that wish to integrate the TNB crypto currency into their products.

#### How will this project benefit the network and/or the community?
The opportunity and benefit is to provide SDKs to mobile platforms and unlock our crypto currency in the mobile space. For instance, exchanges such as Coinbase already have mobile SDKs and an app.

#### How is this project centered around thenewboston?
It provides the network calls to the API endpoints in the currency network and exposes them as a wrapper library. This reduces the workload for an app to integrate the API endpoints where it would just need to call the repository for the specific API. e.g. ConfirmationRepository.kt in the SDK implementation to date. 

Example of repository - https://github.com/thenewboston-developers/Kotlin-SDK/blob/master/lib/src/main/java/com/thenewboston/api/confirmationvalidatorapi/repository/ConfirmationRepository.kt

#### What is the estimated completion date for this project? (rough estimates are acceptable)
Since the majority of the endpoints are complete. It is the matter of porting it to iOS and should be completed within 10-12 weeks.

#### Please include a detailed roadmap for your project below. This must include a list of all milestones where payments will be awarded upon completion of each.

SN | Roadmap Name | Estimated Duration
-- | -- | --
1 | Publish SDK to Github packages for integration | 1 Week
2 | Integrate SDK into sample Android app | 2 Weeks
3 | Start porting the SDK into Kotlin Multiplatform Phase 1 - Gradle config | 2 Weeks
4 | Fix the iOS concurrency issues  | 2 Weeks
5 | Publish the SDK into swift package | 2 Weeks
6 | Publish the SDK into iOS framework for Objective C support | 2 Weeks
7 | Integrate into iOS sample app | 2 Weeks
8 | Prepare beta and release candidates for the SDK on Android and iOS | 2 weeks

#### What is your Discord username?
Ian Arbuckle (https://discord.gg/thenewboston)

# Milestone Details

Please include a detailed breakdown of the first milestone including a list of all quantifiable objectives and 
estimated coin value of each. Upon completion of the milestone, each objective will be reviewed by thenewboston team 
and once all objectives have been verified as completed, coins will then be rewarded.

Note that all future detailed milestone breakdowns will be written as a separate GitHub issue. Only the first one is 
included in the project proposal.

---

#### Milestone Description
Testing the integration of Kotlin SDK in Android apps

#### Requested Payment Upon Completion
12500

| # | Objective           | Estimated Value (coins)   |
| - | ------------------- | ------------------------- |
| 1 | Integrate SDK into Android app | 5000 |
| 2 | Publish Android SDK using Github packages | 5000 |
| 3 | Testing the SDK library | 2500 |

#### Milestone Description
Porting Kotlin SDK into Kotlin Multiplatform Mobile

#### Requested Payment Upon Completion
27500

| # | Objective           | Estimated Value (coins)   |
| - | ------------------- | ------------------------- |
| 1 | Configure gradle to port to KMM | 5000 |
| 2 | Make the concurrency model compatible with iOS | 5000 |
| 3 | Integrate into a sample iOS app (native) | 5000 |
| 4 | Publish Swift Package  | 5000 |
| 5 | Publish framework for Objective C compatibility  | 5000 |
| 6 | Beta testing | 2500 |

				  |

#### Project Account
N/A
