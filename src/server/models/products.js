/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'name'
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
    categoryId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'category_id'
    },
    baseImage: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'base_image'
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'description'
    }
  }, {
    tableName: 'products'
  });
};
