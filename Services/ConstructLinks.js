function ConstructLinks(totalPages, current_page, per_page) {
    const links = [];

    for(let i = 0; i < totalPages; i++) {
        links.push({ 
            page: i + 1, 
            link: `http://localhost:3000/users/internships?page=${i + 1}&per_page=${per_page}`,
            active: parseInt(current_page) === i
        });
    }

    return links;
}

module.exports = ConstructLinks;