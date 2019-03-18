let books = [];
let id = 0;

module.exports = {
    read: (req, res) => {
        res.status(200).send(books)
    },
    create: (req, res) => {
        const { title, author } = req.body;
        const book = {
            id, // coming from var declared at top
            title, // coming from req.body via destructuring
            author, // coming from req.body via destructuring
        };
        book.push(book);
        id++;
        res.status(200).send(books)
    },
};