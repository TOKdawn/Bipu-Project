import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv'; //处理.env文件

export function isDevFn(mode: string):boolean{
    return mode === 'development';
}

export function isProdFn(mode: string): boolean {
    return mode === 'production';
}

/**
 * Whether to generate package preview
 */
export function isReportMode(): boolean {
    return process.env.REPORT === 'true';
}

export function wrapperEnv(envConf: Recordable): ViteEnv{
    const res: any = {};
    for(const envName of Object.keys(envConf)) {
        let realName = envConf[envName].replace(/\\n/g, '\n');
        realName = realName === 'true' ? true : realName === 'false' ? false : realName;
        if (envName === 'VITE_PORT') { //如果是端口号
            realName = Number(realName); //转为数字类型
          }
          if (envName === 'VITE_PROXY') { //如果为代理
            try {
              realName = JSON.parse(realName); //校验是否符合object
            } catch (error) {}
          }
          res[envName] = realName;
          process.env[envName] = realName; //写入环境变量中
    }
    return res
}

/**
 * Get the environment variables starting with the specified prefix
 * @param match prefix
 * @param confFiles ext
 */
 export function getEnvConfig(match = 'VITE_GLOB_', confFiles = ['.env', '.env.production']) {
    let envConfig = {};
    confFiles.forEach((item) => {
      try {
        const env = dotenv.parse(fs.readFileSync(path.resolve(process.cwd(), item)));
        envConfig = { ...envConfig, ...env };
      } catch (error) {}
    });
  
    Object.keys(envConfig).forEach((key) => {
      const reg = new RegExp(`^(${match})`);
      if (!reg.test(key)) {
        Reflect.deleteProperty(envConfig, key);
      }
    });
    return envConfig;
  }
  
  /**
   * Get user root directory
   * @param dir file path
   */
export function getRootPath(...dir: string[]) {
    return path.resolve(process.cwd(), ...dir);
}
  