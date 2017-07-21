const scribble = require('scribbletune');


// single_hit
let singleHit = scribble.clip({
    note: ['c4'],
    pattern: 'x' + '-'.repeat(127)
});
scribble.midi(singleHit, 'outro_single_hit.mid');


// hats
let hats = scribble.clip({
    notes: ['c4'],
    pattern: 'x'.repeat(12),
    acentMap: '--x-'.repeat(3)
});
let hats32 = scribble.clip({
    notes: ['c4'],
    noteLength: '1/32',
    pattern: 'x_xxx_x_'
});
scribble.midi(hats.concat(hats32), 'outro_hats.mid');

// hats_break
let hatsBreak = scribble.clip({
    note: ['c4'],
    pattern: 'x-----x-x-------x---x---x-------x-x---x-x---x-x-xxx--x-x-x------'
});
scribble.midi(hatsBreak, 'outro_hats_break.mid');


// kick


// kick_break


// synth
const getMelody = (firstNode) => {
    let clip1 = scribble.clip({
        notes: [firstNode, 'g#3', 'a3'],
        pattern: 'x_xx'.repeat(7)
    });

    let clip2 = scribble.clip({
        notes: [firstNode, 'a3', 'b3'],
        pattern: 'x_xx'
    });
    return clip1.concat(clip2);
};
let fSharpClip = getMelody('f#3');
let eClip = getMelody('e3');
let dClip = getMelody('d3');
let cSharpClip = getMelody('c#3');
scribble.midi(fSharpClip.concat(eClip, dClip, cSharpClip), 'outro_synth.mid');


// synth break
const getMelodyBreak = (firstNode) => {
    let clip1 = scribble.clip({
        notes: [firstNode, 'g#3', 'a3', firstNode, firstNode, 'g#3', 'a3', 'g#3', 'a3'],
        pattern: 'x_xx--x-x_xx--xx'
    });
    let clip2 = scribble.clip({
        notes: [firstNode, 'g#3', 'a3', firstNode, 'g#3', 'a3', firstNode, 'g#3', 'a3'],
        pattern: 'x_xxx_xxx_xx--x-'
    });
    return clip1.concat(clip2);
};
fSharpClip = getMelodyBreak('f#3');
eClip = getMelodyBreak('e3');
dClip = getMelodyBreak('d3');
cSharpClip = getMelodyBreak('c#3');
scribble.midi(fSharpClip.concat(eClip, dClip, cSharpClip), 'outro_synth_break.mid');


// melody
let m1 = scribble.clip({
    notes: 'e4,g#4,e4,f#4,e4,g#4,e4,f#4,d4,f#4'.split(','),
    pattern: 'xx-xx-xx-xx-x-x-'.repeat(2)
});
let m2 = scribble.clip({
    notes: 'f4,a4,f4,g4,f4,a4,f4,g4,d#4,g4'.split(','),
    pattern: 'xx-xx-xx-xx-x-x-'.repeat(2)
});
let m3 = scribble.clip({
    notes: 'f#4,a#4,f#4,g#4,f#4,a#4,f#4,g#4,e4,g#4'.split(','),
    pattern: 'xx-xx-xx-xx-x-x-'.repeat(2)
});
scribble.midi(m1.concat(m2, m3, m2), 'outro_melody.mid');


// bass
const getBassLine = (note) => {
    return scribble.clip({
        notes: [note],
        pattern: '--x-x-x-'.repeat(8),
        noteLength: '1/32'
    });
};
scribble.midi(getBassLine('f#3').concat(getBassLine('e3'), getBassLine('d3'), getBassLine('c#3')), 'outro_bass.mid');


// clap
let clap = scribble.clip({
    notes: ['c4'],
    pattern: '-x---------------x'
});
scribble.midi(clap, 'outro_clap.mid');