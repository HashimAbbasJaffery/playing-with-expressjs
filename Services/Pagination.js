var db = require("../config/db");

async function Pagination(model, req, perPage = 10) {
    const per_page = parseInt(perPage);
    const current_page = (req.query.page ?? 1) - 1;
    const offset = current_page * per_page;
    const query = `SELECT * FROM ${ model } LIMIT ? OFFSET ?`;
    const countQuery = `SELECT COUNT(*) AS total FROM ${model}`;

    const records = await db.query(query, [ per_page, offset ]);
    const [[total]] = await db.query(countQuery);
    const totalPages = Math.ceil(total["total"] / per_page);

    const links = [];

    for(let i = 0; i < totalPages; i++) {
        links.push({ 
            page: i + 1, 
            link: `http://localhost:3000/users/internships?page=${i + 1}&per_page=${per_page}`,
            active: parseInt(current_page) === i
        });
    }

    return { total: total["total"], data: records[0], pages: links };
}

module.exports = Pagination;