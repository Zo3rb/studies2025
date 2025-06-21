// Using Promises
function getUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: id, name: "John" });
    }, 1000);
  });
}

// Promise way
getUser(1).then((user) => console.log(user));

// Async/await way
async function displayUser() {
  const user = await getUser(1);
  console.log(user);
}

displayUser();
