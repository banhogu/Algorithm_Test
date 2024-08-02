function solution(priorities, location) {
  // 문서의 중요도와 원래 위치를 포함하는 객체 배열로 큐를 초기화
  let queue = priorities.map((priority, index) => ({ index, priority }));
  let count = 0;  // 인쇄된 문서의 수

  while (queue.length > 0) {
    // 큐에서 문서 하나를 꺼냄
    let current = queue.shift();
    
    // 큐의 나머지 문서 중 현재 문서보다 중요도가 높은 문서가 있는지 확인
    if (queue.some(doc => doc.priority > current.priority)) {
      // 중요도가 높은 문서가 있으면 현재 문서를 큐의 끝으로 이동
      queue.push(current);
    } else {
      // 현재 문서의 중요도가 가장 높으면 인쇄
      count++;
      if (current.index === location) {
        // 현재 인쇄된 문서가 찾고자 하는 문서라면 카운트 반환
        return count;
      }
    }
  }
}