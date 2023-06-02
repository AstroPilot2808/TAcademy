const webpack = require('webpack');

module.exports = function override(config, env) {
    // Add a fallback for 'zlib' module
    config.resolve.fallback = {
        ...config.resolve.fallback,
        zlib: require.resolve('browserify-zlib')
    };

    // Return the modified configuration
    return config;
};
