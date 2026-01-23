function solution(today, terms, privacies) {
    // 날짜를 일(day) 단위 숫자로 변환
    const toDays = (date) => {
        const [y, m, d] = date.split(".").map(Number);
        return y * 12 * 28 + m * 28 + d;
    };

    // 약관 정보 정리
    const termMap = {};
    for (let term of terms) {
        const [type, month] = term.split(" ");
        termMap[type] = Number(month);
    }

    const todayDays = toDays(today);
    const result = [];

    privacies.forEach((info, idx) => {
        const [date, type] = info.split(" ");
        const startDay = toDays(date);
        const expireDay = startDay + termMap[type] * 28 - 1;

        if (expireDay < todayDays) {
            result.push(idx + 1); // 번호는 1부터
        }
    });

    return result;
}
