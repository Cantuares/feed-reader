/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    describe('RSS Feeds', function() {
        /* tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
		
		// I could have put all the validations in a single loop but I chose to separate to make it easier to identify where the test failed.

        /* test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
		it('has defined url', function() {
			allFeeds.forEach(function(feed) {
				expect(feed.url).toBeDefined();
				expect(feed.url.length).not.toBe(0);
			});
		});
		
        /* test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
		it('has defined name', function() {
			allFeeds.forEach(function(feed) {
				expect(feed.name).toBeDefined();
				expect(feed.name.length).not.toBe(0);
			});
		});
		
	   /* check if feeds has exceeded entries limit. */
		it('has limit exceeded', function() {
			expect(allFeeds.length).toBeGreaterThan(0);
		});
    });

	describe('The Menu', function() {
		var bodyEL, menuIcon, isHidden;
		
		/* to reduce redundant codes. */
		beforeEach(function() {
			menuIcon = $('.menu-icon-link');
			bodyEL = $('body');
			isHidden = bodyEL.hasClass('menu-hidden');
		});
		
        /* test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
		it('hidden by default', function() {
			/* NOTE: I decided to verify the class instead of the menu visibility
			 * because the menu use the transform and transition css properties
			 * to manipulate your own state.
			 */
			expect(isHidden).toBe(true);
		});
		
         /* test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
		it('state change when clicked', function() {
			if (bodyEL.hasClass('menu-hidden')) {
				menuIcon.click();
				expect(bodyEL.hasClass('menu-hidden')).toBe(false);
			}
			if (!bodyEL.hasClass('menu-hidden')) {
				menuIcon.click();
				expect(bodyEL.hasClass('menu-hidden')).toBe(true);
			}
		});
	});

	describe('Initial Entries', function() {
		// clear
        /* test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */	
		beforeEach(function(done) {
			loadFeed(0, function() {
				done();
			});
		});
		
		it('has one entry', function() {
			// feed has content?
			expect($('.feed .entry').length).not.toBe(0);
		});
	});
	
	describe('New Feed Selection', function() {
        /* test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
		var container, feedUdacityBlog, feedCssTrick;
		
		beforeEach(function(done) {
			loadFeed(1, callback1.bind(null, done)); // load csstricks feed.
		});
		
		function callback1(done) {
			container = $('.feed'),
			feedUdacityBlog = container.html();
			loadFeed(0, callback2.bind(null, done)); // load udacity feed.
		}
		
		function callback2(done) {
			container = $('.feed'),
			feedCssTrick = container.html();
			done();
		}
		
		it('has two different feeds', function() {
			expect(feedUdacityBlog).not.toBe(feedCssTrick);
		});
	});
}());
