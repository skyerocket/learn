/************************************
* Practise - my solution
*************************************/

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

const findString = (s, match) => {
	const matchStrArr = match.split('');
	let prevIndex = null;
	let found = false;
	[...s].forEach((char,i) => {
		if (matchStrArr.length === 0) found = true
		if (char === matchStrArr[0] && ((prevIndex + 1) === i || !prevIndex)) {
			prevIndex = i
			matchStrArr.shift()
		}
	})
	return found
}

const findABCDEF2 = s => s.includes('abcdef')

const findABCEDF3 = s => s.search('abcdef')

// find 'abcabx' using state machine

const find = s => {
	let state = start
	for (let c of s) {
		state = state(c)
	}
	return state === end
}

const start = c => {
	if (c === 'a') 
		return foundA
	else 
		return start
}

const end = c => end

const foundA = c => {
	if (c === 'b')
		return foundB;
	else
		return start(c)
}

const foundB = c => {
	if (c === 'c')
		return foundC;
	else
		return start(c)
}

const foundC = c => {
	if (c === 'a')
		return foundA2;
	else
		return start(c)
}

const foundA2 = c => {
	if (c === 'b')
		return foundB2;
	else
		return start(c)
}

const foundB2 = c => {
	if (c === 'x')
		return end;
	else
		return start(c)
}

// find 'abababx' using state machine

const find = s => {
	let state = start
	for (let c of s) {
		state = state(c)
	}
	return state === end
}

const start = c => {
	if (c === 'a') 
		return foundA
	else 
		return start
}

const end = c => end

const foundA = c => {
	if (c === 'b')
		return foundB;
	else
		return start(c)
}

const foundB = c => {
	if (c === 'a')
		return foundA2;
	else
		return start(c)
}

const foundA2 = c => {
	if (c === 'b')
		return foundB2;
	else
		return start(c)
}

const foundB2 = c => {
	if (c === 'a')
		return foundA3;
	else
		return start(c)
}

const foundA3 = c => {
	if (c === 'b')
		return foundB3;
	else
		return start(c)
}

const foundB3 = c => {
	if (c === 'x')
		return end;
	else
		return start(c)
}

// find any pattern using state machine + KMP algorith *

// TODO understand this

// reference : https://juejin.cn/post/6856374004421722125
// https://www.clloz.com/programming/front-end/js/2020/07/24/fsm-kmp/

// function PMT(p) {
// 	let i = 1,
// 		j = 0,
// 		arr = [0];

// 	while (i < p.length) {
// 		if (p[i] === p[j]) {
// 			j++;
// 			arr[i] = j;
// 			i++;
// 		} else if (j === 0){
// 			arr[i] = 0;
// 			i++;
// 		} else {
// 			j = arr[j - 1];
// 		}
// 	}
// 	return arr;
// }

// function match(s, p) {
//   let found = false
// 	let i = 0,
// 		j = 0,
// 		arr = PMT(p);

// 	while (i < s.length) {
// 		if (j === -1 || s[i] === p[j]) {
// 			if (j === arr.length - 1) found = true;
// 			i++;
// 			j++;
// 		} else {
// 			j = arr[j];
// 		}
// 	}
// 	return found;
// }


/************************************
* Homework
*************************************/

// 1. node server : week1-server.js

