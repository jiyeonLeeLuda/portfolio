const path = require('path'); // core nodejs 모듈 중 하나, 파일 경로 설정할 때 사용
const HtmlWebpackPlugin = require('html-webpack-plugin'); //build시 html파일 내보내기 플러그인

module.exports = {
  entry: './src/index.js', //리액트 파일 시작점
  output: {
    path: path.join(__dirname, '/build'), //__dirname : 현재 디렉토리, dist 폴더에 모든 컴파일된 하나의 번들파일을 넣을 예정
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // .js, .jsx로 끝나는 babel이 컴파일하게 할 모든 파일
        exclude: /node_modules/, // node module 폴더는 babel 컴파일에서 제외
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader' /* 로더 설정 */],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // 생성한 템플릿 파일
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: {
      index: 'index.html',
    },
  },
};
