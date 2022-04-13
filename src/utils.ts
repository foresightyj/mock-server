import random from "lodash/random";

export function sleep(ms: number) {
  return new Promise((res) => {
    setTimeout(res, ms);
  });
}

export function randomSleep(maxMs = 1000) {
  const r = random(maxMs, false);
  return sleep(r);
}
