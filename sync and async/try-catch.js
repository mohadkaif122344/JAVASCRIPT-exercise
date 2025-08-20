// Handle an error inside an async function.
async function fetchData() {
  try {
    const res = await fetch('https://invalid-url.com');
    const data = await res.json();
  } catch (error) {
    console.error("Fetch failed:", error.message);
  }
}

fetchData();
