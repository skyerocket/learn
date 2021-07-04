// find 'a' - no state machine

const findA = s => {
  let found = false;
  [...s].forEach(char => {if (char === 'a') found = true});
  return found
}

// find 'ab' - no regex no state machine

const findAB = s => {
	let aIndex;
	let found = false;
	[...s].forEach((char, i) => {
		if (char === 'a') {
			aIndex = i 
		} else if (char === 'b' && (aIndex + 1) === i) {
			found = true
		}
	})
	return found
}

// find 'abcdef' - no regex no state machine

const findABCDEF = s => {
	const matchStrArr = ['a', 'b', 'c', 'd', 'e'];
	let prevIndex;
	let found = false;
	[...s].forEach((char,i) => {
		if (char === matchStrArr[0]) {
			
		}
	})
}

const findABCDEF2 = s => s.includes('abcdef')

const findABCEDF3 = s => s.search('abcdef')

