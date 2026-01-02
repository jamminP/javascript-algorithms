function solution(numbers) {
    const numArr = numbers.split('');
    const madeNumbers = new Set();

    // 소수 판별 함수
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    // 순열 생성 함수
    function getPermutations(arr, fixed) {
        if (arr.length === 0) return;

        for (let i = 0; i < arr.length; i++) {
            const newFixed = fixed + arr[i];
            const rest = arr.slice(0, i).concat(arr.slice(i + 1));

            madeNumbers.add(Number(newFixed)); // 숫자로 변환 후 저장
            getPermutations(rest, newFixed);
        }
    }

    getPermutations(numArr, '');

    // 소수 개수 세기
    let count = 0;
    for (let num of madeNumbers) {
        if (isPrime(num)) count++;
    }

    return count;
}
