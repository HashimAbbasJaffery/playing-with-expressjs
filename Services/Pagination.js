var db = require("../config/db");
var ConstructLinks = require("./ConstructLinks");

async function Pagination(model, req, perPage = 10) {
    const per_page = parseInt(perPage);
    const current_page = (req.query.page ?? 1) - 1;
    const offset = current_page * per_page;
    const query = `SELECT * FROM ${ model } LIMIT ? OFFSET ?`;
    const countQuery = `SELECT COUNT(*) AS total FROM ${model}`;

    const records = await db.query(query, [ per_page, offset ]);
    const [[total]] = await db.query(countQuery);
    const totalPages = Math.ceil(total["total"] / per_page);

    return { total: total["total"], data: records[0], pages: ConstructLinks(totalPages, current_page, per_page) };
}

module.exports = Pagination;