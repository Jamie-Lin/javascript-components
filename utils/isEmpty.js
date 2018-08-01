/**
 * @description To test whether any type of variable is empty.
 * 
 * @param {*} from - can be any type that want to check.
 */
function _isEmpty (from) {
	
	let isEmpty = false;
	
	if (typeof from === 'string')
		isEmpty = (from === '');
	else if (Array.isArray(from))
		isEmpty = from.length ? false : true;
	else if (from === undefined || from === null)
		isEmpty = true;
	else if (from instanceof Map || from instanceof Set)
		isEmpty = from.size ? false : true;
	else if (typeof from === 'object')
		isEmpty = Object.keys(from).length ? false : true;

	return isEmpty;
}


// test case1. string
const a = 'Hi';
const b = '';
console.log(_isEmpty(a)); // false
console.log(_isEmpty(b)); // true

// test case2. array
const c = [1, 2, 3];
const d = [];
console.log(_isEmpty(c)); // false
console.log(_isEmpty(d)); // true

// test case3. plain object
const e = {
	name: 'Jamie'
};
const f = {};
console.log(_isEmpty(e)); // false
console.log(_isEmpty(f)); // true

// test case4. null / undefined
const g = undefined;
const h = null;
console.log(_isEmpty(g)); // true
console.log(_isEmpty(h)); // true

// test case5. map / set 
const i = new Map();
i.set(1, a);
const j = new Map();
console.log(_isEmpty(i)); // false
console.log(_isEmpty(j)); // true

export default _isEmpty;