def solution(s):
    n = len(s)
    if n == 1:
        return 1

    answer = n  # 최악은 압축 안 했을 때

    for k in range(1, n // 2 + 1):
        compressed = ""
        prev = s[0:k]
        count = 1

        for i in range(k, n, k):
            cur = s[i:i+k]
            if cur == prev:
                count += 1
            else:
                if count > 1:
                    compressed += str(count)
                compressed += prev
                prev = cur
                count = 1

        # 마지막 덩어리 처리
        if count > 1:
            compressed += str(count)
        compressed += prev

        answer = min(answer, len(compressed))

    return answer
