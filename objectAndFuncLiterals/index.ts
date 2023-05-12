type Config = { protocol: 'https' | 'http'; port: 3001 | 3000 };
type Role = {
  role: string;
};
type ConfigWithRole = Config & Role;

const serverConfig: ConfigWithRole = {
  protocol: 'http',
  port: 3001,
  role: 'admin',
};

const backupConfig: ConfigWithRole = {
  protocol: 'https',
  port: 3000,
  role: 'sysadmin',
};

type StartFunction = (protocol: 'http' | 'https', port: 3000 | 3001) => string;

const startServer: StartFunction = (
  protocol: 'http' | 'https',
  port: 3000 | 3001
): 'Server Started' | 'Failed' => {
  if (port === 3000 || port === 3001) {
    console.log(`Server Started on ${protocol}: //server:${port}`);
    return 'Server Started';
  } else {
    return 'Failed';
  }
};

startServer(serverConfig.protocol, serverConfig.port);
