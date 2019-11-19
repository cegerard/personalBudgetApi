'use strict';

function _parseCookie(cookiesString) {
  const cookies = {};
  const cookiesPairs = cookiesString.split('; ');
  cookiesPairs.forEach(cookiePair => {
    const pair = cookiePair.split('=');
    cookies[pair[0]] = pair[1];
  });

  return cookies;
}

function _extractSessionFromHeaders(headers) {
  const cookies = _parseCookie(headers.cookie);
  // TODO check if there is a token/userId in cookie

  return {
    userId: cookies.userId,
    token: cookies.token,
  };
}

module.exports = (requestHeaders) => {
  const {
    userId,
    token,
  } = _extractSessionFromHeaders(requestHeaders);
  return {
    userId,
    token,
  };
};
