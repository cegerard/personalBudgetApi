'use strict';

class NavigationService {
  replace(path) {
    window.location.replace(path);
  }

  navigate(path) {
    window.location = path;
  }
}

module.exports = new NavigationService();
