

export const compose = (...fns) => x => fns.reduce((acc,fn) => fn(acc),x);
export const promisify = fn => new Promise(resolve => {
  resolve(fn())
})
