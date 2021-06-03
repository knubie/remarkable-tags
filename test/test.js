var Remarkable = require('remarkable');
var remarkable_tags = require('../index.js');
var assert = require('assert');

var md = new Remarkable('full');
md.use(remarkable_tags);

describe('Tags', function () {
  it("Should produce a tag", function () {
    assert.strictEqual(
      md.render('#foobar'),
      '<p><tag name="foobar"/></p>\n'
    );
  });

  it("Should produce a tag in text", function () {
    assert.strictEqual(
      md.render('Some #foobar here.'),
      '<p>Some <tag name="foobar"/> here.</p>\n'
    );
  });

  it("Should produce a tag at the end of a line", function () {
    assert.strictEqual(
      md.render('Hello #world'),
      '<p>Hello <tag name="world"/></p>\n'
    );
  });

  it("Should produce a tag at the end of a line with a new line after.", function () {
    assert.strictEqual(
      md.render('Hello #world\nOh hi there.'),
      '<p>Hello <tag name="world"/>\nOh hi there.</p>\n'
    );
  });

  it("Should produce a tag after a new line", function () {
    assert.strictEqual(
      md.render('Hello\n#world'),
      '<p>Hello\n<tag name="world"/></p>\n'
    );
  });

  it("Should produce multiple tags", function () {
    assert.strictEqual(
      md.render('Some #foobar here. And another #taggy'),
      '<p>Some <tag name="foobar"/> here. And another <tag name="taggy"/></p>\n'
    );
  });

  it("Should work with dashes", function () {
    assert.strictEqual(
      md.render('#my-tag'),
      '<p><tag name="my-tag"/></p>\n'
    );
  });

  it("Should work with slashes", function () {
    assert.strictEqual(
      md.render('#my.cool/tag'),
      '<p><tag name="my.cool/tag"/></p>\n'
    );
  });

  it("Should work with non-latin characters", function () {
    assert.strictEqual(
      md.render('#日本語'),
      '<p><tag name="日本語"/></p>\n'
    );
  });
});
