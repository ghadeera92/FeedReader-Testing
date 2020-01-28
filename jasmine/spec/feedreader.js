/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(function() {
    /* FIRST SUITE
    * This suite is all about the RSS feeds definitions..
    */
    describe("RSS Feeds", function() {
        /* SPEC 1
        * to insure all feeds are defined and not empty..
        */
        it("all Feeds are defined", function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* SPEC 2
        * to insure all feeds URL are defined and not empty..
        */
         it("all Feeds URL are Defined", function(){
             for (let feed in allFeeds) {
               expect(allFeeds[feed].url).toBeDefined();
               expect(allFeeds[feed].url).not.toBe("");
           };
         });

         /* SPEC 3
         * to insure all feeds name are defined and not empty..
         */
         it("all Feeds Name are Defined", function(){
           for(let feed in allFeeds){
             expect(allFeeds[feed].name).toBeDefined();
             expect(allFeeds[feed].name).not.toBe("");
           };
         });
    });


    /* SECOND SUITE
    * This suite is all about menu..
    */
    describe("The menu", function(){
      let menu = $('body');
      let icon = $('.menu-icon-link');
      /* SPEC 1
      * to insure menu element is hidden..
      */
        it("Menu Element is Hidden", function(){
          expect(menu.hasClass('menu-hidden')).toBe(true);
        });

        /* SPEC 2
        * to insure visibility changed when clicked..
        */
        it("Change Visibility when Icon is Clicked", function(){
          icon.click();
          expect(menu.hasClass('menu-hidden')).toBe(false);
          icon.click();
          expect(menu.hasClass('menu-hidden')).toBe(true);
        });

    });

    /* THIRD SUITE
    * This suite is all about initial entries..
    */
    describe("Initial Entries", function(){
      /* SPEC 1
      * to insure loadFeed Function called and completes its Work.
      * and feed has at least one entry
      */
         beforeEach(function(done) {
             loadFeed(0, done);
         });

         it('Feed has at Least One Entry', function() {
           let entryWithinFeed = $('.feed .entry');
             expect(entryWithinFeed.length).toBeGreaterThan(0);
         });
       });

       /* FOURTH SUITE
       * This suite is all about new feed..
       */
      describe("New Feed Selection", function(){
        /* SPEC 1 
        * to insure new feed is loaded
        */
          let currentFeed, updatedFeed;

          beforeEach(function(done) {
              loadFeed(0, function() {
                currentFeed = $('.feed').html();

                  loadFeed(1, function(){
                      updatedFeed= $('.feed').html();
                      done();
                  });
              });
          });

          it('New Feed is Loaded', function() {
              expect(currentFeed).not.toBe(updatedFeed);
          });

           });
}());
