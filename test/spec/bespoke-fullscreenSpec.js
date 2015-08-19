Function.prototype.bind = Function.prototype.bind || require('function-bind');

var bespoke = require('bespoke'),
  fullscreen = require('../../lib-instrumented/bespoke-fullscreen.js');

describe("bespoke-fullscreen", function() {

  var deck,
    parent,
    createDeck = function() {
      parent = document.createElement('article');
      for (var i = 0; i < 10; i++) {
        var section = document.createElement('section');
        parent.appendChild(section);
      }

      document.body.appendChild(parent);

      deck = bespoke.from(parent, [
        fullscreen()
      ]);
    },
    destroyDeck = function() {
      if (parent != null) {
        parent.parentNode.removeChild(parent);
      }
    };

  beforeEach(createDeck);
  afterEach(destroyDeck);

  describe("deck.slide", function() {

    beforeEach(function() {
      deck.slide(0);
    });

    it("will be a test one day", function() {
      console.log("write me...");
    });

  });

});
