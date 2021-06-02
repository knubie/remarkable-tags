module.exports = function parser(state, silent) {
  var ch, code, match, pos = state.pos, max = state.posMax;

  if (state.src.charCodeAt(pos) !== 35/* # */) { return false; }
  if (pos + 1 >= max) { return false; }

  var start = pos;
  lastChar = start > 0 ? state.src.charCodeAt(start - 1) : 0x20/* space */;
  nextChar = state.src.charCodeAt(start + 1);
  if (lastChar !== 0x20/* space */) { return false; }
  if (nextChar === 0x20/* space */) { return false; }

  name_start = start + 1
  pos = name_start

  while (pos + 1 < max) {
    if (state.src.charCodeAt(pos + 1) === 0x20/* space */) {
      break;
    }
    pos++;
  }

  state.pos = pos + 1;

  if (!silent) {
    state.push({ type: 'tag', name: state.src.slice(name_start, pos + 1) });
  }

  return true;
}
