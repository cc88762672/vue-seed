// 之所以把所有环境配置放在一起，是因为这样改起来方便
// 但这样将所有环境配置放在一个文件中其实有个不好之处
// 打包的时候会把所有配置都打包到输出文件app.*.js中
// 不过配置数据一般不多，所以总得来说应该还是利大于弊

// 如果有其他环境配置，如uat、sit，备份注释dev或prod，
// 然后将uat、sit的配置覆盖dev或prod，如下：

// dev环境配置，备份注释
// const dev = {
//   baseURL: 'http://dev.example.com',
// };

// uat环境配置，注意命名还是dev或prod
// const dev = {
//   baseURL: 'http://uat.example.com',
// };

const dev = {
  baseURL: 'http://dev.example.com',
};

const prod = {
  baseURL: 'http://prod.example.com',
};

const test = {
  baseURL: 'http://test.example.com',
};

export { dev, prod, test };
