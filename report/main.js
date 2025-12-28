(function () {
  const Auth = window.Auth;
  const RoutePath = window.RoutePath;
  if (!Auth || !Auth.isAuthenticated()) {
    window.location.href = RoutePath.LOGIN;
    return;
  }

  const ReportScreen = window.ReportScreen;
  const React = window.React;
  const ReactDOM = window.ReactDOM;

  const rootElement = document.getElementById('root');
  if (!rootElement) throw new Error('Failed to find the root element');

  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ReportScreen />
    </React.StrictMode>
  );
})();
