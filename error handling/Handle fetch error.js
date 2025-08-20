async function getData() {
  try {
    const res = await fetch('https://api.invalidurl.com');
    const data = await res.json();
  } catch (e) {
    console.error("API error:", e.message);
  }
}
getData();
