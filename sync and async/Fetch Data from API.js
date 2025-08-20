// Use fetch and async/await to get user data from an API.

async function fetchUser() {
try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await res.json();
    console.log(user.name);
  } catch (err) {
    console.error("Error:", err);
  }
}

fetchUser();
