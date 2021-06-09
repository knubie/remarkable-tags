var parser = require("./parser.js");
var text = require('./newtext.js');

module.exports = function remarkable_tags(md) {
  // Make # a terminal character, otherwise the parser will never run.
  // WARNING: This will conflict with remarkable-furigana.
  md.inline.ruler.at('text', text, {});
  md.inline.ruler.push('tag', parser);

  md.renderer.rules.tag = function render_tags(tokens, i) {
    return tokens[i]['type'] !== 'tag' ? "" : '<tag name="' + tokens[i].name + '"/>';
  }
}
