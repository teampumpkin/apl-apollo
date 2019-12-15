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
    title: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'title'
    },
    subTitle: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'sub_title'
    },
    discription: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'discription'
    },
    iconActive: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'icon_active'
    },
    iconInActive: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'icon_in_active'
    },
    style: {
      type: DataTypes.JSON,
      allowNull: true,
      field: 'style'
    },
    headerStyle: {
      type: DataTypes.JSON,
      allowNull: true,
      field: 'header_style'
    },
    categoryId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'category_id'
    },
    isActive: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0',
      field: 'is_active'
    },
    category: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'category'
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
    tableName: 'products'
  });
};
