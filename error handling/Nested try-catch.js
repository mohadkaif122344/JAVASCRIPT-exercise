try {
  try {
    throw new Error("Inner error");
  } catch (inner) {
    console.log("Caught inner:", inner.message);
    throw new Error("Outer error");
  }
} catch (outer) {
  console.log("Caught outer:", outer.message);
}
