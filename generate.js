const fs = require('fs');
const inject = require('./inject');
const separator = '/n';

var readmePath = './README.md';

function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
}

fs.readFile('./bonus.json', function (err, data) {
  if (err) return;

  let bonus = JSON.parse(data);
  let tocs = [];
  let contents = [];
  bonus.forEach((item) => {
    tocs.push('* [${title}](#' + slugify(item.title) + ')\n');
    contents.push([
      '## ' + data.title,
      '```sh',
      data.tip,
      '```'
    ].join(separator));
  });

  fs.readFile(readmePath, function (err, data) {
    if (err) return;

    let content = data.toString();
    content = inject(content, {
      tag: 'toc',
      content: tocs.join(separator)
    });
    content = inject(content, {
      tag: 'content',
      content: contents.join(separator)
    });

    fs.writeFile(readmePath, content, function (err) {
      if (err) console.error(err);
    })
  })
});
