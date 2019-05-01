var mysql = require("mysql");
var inquirer = require("inquirer");
var tableData;
var choiceMade;
var index;
var amount; // The amount entered by the user
var newAmount; // Amount after user purchase


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
    connection.end();
});


connection.query('SELECT * FROM products', function (err, rows) {
    if (err) throw err;

    console.table(rows);
    tableData = rows;
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
            choiceMade = answer.bamazon;
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

            amount = answer.quantity;
            console.log(answer);
            // The for loop will count up to 10, because the table has 10 ids.
            for (var i = 0; i < tableData.length; i++) {
                // The code below is used to compare the i with the user's choice.
                if (tableData[i].id == choiceMade) {
                    index = i;

                }
            }
            // Check the available quantity
            // Here, we are trying to get the stock quantity to show up.
            if (tableData[index].stock_quantity >= choiceMade) {
                newAmount = tableData[index].stock_quantity - amount;
                console.log('The new amount is ' + newAmount)
            }
            console.log("The quantity available " + newAmount);
            console.log(index)
            updateProduct();
        });
}

function updateProduct() {
    console.log("");
    connection.query(
        "UPDATE products SET ? WHERE ?",
        {
            stock_quantity: amount
        }
        ,
        function (err) {
            if (err) throw err;

            // Call deleteProduct AFTER the UPDATE completes
        }

    );
    connection.end();

}



