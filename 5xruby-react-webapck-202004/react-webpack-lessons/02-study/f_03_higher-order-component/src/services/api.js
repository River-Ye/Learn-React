const mockUserData = {
  name: 'milkmidi',
  age: 18,
  designation: 'Admin',
};
export function fetchUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockUserData);
    }, 2000);
  });
}
