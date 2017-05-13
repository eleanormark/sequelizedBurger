module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 80]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        removed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

    console.log(typeof Burger);
    return Burger;
};