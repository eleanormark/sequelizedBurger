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
            allowNull: false,
            defaultValue: false
        },
        removed: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        CustomerId: {
            type: DataTypes.INTEGER
        }
    },{
        timestamps: false,
        classMethods: {
            associate: function(models) {
                console.log('associating burger')
                Burger.belongsTo(models.Customer, { foreignKey: 'CustomerId' })
        }
} });

    return Burger;
};