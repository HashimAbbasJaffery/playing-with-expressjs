var Pagination = require("../Services/Pagination");
var db = require("../config/db");

class InternshipController {
    async index(req, res) {
        let records;
        try {
            records = await Pagination("internships", req);
        } catch(e) {
            console.log(e)
        }
        res.json(records);
    }
    async get(req, res) {
        const [internship] = await db.query("SELECT * FROM internships WHERE id = ?", [req.params.internshipId])
        res.json(internship);
    }
    async del(req, res) {
        const response = await db.query("DELETE FROM internships WHERE id = ?", [req.params.internshipId]);

        if(!response[0]["affectedRows"]) {
          return res.json({ "success": false, "message": "Record not found!" })
        }
      
        return res.json({ "success": true, "message": "Record Deleted!" })
    }
}

module.exports = new InternshipController()