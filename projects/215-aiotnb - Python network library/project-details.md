#### Project Repository
https://github.com/AnonymousDapper/aiotnb

#### Issue 
https://github.com/thenewboston-developers/Projects/issues/215

#### Project Lead
Github: https://github.com/AnonymousDapper
Discord: AnonymousDapper#7467

# Project Details

#### How would you describe your project?
The Project ("aiotnb") is a reimplementation of the thenewboston Python library using asyncio coroutines, a robust HTTP response object system (instead of simply returning JSON data or raising on an error), and fully-checked type annotations.

#### What problem does this project solve?
1) Asyncio coroutines
    The Python library currently in use relies on standard functions ("sync") for the API calls. These functions all run in series, meaning a function that takes a long time to complete will block everything else until it has completed.
    Using asyncio coroutines ("async") alleviates this issue as coroutines hand back control while they are waiting on something (ie. a network request or file read). This allows a significantly greater number of blocking calls (such as API calls) to be made in the same time span.

2) HTTP response object system
    By validating and parsing the response JSON into a Python class, we can ensure that all API responses are 100% covered and no errant typos in data make their way downstream to the end-user.

3) Fully-checked type annotations
    By utilizing a static type checker, it is possible to catch and correct a myriad of possible errata in software before it even runs. By properly annotating types, the software also becomes self-documenting, in that an IDE can read the type annotations and provide information immediately while editing.

#### Who is the target market?
TNB tool developers, TNB integration developers, and anyone else who might use the current Python library.

#### How will this project benefit the network and/or the community?
This will be a significant improvement in developer experience for anyone writing Python software connecting to the TNB network, both in actual programming, via coroutines and the object response system, as well as improved documentation from the fully-checked types. Developer time should also improve because developers are no longer spending time parsing and validating the API responses themselves.

#### How is this project centered around thenewboston?
This project is a library that directly utilizes the primary network APIs (Bank, Validator, Confirmation Validator).

#### What is the estimated completion date for this project? (rough estimates are acceptable)
Since this project relies on the network API, it must be updated as the network is updated, meaning no actual completion date can be given.

That said, full functional status (tests, documentation, etc) with the network in its current state should be accomplished in 3-5 months. (This relies heavily on developer time commitments, as there are only three of us for now). (EDIT: 4-5 to 3-5, "two of us" to "three of us")

All estimates are doubled to allow for real-life intervention and other priorities.

#### Please include a detailed roadmap for your project below. This must include a list of all milestones where payments will be awarded upon completion of each.
1) Library Core
    - HTTP
        - flexible system to be created once and use for all API calls
    - Exceptions
        - exception base classes
        - exceptions likely to be needed
    - Type-checking
    - Validation
        - abstract validator to take schema, return result
    - Testing
        - HTTP
        - Validator
    - Performance benchmark
        - Comparing synchronous library to async

2) Bank API Implementation
    - HTTP calls to all bank endpoints
    - Type-checking
    - Documentation
    - Validation
    - Testing

3) Primary Validator API Implementation
    - HTTP calls to all PV endpoints
    - Type-checking
    - Documentation
    - Validation
    - Testing

4) Confirmation Validator API Implementation
    - HTTP calls to all CV endpoints
    - Type-checking
    - Documentation
    - Validation
    - Testing

5) Fully-functional Example
    - Documentation
    - Should-fail and should-pass tests
    - Exact details TBD

6) Publish
    - Final documentation proofing
    - Final test checks and validation
    - Publish documentation to readthedocs.io
    - Publish python package to pip

#### What is your Discord username?
AnonymousDapper#7467 (aareon#0913, Abhay#6969 as collaborators) (EDIT: added Abhay)

#### Additional files and documentation including architectural diagrams, wireframes, research documents, visuals, etc… (optional)
N/A

# Milestone Details

Please include a detailed breakdown of the first milestone including a list of all quantifiable objectives. Upon 
completion of the milestone, each objective will be reviewed by thenewboston team and once all objectives have been 
verified as completed, coins will then be rewarded.

Note that all future detailed milestone breakdowns will be written as a separate GitHub issue. Only the first milestone 
is included in this project proposal.

---

#### First Milestone Description
Library core implementation includes the frameworks that underpin the user-facing components of the library. This includes an HTTP client, an exceptions library, a JSON schema validator, and component stubs to be implemented at later milestones.

(Exceptions library is not exhaustive and more exception types may be discovered to be necessary later on down the line.)

#### First Milestone Objectives

| # | Objective             | How can auditors verify milestone?            |
| - | --------------------- | --------------------------------------------- |
| 1 | HTTP client system    | Check/run core http tests in git repo         |
| 2 | Exceptions library    | View exceptions library source in git repo    |
| 3 | Type checking         | Run mypy (python type checker) on the project |
| 4 | JSON validation       | Run JSON validation tests in git repo         |
| 5 | Testing               | Run test suite in git repo                    |
| 6 | Performance benchmark | Run benchmark and see improved throughput     |


#### How long do you estimate this first milestone will take to complete?
2 weeks (EDIT: 4 weeks to 2 weeks)

#### Project Wallet
16c9d5010701093e4427b12d3674024346a6ac90f7cc3cbebc6d3d041d435fdd