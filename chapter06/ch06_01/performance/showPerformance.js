export default function showPerformance(fn, times = 10000) {
  const startTime = performance.now();

  try {
    for (let i = 0; i < times; i++) {
      fn(i);
    }
    
    console.log(fn.name, ':', performance.now() - startTime, 'ms');
  } catch (e) {
    console.log(e);
  }
}
