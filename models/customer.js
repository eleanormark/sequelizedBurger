module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 80]
            }
        }
    }, {
        classMethods: {
            associate: function(models) {
                Customer.hasMany(models.Burger, { foreignKey: 'CustomerId' })
            }
        }
    });
    return Customer;
};