const { UserMock } = require("../db-mock/users.mock");

exports.getUsers = (req, res) => {
    const { page } = req.query;

    const pageEnd = (Math.abs(page) || 1) * 10;
    const pageInit = (pageEnd - 10) < 0 ? 0 : pageEnd - 10;

    setTimeout(() => {
        res.json(UserMock.slice(pageInit, pageEnd));
    }, 1000)
}