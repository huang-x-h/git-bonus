/**
 * inject content
 * @param {string} content
 * @param {object} options
 * @param {string} options.tag
 * @param {string} options.content
 */
function inject(content, options) {
  let tag = options.tag;
  let startTagReg = new RegExp(`<!-- inject:${tag} -->`, 'g');
  let endTagReg = /<!-- endinject -->/;
  let toInject = [options.content];

  let startMatch = startTagReg.exec(content);
  while (startMatch) {
    endTagReg.lastIndex = startTagReg.lastIndex;
    let endMatch = endTagReg.exec(content);
    if (!endMatch) {
      throw new Error(`Missing end tag for start tag: ${startMatch[0]}`);
    }

    let newContent = content.slice(0, startMatch.index);
    toInject.unshift(startMatch[0]);
    newContent += toInject.join('\n');
    newContent += content.slice(endTagReg.lastIndex);

    content = newContent;
    startMatch = startTagReg.exec(content);
  }

  return content;
}

module.exports = inject;
