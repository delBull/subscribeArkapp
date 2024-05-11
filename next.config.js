/** @type {import('next').NextConfig} */
const nextConfig = {
    webpackDevMiddleware: (config) => {
      // Agregar opciones personalizadas si es necesario
      return config;
    },
  };
  
  module.exports = nextConfig;
  