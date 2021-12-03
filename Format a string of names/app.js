/* Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie' */

function list(arr){
    let len = arr.length;
    if(len==0) return '';
    return arr.slice(0, len-1).map(p=>p.name).join(", ") + (len>1 ? ' & ' : '') + arr[len-1].name;
}

console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]))
console.log(list([ {name: 'Bart'}, {name: 'Lisa'} ]))

/* OR */

function list2(names){
    return names.reduce(function(prev, current, index, array){
      if (index === 0){
        return current.name;
      }
      else if (index === array.length - 1){
        return prev + ' & ' + current.name;
      } 
      else {
        return prev + ', ' + current.name;
      }
    }, '');
}

console.log(list2([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]))
console.log(list2([ {name: 'Bart'}, {name: 'Lisa'} ]))