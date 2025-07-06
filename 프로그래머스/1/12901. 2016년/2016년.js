function solution(a, b) {
    var answer = '';
    
    const day = ["SUN","MON", "TUE", "WED", "THU", "FRI", "SAT"];
    
    let date = new Date(2016,a-1,b);
    
    answer = day[date.getDay()];
    
    return answer;
}