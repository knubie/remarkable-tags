# remarkable-tags

## This plugin for remarkable allows you to add hashtags to your document

A tag is a hash character followed by any non-space character.

**Example**:
- `#tag`
- `#my-tag`
- `##why-would-you-do-this?`
- `#日本語`
- `#my.namespace/tag-name`

### try it out

```javascript
var remarkableTags = require("remarkable-tags")
var remarkable = require("remarkable")

var md = new remarkable()

md.use(remarkableTags)

console.log(md.render("This is a #hash-tag"))
```






