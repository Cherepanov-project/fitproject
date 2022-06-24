export const paused = (time: number) =>
    new Promise(acc => setTimeout(acc, time))
