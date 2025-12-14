
(function bootstrap(global) {
  function resolveComponent(componentOrName) {
    if (typeof componentOrName === 'function') {
      return componentOrName;
    }

    if (typeof componentOrName === 'string' && componentOrName in global) {
      return global[componentOrName];
    }

    throw new Error(
      `bootstrapReactScreen: component "${componentOrName}" is not available on window.`
    );
  }

  global.bootstrapReactScreen = function bootstrapReactScreen(componentOrName) {
    const React = global.React;
    const ReactDOM = global.ReactDOM;

    if (!React || !ReactDOM) {
      throw new Error('bootstrapReactScreen: React and ReactDOM must be loaded first.');
    }

    const Component = resolveComponent(componentOrName);

    const rootElement = global.document.getElementById('root');
    if (!rootElement) {
      throw new Error('bootstrapReactScreen: Failed to find the root element.');
    }

    const root = ReactDOM.createRoot(rootElement);
    const tree = React.createElement(
      React.StrictMode,
      null,
      React.createElement(Component)
    );

    root.render(tree);
    return root;
  };
})(window);
