var mysql = require("mysql");
var inquirer = require("inquirer");


// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "yourRootPassword",
    database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;

});


connection.query('SELECT * FROM products', function (err, rows, fields) {
    if (!err)
        console.table(rows);
    else
        console.log('Error');
    start();
})

function start() {
    inquirer
        .prompt({
            name: "bamazon",
            type: "list",
            message: "Please choose a product ID",
            choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "EXIT"]
        })
        .then(function (answer) {
            // based on their answer, either call the bid or the post functions
            switch (answer.bamazon) {
                // If score is 90 or greater
                case "1":
                    amount();
                    break;
                // If score is 80 or greater
                case "2":
                    amount();
                    break;
                // If score is 70 or greater
                case "3":
                    amount();
                    break;
                // If score is 60 or greater
                case "4":
                    amount();
                    break;
                case "5":
                    amount();
                    break;
                case "6":
                    amount();
                    break;
                case "7":
                    amount();
                    break;
                case "8":
                    amount();
                    break;
                case "9":
                    amount();
                    break;
                case "10":
                    amount();
                    break;
                // If the user chooses the EXIT option
                default:
                    console.log("The app will now exit.");
                    break;
            }
        });
}

// This function is for the customers that have inputted an id.
// The function will basically ask the user about the amount of
// items they want to purchase
function amount() {
    inquirer
        .prompt({
            name: "quantity",
            type: "number",
            message: "How many would you like to purchase?"
        })
        .then(function (answer) {

        });

}






