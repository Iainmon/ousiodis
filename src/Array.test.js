
import ousiodis from './Array'

Array.prototype = ousiodis

ousiodis.range(4).each( n => console.log(n) );

// [1, 11].range();
// domain([0, 100].range());
// intersecting([0, 100].range(), [50, 150].range())
// union([0, 100].range(), [50, 150].range())
// exclusion([0, 100].range(), [50, 150].range());
// const equation = x => Math.sin(x);
// [-400, 400].range().map( x => x * .01 ).map(equation);
