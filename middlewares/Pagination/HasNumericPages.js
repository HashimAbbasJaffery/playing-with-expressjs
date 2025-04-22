const createError = require("http-errors");

function HasNumericPages(req, res, next) {
    const per_page = req.query.per_page;
    const offset = req.query.page;

    if(typeof parseInt(offset) != "number") {
        next(createError(404, "Not Found"))
    }

    next();
};

module.exports = HasNumericPages;