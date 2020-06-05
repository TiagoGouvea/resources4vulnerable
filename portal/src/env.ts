export const env = {
  REACT_APP_ENV: window._env_.NODE_ENV || process.env.NODE_ENV,
  REACT_APP_ENV_BACKEND_HOST: window._env_.REACT_APP_ENV_BACKEND_HOST || process.env.REACT_APP_ENV_BACKEND_HOST,
  REACT_APP_ENV_ROLLBAR_SERVER_TOKEN:
    window._env_.REACT_APP_ENV_ROLLBAR_SERVER_TOKEN || process.env.REACT_APP_ENV_ROLLBAR_SERVER_TOKEN,
  REACT_APP_ENV_CITY_ID: window._env_.REACT_APP_ENV_CITY_ID || process.env.REACT_APP_ENV_CITY_ID,
  REACT_APP_ENV_CITY_NAME: window._env_.REACT_APP_ENV_CITY_NAME || process.env.REACT_APP_ENV_CITY_NAME,
  REACT_APP_ENV_INFO_LINK: window._env_.REACT_APP_ENV_INFO_LINK || process.env.REACT_APP_ENV_INFO_LINK,
  REACT_APP_ENV_INFO_PHONE: window._env_.REACT_APP_ENV_INFO_PHONE || process.env.REACT_APP_ENV_INFO_PHONE,
  REACT_APP_ENV_FORM_URL: window._env_.REACT_APP_ENV_FORM_URL || process.env.REACT_APP_ENV_FORM_URL,
  REACT_APP_ENV_GA_TRACKING_ID: window._env_.REACT_APP_ENV_GA_TRACKING_ID || process.env.REACT_APP_ENV_GA_TRACKING_ID,
  REACT_APP_ENV_AUTH_SECRET: window._env_.REACT_APP_ENV_AUTH_SECRET || process.env.REACT_APP_ENV_AUTH_SECRET,
  REACT_APP_ENV_AUTH_TOKEN: window._env_.REACT_APP_ENV_AUTH_TOKEN || process.env.REACT_APP_ENV_AUTH_TOKEN,
  REACT_APP_URL: window._env_.REACT_APP_URL || process.env.REACT_APP_URL,
  REACT_APP_COMMIT_SHA: window._env_.REACT_APP_COMMIT_SHA || process.env.REACT_APP_COMMIT_SHA,
  REACT_APP_ENV_ROLLBAR_ENVIRONMENT:
    window._env_.REACT_APP_ENV_ROLLBAR_ENVIRONMENT || process.env.REACT_APP_ENV_ROLLBAR_ENVIRONMENT,
  REACT_APP_CONSUMPTION_TYPE:
    window._env_?.REACT_APP_CONSUMPTION_TYPE || process.env.REACT_APP_CONSUMPTION_TYPE || 'ticket',
  REACT_APP_VERSION: window._env_.REACT_APP_VERSION || process.env.REACT_APP_VERSION
};
