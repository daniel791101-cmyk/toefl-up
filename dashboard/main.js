(function () {
  const Auth = window.Auth;
  const RoutePath = window.RoutePath;
  if (!Auth || !Auth.isAuthenticated()) {
    window.location.href = RoutePath.LOGIN;
    return;
  }
  window.bootstrapReactScreen('DashboardScreen');
})();
