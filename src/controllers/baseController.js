async function index (req,res) {
    res.status(200).json({
        status: true,
        message: 'Hello World'
    });
}

async function sum(req,res) {
    const {x,y} = req.body;
    const result = x + y;
    res.status(200).json({
        status: true,
        message: 'Parameter Summarized!',
        data: {x, y, result}
    });
}

module.exports = {
    index,
    sum
};
