/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('assets', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    label: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'label'
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
    type: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'type'
    },
    url: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'url'
    },
    styling: {
      type: DataTypes.JSON,
      allowNull: true,
      field: 'styling'
    }
  }, {
    tableName: 'assets'
  });
};
