const serverNewConfig: IBasicConfig = {
  protocol: 'https',
  port: 3000,
};
const backupConfig: IBasicConfig = {
  protocol: 'http',
  port: 3001,
};

interface IBasicConfig {
  protocol: string;
  port: number;
}

const startNewServer = (config: IBasicConfig): 'Server Started' => {
  console.log(`Server Started on ${config.protocol}://server:${config.port}`);
  return 'Server Started';
};

startNewServer(serverNewConfig);
startNewServer(backupConfig);
