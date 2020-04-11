/**
 * Mocking client-server processing
 */

function mockTodoList(length = 3) {
  const arr = Array.from(Array(length).keys());
  return arr.map((i) => ({
    id: i,
    text: `mockText${i}`,
    done: i % 3 === 0,
  }));
}


export function getTodoList() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockTodoList()), 1500);
  });
}
