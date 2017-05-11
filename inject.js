/**
 * inject content
 * @param {string} content
 * @param {object} options
 * @param {string} options.tag
 * @param {string} options.content
 */
function inject(content, options) {
  let tag = options.tag;
  let startTagReg = new RegExp(`<!-- inject:${tag} -->`);
  let endTagReg = /<!-- endinject -->/;
  let toInject = [options.content];

  let startMatch = startTagReg.exec(content);
  if (startMatch) {
    // endTagReg.lastIndex = startTagReg.lastIndex;
    let endMatch = endTagReg.exec(content);
    if (!endMatch) {
      throw new Error(`Missing end tag for start tag: ${startMatch[0]}`);
    }

    let newContent = content.slice(0, startMatch.index);
    newContent += toInject.join('/n');
    newContent += content.slice(endTagReg.lastIndex);

    return newContent;
  }

  return content;
}

module.exports = inject;
