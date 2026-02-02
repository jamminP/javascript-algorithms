function solution(p) {
    // 1. 빈 문자열이면 그대로 반환
    if (p === "") return "";

    // 올바른 괄호 문자열인지 검사
    function isCorrect(str) {
        let count = 0;
        for (let ch of str) {
            if (ch === "(") count++;
            else count--;
            if (count < 0) return false;
        }
        return count === 0;
    }

    // 2. u, v 분리
    let count = 0;
    let u = "", v = "";
    for (let i = 0; i < p.length; i++) {
        count += p[i] === "(" ? 1 : -1;
        if (count === 0) {
            u = p.slice(0, i + 1);
            v = p.slice(i + 1);
            break;
        }
    }

    // 3. u가 올바른 괄호 문자열인 경우
    if (isCorrect(u)) {
        return u + solution(v);
    }

    // 4. u가 올바르지 않은 경우
    let result = "(";
    result += solution(v);
    result += ")";

    // u의 앞뒤 제거 후 괄호 뒤집기
    let reversed = "";
    for (let i = 1; i < u.length - 1; i++) {
        reversed += u[i] === "(" ? ")" : "(";
    }

    return result + reversed;
}
