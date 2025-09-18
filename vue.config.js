module.exports = {
  devServer: {
    proxy: {
      '/rest': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      }
    }
  }
}