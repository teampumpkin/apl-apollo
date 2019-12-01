/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('assetManagers', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    productId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'product_id'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'createdAt'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'updatedAt'
    },
    assetId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'asset_id'
    }
  }, {
    tableName: 'asset_managers'
  });
};
