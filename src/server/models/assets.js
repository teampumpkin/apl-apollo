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
    }
  }, {
    tableName: 'assets'
  });
};
