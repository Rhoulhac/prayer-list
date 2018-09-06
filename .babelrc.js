// Created by kirby15 on 2/1/18.

const config = {
  ignore: ['node_modules'],
  presets: ['@babel/preset-react']
};

if (process.env.NODE_ENV === 'test') {
  config.presets.push('@babel/preset-env');
} else {
  config.presets.push([
      '@babel/preset-env',
      {
          targets: {browsers: ['last 2 versions']},
          modules: false
      }
  ]);
}

module.exports = config;
