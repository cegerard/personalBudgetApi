class NavigationService {
  replace(path) {
    window.location.replace(path);
  }
}

module.exports = new NavigationService();
