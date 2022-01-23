const path = require('path'); // path라는 내장 모듈을 불러옴
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development', // 개발용? 배포용?
  entry: {
    main: './src/index.ts',
  },
  output: {
    path: path.resolve('./dist'), // 결과파일을 저장하려는 절대경로
    filename: '[name].js', // 파일명 []사용시 entry키값
  },
  module: {
    rules: [
      {
        test: /\.scss$/, //파일 확장자
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'], // 사용할 로더
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]?[hash]', // 파일명 해시값 대신 원본 이름으로 쓰기
            },
          },
        ],
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3000,
    devMiddleware: {
      publicPath: 'https://localhost:3000',
    },
    hot: 'only',
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'], // 모듈 위치
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      minify: {
        collapseWhitespace: true,
      },
      hash: true,
      template: './public/index.html', // index.html에 dist/main.js를 연결하지 않아도 자동으로 해준다
    }),
    new MiniCssExtractPlugin({ filename: 'index.css' }),
    new CleanWebpackPlugin(), // build할 때마다 이전 dist파일 삭제
  ],
};
