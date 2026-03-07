function solution(video_len, pos, op_start, op_end, commands) {
    
    const toSec = (time) => {
        const [m, s] = time.split(":").map(Number);
        return m * 60 + s;
    };
    
    const toTime = (sec) => {
        const m = String(Math.floor(sec / 60)).padStart(2, "0");
        const s = String(sec % 60).padStart(2, "0");
        return `${m}:${s}`;
    };
    
    let video = toSec(video_len);
    let cur = toSec(pos);
    let start = toSec(op_start);
    let end = toSec(op_end);
    
    const skipOpening = () => {
        if (start <= cur && cur <= end) {
            cur = end;
        }
    };
    
    // 시작 시 오프닝 체크
    skipOpening();
    
    for (let cmd of commands) {
        if (cmd === "prev") {
            cur = Math.max(0, cur - 10);
        } else {
            cur = Math.min(video, cur + 10);
        }
        
        skipOpening();
    }
    
    return toTime(cur);
}