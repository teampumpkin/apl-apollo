/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('assets', {
    id: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true,
      field: 'id'
    },
    url: {
      type: DataTypes.STRING(26),
      allowNull: false,
      field: 'url'
    },
    thumb: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: 'thumb'
    },
    style: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: 'style'
    },
    animation: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: 'animation'
    },
    productId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'product_id'
    },
    order: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'order'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'createdAt'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'updatedAt'
    }
  }, {
    tableName: 'assets'
  });
};
