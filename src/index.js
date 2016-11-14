/**
 *
 */
import { createServer as createHttpServer } from 'http';
import { createServer as createHttpsServer } from 'https';
import onExit from 'async-exit-hook';
import withShutdown from 'http-shutdown';

/**
 *
 */
export default function createServer(app, options = {}) {
  const { https, ...serverOptions } = options;

  const server = withShutdown(
    https ? createHttpsServer(serverOptions, app.callback()) : createHttpServer(app.callback()),
  );

  onExit(callback => {
    server.shutdown(() => {
      if (typeof app.onExit === 'function') {
        Promise.resolve(app.onExit()).then(callback, callback);
      }
      else {
        callback();
      }
    });
  });

  return server;
}
