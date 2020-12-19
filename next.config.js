const basePath = process.env.NODE_ENV === 'production' ? '/cv' : '';

module.exports = {
    basePath,
    assetPrefix: `${basePath}/`
};