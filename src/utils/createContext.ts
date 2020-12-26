import React from "react";

/**
 * createContext is a custom function that creates a named context, provider, and a hook.
 *
 * @param options create context options
 */

export function createContext(options = {}) {
  // The destructured syntax here, extracts multiple properties from the options object.
  const {
    strict = true,
    errorMessage = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
    name,
  } = options;

  // Create the actual context using the `createContext` function from React
  const Context = React.createContext(undefined);

  // Assign the `name` property extracted from the `options` object to the variable `Context`
  Context.displayName = name;

  function useContext() {
    const context = React.useContext(Context);

    if (!context && strict) {
      throw new Error(errorMessage);
    }

    return context;
  }

  return [Context.Provider, useContext, Context];
}
