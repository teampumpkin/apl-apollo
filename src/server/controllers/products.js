/**
 *
 * @param req Request
 * @param res Response
 */
const db = require('../models/index');
// import sequelize from '../models/index';
// import { QueryTypes } from 'sequelize';

const ProductController = () => {
    const getAll = async (req, res) => {
        return db.products.findAll().then(
            result => {
                res.status(200).json({ data: result });
            },
            err => {
                res.status(500).json({
                    name: err.name,
                    errorCode: err.parent.code,
                    errorMessage: err.parent.sqlMessage
                });
            }
        );
    };
    return {
        getAll
    };
};
module.exports = ProductController;