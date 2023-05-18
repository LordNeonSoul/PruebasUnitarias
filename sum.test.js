const istanbul = require('istanbul');
const collector = new istanbul.Collector();
const reporter = new istanbul.Reporter();
const sum = require('./sum');

test('sums two numbers', () => {
  expect(sum(1, 2)).toBe(3);
});

collector.add(global['__coverage__']);

// Genera los informes de cobertura
reporter.addAll(['text-summary', 'lcov']);
reporter.write(collector, true, () => {});