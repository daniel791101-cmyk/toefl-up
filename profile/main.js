
if (!window.Auth.isAuthenticated()) {
    window.location.href = window.RoutePath.LOGIN;
} else {
    window.bootstrapReactScreen('ProfileScreen');
}
