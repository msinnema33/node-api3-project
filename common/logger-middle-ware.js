module.exports = function logger(req, res, next) {
    const method = req.method;
    const endpoint = req.orininalUrl;

    console.log(`[${new Date().toISOString()}] ${method} to ${endpoint}`);

    next();
};