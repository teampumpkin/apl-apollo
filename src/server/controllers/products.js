/**
 *
 * @param req Request
 * @param res Response
 */
const db = require('../models/index');
const cache = require('memory-cache');
const ProductController = () => {
    const getAll = async (req, res) => {
        let list = cache.get('products-list');
        if (list) {
            res.status(200).json({ success:true,data: list });
        } else {
            // const query = "select p.*,cat.name 'category' from products p inner join `categories` cat on p.`category_id`=cat.id;"
            // return db.sequelize.query(query, {
            //     type: db.Sequelize.QueryTypes.SELECT,
            //     replacements: {}
            // }).then(x => {
            //     cache.put('products-list', x, 10000000)
            //     res.status(200).json({success:true, data: x });
            // });
            db.categories.findAll().then(function (x) {
                cache.put('products-list', x, 10000000)
                res.status(200).json({success:true, data: x });
            }).catch(function(err) {
                res.status(400).json({success:false, error: err });
            });
        }
    };

    const getAssets = async (req, res) => {
        const productId = req.params.productId;
        let list = cache.get(`products-${productId}`);
        if (list) {
            res.status(200).json({ success:true,data: list });
        } else {
            const query = "select asset.* from `asset_managers` ass inner join assets asset on ass.`asset_id` = asset.id where ass.product_id =:productId ;";
            return db.sequelize.query(query, {
                type: db.Sequelize.QueryTypes.SELECT,
                replacements: {productId:productId}
            }).then(x => {
                cache.put(`products-${productId}`, x, 10000000)
                res.status(200).json({success:true, data: x });
            });
        }
    };
    const clear = async(req,res)=>{
        cache.clear();
        return res.status(200).json({ success: true });
    }
    return {
        getAll,
        clear,
        getAssets
    };
};
module.exports = ProductController;