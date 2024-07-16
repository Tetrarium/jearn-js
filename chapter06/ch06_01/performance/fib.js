import showPerformance from "./showPerformance.js";
import { fib, iterativeFib } from "../tasks.js";

// const TIMES = 10_000;

// showPerformance(fib, TIMES);
// showPerformance(iterativeFib, TIMES);

function showPerformanceOneCall(fn, num) {
  const startTime = performance.now();
  try {
    fn(num);
  } catch (e) {
    console.log(e.message);
  }

  console.log(`Only one call ${fn.name}(${num}): ${performance.now() - startTime}ms`);
}

const NUM = 9_042;
showPerformanceOneCall(fib, NUM);
showPerformanceOneCall(iterativeFib, NUM);
