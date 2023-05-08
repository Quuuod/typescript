type port = 3001 | 3000;
type protocol = 'https' | 'http';

const serverConfig: { protocol: protocol; port: port } = {
  protocol: 'https',
  port: 3001,
};

const startServer: (protocol: protocol, port: port) => string = (
  protocol: protocol,
  port: port
): 'Server Started' | 'Failed' => {
  if (port === 3000 || port === 3001) {
    console.log(`Server Started on ${protocol}: //server:${port}`);
    return 'Server Started';
  } else {
    return 'Failed';
  }
};

startServer(serverConfig.protocol, serverConfig.port);
