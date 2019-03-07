function tryCatchAsyncHandler(func) {
  return async function(...args) { 
    const resolveFn = func(...args);
    const nextFn = args[args.length - 1];

    try {
      const resolver = Promise.resolve(resolveFn);
      return resolver;
    } catch (error) {
      return nextFn(error);
    }
  };
}

export default tryCatchAsyncHandler;