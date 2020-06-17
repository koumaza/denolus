import { parse } from '../../deps.ts';

const result = parse(`
test: toto
foo:
  bar: True
  baz: 1
  qux: ~
`);
console.log(result);

const expected = '{ test: "toto", foo: { bar: true, baz: 1, qux: null } }';
if (Deno.inspect(result) === expected) {
    console.log('Output is as expected.');
} else {
    console.error('Error during parse. Output is not as expect.', expected);
}
