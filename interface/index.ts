interface IConfig {
  protocol: 'https' | 'http';
  port: 3001 | 3000;
  log: (msg: string) => void;
}

interface IRole {
  role: string;
}

interface IConfigWithRole extends IConfig, IRole {
  test: string;
}

const serverConfig: IConfigWithRole = {
  protocol: 'http',
  port: 3001,
  role: 'admin',
  test: 'test',
  log: (msg: string): void => console.log(msg),
};

// const backupConfig: ConfigWithRole = {
//   protocol: 'https',
//   port: 3000,
//   role: 'sysadmin',
// };

type StartFunction = (
  protocol: 'http' | 'https',
  port: 3000 | 3001,
  log: (msg: string) => void
) => string;

const startServer: StartFunction = (
  protocol: 'http' | 'https',
  port: 3000 | 3001,
  log: (msg: string) => void
): 'Server Started' | 'Failed' => {
  if (port === 3000 || port === 3001) {
    log(`Server Started on ${protocol}://server:${port}`);
    return 'Server Started';
  } else {
    return 'Failed';
  }
};

startServer(serverConfig.protocol, serverConfig.port, serverConfig.log);

interface IStyles {
  [key: string]: string;
}

const styles: IStyles = {
  position: 'absolute',
  top: '20px',
  left: '25px',
};
