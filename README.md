Feed reader that uses the test-driven development pattern or TDD.
All tests were performed using the test framework [jasmine](https://jasmine.github.io/]).

The following tests were implemented for the perfect functioning of the feed reader.

### List of tests
- [x] Error resolution for undefined variables and array access out of bounds.
- [x] Loop in each feed in the allFeeds object, to ensure this has at least one name and a defined URL and are not empty.
- [x] Ensure that the menu is invisible by default.
- [x] Ensure that the menu has its open and close behavior working.
- [x] Ensure that content has at least one feed after it has loaded asynchronously.
- [x] It has different contents and it does not depend on each other after being loaded twice asynchronously.

# Installation
```sh
$ git clone https://github.com/Cantuares/feed-reader.git
$ cd feed-reader
```

# How to use
Drag the index.html file from the feed-reader folder to your preferred browser and see the tests in action.

If you prefer, check out the [feed reader in action](https://cantuares.github.io/feed-reader/).