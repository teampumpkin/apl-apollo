/**
 *
 * @param req Request
 * @param res Response
 */
const db = require('../models/index');

const ProductController = () => {
    const getAll = async (req, res) => {
        const query = "select p.name,ass.* from products p inner join `asset_managers` am on p.id = am.`product_id` inner join assets ass on am.`asset_id` = ass.id;"
        return db.sequelize.query(query, {
            type: db.Sequelize.QueryTypes.SELECT,
            replacements: { }
        }).then(x=>{
            res.status(200).json({ data: x });
        });
    };
    return {
        getAll
    };
};
module.exports = ProductController;