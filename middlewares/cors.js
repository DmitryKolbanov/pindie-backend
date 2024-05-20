function cors(req, res, next) {
    const { origin } = req.headers;
    res.header("Access-Control-Allow-Origin", "*");
    next();
}

module.exports = cors;
