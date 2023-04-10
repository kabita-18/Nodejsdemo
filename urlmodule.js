import url from 'url';

const myURL = new URL('https://example.org');
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';

console.log(myURL.href);
console.log(myURL.origin);
console.log(myURL.pathname);
console.log(myURL.search);
