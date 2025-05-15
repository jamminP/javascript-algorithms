function solution(nums) {
    var answer = 0;
    
    const phonecatchM = new Set(nums);
    
    answer = Math.min(phonecatchM.size, nums.length / 2);
    
    return answer;
}