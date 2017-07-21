const scribble = require('scribbletune');


// melody
let melody1 = scribble.clip({
    notes: scribble.scale('f#', 'minor').slice(0, 4),
    pattern: 'xx-xx-xx-xx-x-x-'
});
let melody2 = scribble.clip({
    notes: scribble.scale('g#', 'phrygian').slice(0, 4),
    pattern: 'xx-xx-xx-xx-x-x-'
});
scribble.midi(melody1.concat(melody2), 'verse_melody.mid');


// bass
let bass1 = scribble.clip({
    notes: ['f#3'],
    pattern: '--xx--xx--xx--x_--xx--xx--xx'
});
let bass2 = scribble.clip({
    note: ['c3'],
    pattern: '--x_'
});
scribble.midi(bass1.concat(bass2), 'verse_bass.mid');


// string
const getChord = chord => scribble.clip({
    notes: [chord],
    pattern: 'x' + '_'.repeat(31)
});
scribble.midi(getChord('c#sus4-5').concat(getChord('dmaj-5'), getChord('Bm'), getChord('emaj-5')), 'verse_string.mid');


// snare
let snare = scribble.clip({
    notes: ['c4'],
    pattern: '----x-------x---'
});
scribble.midi(snare, 'verse_snare.mid');


// clap
let clap = scribble.clip({
    notes: ['c4'],
    pattern: '-------x------x-'
});
scribble.midi(clap, 'verse_clap.mid');