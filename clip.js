const scribble = require('scribbletune');
//console.log(scribble.scales)
let cMajor = scribble.scale('c','major');
let clip1 = scribble.clip({
    notes: cMajor.filter((a,x)=>x%2===0),
    pattern:'x-x-x-x-x-x-x-x-'
});
let clip2 = scribble.clip({
	notes: cMajor.filter((a,x)=>x%2),
	pattern: 'x-'.repeat(8)
});

scribble.midi(clip1.concat(clip2));