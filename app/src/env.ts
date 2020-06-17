export const env = {
  REACT_APP_ENV: window._env_?.NODE_ENV || process.env.NODE_ENV,
  REACT_APP_ENV_BACKEND_HOST: window._env_?.REACT_APP_ENV_BACKEND_HOST || process.env.REACT_APP_ENV_BACKEND_HOST,
  REACT_APP_ENV_ROLLBAR_SERVER_TOKEN:
    window._env_?.REACT_APP_ENV_ROLLBAR_SERVER_TOKEN || process.env.REACT_APP_ENV_ROLLBAR_SERVER_TOKEN,
  REACT_APP_ENV_ROLLBAR_ENVIRONMENT:
    window._env_?.REACT_APP_ENV_ROLLBAR_ENVIRONMENT || process.env.REACT_APP_ENV_ROLLBAR_ENVIRONMENT,
  REACT_APP_COMMIT_SHA: window._env_?.REACT_APP_COMMIT_SHA || process.env.REACT_APP_COMMIT_SHA,
  REACT_APP_CONSUMPTION_TYPE:
    window._env_?.REACT_APP_CONSUMPTION_TYPE || process.env.REACT_APP_CONSUMPTION_TYPE || 'ticket',
  NODE_ENV: window._env_?.NODE_ENV || process.env.NODE_ENV,

  // Conditional environment variables
  APP_TITLE:
    window._env_?.REACT_APP_CONSUMPTION_TYPE === 'ticket'
      ? window._env_?.TICKET_APP_TITLE
      : window._env_?.PRODUCT_APP_TITLE,
  PUBLIC_URL:
    window._env_?.REACT_APP_CONSUMPTION_TYPE === 'ticket'
      ? window._env_?.TICKET_PUBLIC_URL
      : window._env_?.PRODUCT_PUBLIC_URL
};
