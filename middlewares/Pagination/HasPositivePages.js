const createError = require("http-errors");

function HasPositivePages(req, res, next) {
    const per_page = req.query.per_page;
    const offset = req.query.page;

    if(per_page < 0 || offset < 0) {
        next(createError(404, "404 Not Found"));
    }

    next();
};

module.exports = HasPositivePages;