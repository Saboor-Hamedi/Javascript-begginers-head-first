console.log('Hello world');
console.log([1, 3, 4,5, 'Hello World', true, false, null]);
// console info

console.info('This is information');
console.info({'Firstname: ': 'Abdul Saboor', 'Lastname': 'Hamedi'});
// clear the console 
console.clear();
// console error 
console.error('Error in line number 1');
// console warn 
console.warn('This is a warning')
// console assert 
console.assert(document.getElementById('main'), 'No correct ID found');
// console count 
console.count(['Hello', 'How are you', 'Good'])
console.count('Hello World')
let i =0;
while(i <3){
    console.count();
    i++;
}
// console table 
console.table(['Hello', 'How are you', 'I am good']);
const people = [
    ['Name', 'Saboor'],
    ['Age', '30'],
    ['Data of birth', '1993'],
    ['Counter', 'Afghanistan'],
];
console.table(people);
// group 
console.group('Different types of Languages')
console.log('Javasript');
console.log('Mysql');
console.log('CSS');
console.log('PHP');
console.groupEnd();
console.groupCollapsed();
//
