const scribble = require('scribbletune');

// perc
let perc1 = scribble.clip({
    note: ['c2', 'c#2', 'd2', 'd#2'],
    pattern: 'x-x-x--x',
    sizzle: true,
    shuffle: true
});
let perc2 = scribble.clip({
    note: ['c2', 'c#2', 'd2', 'd#2'],
    pattern: 'x-x-xxxx',
    sizzle: true,
    shuffle: true
});
scribble.midi(perc1.concat(perc1, perc1, perc2), 'intro_perc.mid');


// bass
let bass = scribble.clip({
    note: ['f#2'],
    pattern: 'x-'.repeat(8)
});
scribble.midi(bass, 'intro_bass.mid');


// kick
let kick = scribble.clip({
    note: ['c4'],
    pattern: 'x---'.repeat(4)
});
scribble.midi(kick, 'intro_kick.mid');


// snare
let snare = scribble.clip({
    note: ['c4'],
    pattern: '----x-----------'
});
scribble.midi(snare, 'intro_snare.mid');


// clap
let clap = scribble.clip({
    note: ['c3'],
    pattern: '------------x---'
});
scribble.midi(clap, 'intro_clap.mid');


// hats
let hats = scribble.clip({
    note: ['c4'],
    pattern: '--x-'.repeat(4)
});
scribble.midi(hats, 'intro_hats.mid');


// snare_rise
let snare_rise = scribble.clip({
    note: ['c4'],
    pattern: 'x'.repeat(16),
    accentMap: [5, 10, 15, 20, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85]
});
scribble.midi(snare_rise, 'intro_snare_rise.mid');