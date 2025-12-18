function solution(fees, records) {
  const [baseTime, baseFee, unitTime, unitFee] = fees;

  const inMap = new Map(); 
  const totalTimeMap = new Map(); 

  const timeToMinutes = (timeStr) => {
    const [hh, mm] = timeStr.split(":").map(Number);
    return hh * 60 + mm;
  };

  for (const record of records) {
    const [timeStr, carNum, type] = record.split(" ");
    const minutes = timeToMinutes(timeStr);

    if (type === "IN") {
      inMap.set(carNum, minutes);
    } else if (type === "OUT") {
      const inTime = inMap.get(carNum);
      const diff = minutes - inTime; 

      totalTimeMap.set(carNum, (totalTimeMap.get(carNum) || 0) + diff);

      inMap.delete(carNum); 
    }
  }

  const END_OF_DAY = timeToMinutes("23:59");
  for (const [carNum, inTime] of inMap.entries()) {
    const diff = END_OF_DAY - inTime;
    totalTimeMap.set(carNum, (totalTimeMap.get(carNum) || 0) + diff);
  }

  const calcFee = (totalMinutes) => {
    if (totalMinutes <= baseTime) return baseFee;
    const extra = totalMinutes - baseTime;
    const units = Math.ceil(extra / unitTime);
    return baseFee + units * unitFee;
  };

  const result = [...totalTimeMap.entries()]
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([_, totalMinutes]) => calcFee(totalMinutes));

  return result;
}
