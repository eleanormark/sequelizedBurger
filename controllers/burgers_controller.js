var db = require('../models');

module.exports = function(app) {

    // GET route for retrieving all burgers from database
    app.get("/", function (req, res) {
        db.Burger.findAll({
            include: [db.Customer]
        }).then(function (result) {
            var hbsObject = {
                burgers: result
            };
            console.log(hbsObject);
            res.render("index", hbsObject);
        });
    });

    // POST route for saving a new Burger
    app.post("/", function (req, res) {
        db.Burger.create({
            burger_name: req.body.burger,
            devoured: false,
            removed: false
        }).then(function (result) {
            console.log(result.devoured);
            res.redirect('/');
        });
    });

    // PUT route for updating a burger's devoured value to true.
    // app.put("/:id", function (req, res) {
    //     console.log("PARAMS ID",req.params.id);
    //     db.Burger.update({
    //         devoured: req.body.devoured
    //     },{
    //         where: {
    //             id: req.params.id
    //         }
    //     }).then(function (result) {
    //         console.log(result.devoured);
    //         res.redirect('/');
    //     });
    // });


    app.put("/:id", function(req, res){
        db.Customer.findOrCreate({
            where: {
                name: req.body.customer.trim()
            },
            defaults: {
                name: req.body.customer.trim()
            }
        }).then(function(customerResult) {
            console.log("========================", customerResult[0].dataValues.id)
            db.Burger.update({
                devoured: req.body.devoured,
                CustomerId: customerResult[0].dataValues.id,
            }, {
                where: {
                    id: req.params.id
                }
            }).then(function(result){
                res.redirect("/");
            })
        });
    });

    app.put("/remove/:id", function(req, res) {
        var condition = "id = " + req.params.id;
        console.log("condition", condition);
        db.Burger.update({
            removed: req.body.removed,
        },{
            where: {
                id: req.params.id
            }
        }).then(function (result) {
            console.log(result.removed);
            res.redirect('/');
        });
    });
}

