/**
 *
 * @param req Request
 * @param res Response
 */
const db = require('../models/index');
const cache = require('memory-cache');
const fs = require('fs');
const ProductController = () => {
    const getAll = async (req, res) => {
        let list = cache.get('products-list');
        if (list) {
            res.status(200).json({ success: true, data: list });
        } else {
            db.categories.findAll().then(function (x) {
                cache.put('products-list', x, 10000000)
                res.status(200).json({ success: true, data: x });
            }).catch(function (err) {
                res.status(400).json({ success: false, error: err });
            });
        }
    };

    const getProductDetails = async (req, res) => {
        const slug = req.params.slug.split('-').join(' ');
        let list = cache.get(`products-${slug}`);
        if (list) {
            res.status(200).json({ success: true, data: list });
        } else {
            const cat = await db.categories.findOne({
                attributes: ['id', 'name', 'coords', 'style', 'colorCode', 'titleImage', 'discription', 'animation', 'products','layout'],
                where: {
                    name: slug
                }
            }).catch(err => {
                res.status(400).json({ success: false, error: err });
            })
            db.products.findAll({
                attributes: ['id', 'title', 'subTitle', 'discription', 'iconActive', 'iconInActive', 'style', 'headerStyle', 'categoryId', 'isActive'],
                where: {
                    categoryId: cat.dataValues.id
                },
                include: [
                    {
                        model: db.assets,
                        attributes: ['id', 'url', 'thumb', 'style', 'animation'],
                        alise: "images",
                        paranoid: false,
                        // required: true
                    }
                ],
                order: [
                    ['order', 'ASC'],
                    [db.assets, 'order', 'ASC']
                ],
            }).then(products => {
                cache.put(`products-${slug}`, { ...cat.dataValues, items: products }, 10000000);
                res.status(200).json({ success: true, data: { ...cat.dataValues, items: products } });
            }).catch(function (err) {
                res.status(400).json({ success: false, error: err });
            });
        }
    };

    const getProducts = async () => {
        return db.products.findAll({
            attributes: ['id', 'title', 'subTitle', 'discription', 'iconActive', 'iconInActive', 'style', 'headerStyle', 'categoryId', 'isActive'],
            include: [
                {
                    model: db.assets,
                    attributes: ['id', 'url', 'thumb', 'style', 'animation'],
                    alise: "images",
                    paranoid: false,
                    required: true
                }
            ],
            order: [
                [db.assets, 'id', 'DESC'],
            ],
        }).then(products => {
            let data = {};
            products.map(x => {
                data[x.id] = x;
            })
            return data;
        }).catch(function (err) {
            return null;
        });
    };

    const refreshJson = async (req, res) => {
        const products = await getProducts();
        const cat = await db.categories.findAll({
            attributes: ['id', 'name', 'coords', 'style', 'colorCode', 'titleImage', 'discription', 'animation', 'products'],
        }).catch(err => {
            res.status(400).json({ success: false, error: err });
        });
        const category = cat.map(x => {
            x.dataValues.items = [];
            x.dataValues.products.split(',').forEach(y => {
                x.dataValues.items.push(products[y]);
            });
            return x;
        })
        fs.writeFile('walkthrough.json', JSON.stringify(category), 'utf8', ()=>{
            return res.status(200).json({ success: true });
        }).catch(err=>{
            res.status(400).json({ success: false, error: err });
        })
    };
    const clear = async (req, res) => {
        cache.clear();
        return res.status(200).json({ success: true });
    }
    return {
        getAll,
        clear,
        getProductDetails,
        getProducts,
        refreshJson
    };
};
module.exports = ProductController;