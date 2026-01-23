function solution(m, musicinfos) {
    const convert = (str) =>
        str.replace(/[A-G]#/g, v => v[0].toLowerCase());

    m = convert(m);

    let answer = "(None)";
    let maxTime = -1;

    for (let info of musicinfos) {
        const [start, end, title, melody] = info.split(",");

        const [sh, sm] = start.split(":").map(Number);
        const [eh, em] = end.split(":").map(Number);
        const playTime = (eh * 60 + em) - (sh * 60 + sm);

        const convertedMelody = convert(melody);

        let played = "";
        for (let i = 0; i < playTime; i++) {
            played += convertedMelody[i % convertedMelody.length];
        }

        if (played.includes(m) && playTime > maxTime) {
            maxTime = playTime;
            answer = title;
        }
    }

    return answer;
}
