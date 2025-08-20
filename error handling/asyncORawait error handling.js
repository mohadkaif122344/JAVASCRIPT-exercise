async function fetchData() {
  try {
    const res = await fetch('badurl');
    const data = await res.json();
  } catch (err) {
    console.error("Fetch failed:", err.message);
  }
}
