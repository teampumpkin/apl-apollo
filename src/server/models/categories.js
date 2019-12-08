/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('categories', {
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
    coords: {
      type: DataTypes.JSON,
      allowNull: false,
      field: 'coords'
    },
    style: {
      type: DataTypes.JSON,
      allowNull: false,
      field: 'style'
    },
    colorCode: {
      type: DataTypes.STRING(45),
      allowNull: false,
      field: 'color_code'
    },
    titleImage: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'title_image'
    },
    discription: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'discription'
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
    }
  }, {
    tableName: 'categories'
  });
};
