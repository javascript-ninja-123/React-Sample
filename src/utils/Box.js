export const Box = x => ({
  map:f => Box(f(x)),
  fold:() => x,
  inspect:() => `Box(${x})`,
  chain:f => f(x),
})
