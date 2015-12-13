module.exports = function(sequelize, DataTypes) {
  return sequelize.define("climb", {
    name: DataTypes.STRING,
    grade: DataTypes.STRING,
    type: DataTypes.STRING,
    location: DataTypes.STRING,
    lead: DataTypes.BOOLEAN,
    date: DataTypes.DATE,
    notes: DataTypes.TEXT
  });
};
