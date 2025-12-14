const ListeningLibraryScreen = window.ListeningLibraryScreen;
const React = window.React;
const ReactDOM = window.ReactDOM;

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ListeningLibraryScreen />
  </React.StrictMode>
);
