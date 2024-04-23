#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
let balance: number = 50000;  //balance
let pin: number = 2386;       //pin
let continueProject = true

console.log(chalk.bold.blueBright("============================================================================"));
console.log(chalk.bold.blueBright("\n                💰💲💰💲 WELCOME TO EASYPAISA APP 💰💲💰💲                              "));
console.log(chalk.bold.blueBright("\n============================================================================"));


//Loop
while (continueProject) {

  //password is incorrect
  const password = await inquirer.prompt([{
    type: 'password',
    name: "number",
    message: "Enter your pin",
  }])

  if (password.number != pin) {
    console.log(chalk.redBright("Invalid Password"));

    //Password Correct
  } else {

    //Options
    const select = await inquirer.prompt([{
      type: "list",
      name: "option",
      message: "Select One Option",
      choices: ["Transfer money", "Receive money", "Easyload bundles", "Bill payments", "Saving", "Quit"]
    }])

    //select option 1 = Transfer money
    if (select.option === "Transfer money") {
      let transfer = await inquirer.prompt([
        {
          type: "string",
          name: "naming",
          message: "Sender Name",
        },
        {
          type: "string",
          name: "mobileNumber",
          message: "Receiver Mobile Number",
        },
        {
          type: "number",
          name: "money",
          message: "How many amount do you want to transfer",
        },
        {
          type: "confirm",
          name: "amount",
          message: `Are you sure you want to transfer money`,
        },
      ])



      //if-else Conditions In Transfer Money
      try {
        if (transfer.money < 0 || transfer.money === 0 || transfer.money > 50000 || isNaN(transfer.money) || transfer.mobileNumber.length !== 11 || transfer.mobileNumber.length < 11 || transfer.mobileNumber.length > 11 || isNaN(transfer.mobileNumber) || transfer.naming === "") {
          throw new Error("Something is incorrect");

        } else if (!transfer.amount) {
          console.log(chalk.bold.greenBright("No Problem Sir! Try Next Time"));

        } else {
          console.log(chalk.bold.yellowBright(`Successfully transfer ${transfer.money} to ${transfer.naming} account.`));

          let updatedBalance = balance - transfer.money
          console.log(chalk.bold.greenBright("Your remaining balance is " + updatedBalance));
        }
      } catch (error) {
        console.error(chalk.bold.redBright(`An error occured ${error}`));
      }


      //select option 2 = Receive money
    } else if (select.option === "Receive money") {
      let answers = await inquirer.prompt([
        {
          type: "input",
          name: "number",      //name:"myNumber",
          message: "What is your mobile number?"  //yaha apna number dalna ha
        },
        {
          type: "input",
          name: "number",  //name=senderNumber
          message: "Please provide sender mobile number"  //yaha jis nay paisay bhajay ha us ka number
        },
        {
          type: "string",
          name: "names",
          message: "What is your sender name?"
        },
        {
          type: "number",
          name: "moneys",
          message: "How much money you received?"
        },
        {
          type: "confirm",
          name: "confirmation",
          message: "Do you confirm that you made this transaction?"
        },

      ])

      //if-else Conditions In Receiving Money
      try {
        if (answers.number.length !== 11 || answers.number.length < 11 || answers.number.length > 11 || isNaN(answers.number) || answers.naming === "" || answers.money < 0 || answers.moneys === 0 || isNaN(answers.moneys)) {
          throw new Error("Something is incorrect");

        } else if (!answers.confirmation) {
          console.log(chalk.bold.greenBright("No Problem Sir! Try Next Time"));

        } else {
          console.log(chalk.bold.yellowBright(`Successfully receive ${answers.moneys} from ${answers.names} account.`));

          let updatedBalance = balance + answers.moneys
          console.log(chalk.bold.greenBright("Your Updated Balance is " + updatedBalance));
        }
      } catch (error) {
        console.log(error);
      }

      //select option 3 = Easyload bundles
    } else if (select.option === "Easyload bundles") {
      let easyload = await inquirer.prompt([
        {
          type: "list",
          name: "choose",
          message: "Select any one SIM",
          choices: ["Telenor", "Jazz", "Zong"]
        },
      ])

      //Jazz Packages
      if (easyload.choose === "Jazz") {
        let answers = await inquirer.prompt([
          {
            type: 'list',
            name: 'package',
            message: 'Select a Jazz package:',
            choices: [
              {
                name: 'Monthly Super Duper Offer',
                value: {
                  minutes: '3000 Jazz & Warid minutes',
                  sms: '3000',
                  data: '3 GBs',
                  validity: '30 days'
                }
              },
              {
                name: 'Weekly Mega Offer',
                value: {
                  minutes: '5000 Jazz & Warid minutes',
                  sms: '5000',
                  data: '25 GBs (5GBs from 2:00 AM - 2:00 PM)',
                  validity: '7 days'
                }
              },
              {
                name: 'Daily Super Offer',
                value: {
                  minutes: '300 Jazz & Warid minutes',
                  sms: '150',
                  data: '150 MBs',
                  validity: '1 day'
                }
              },
            ],
          },
        ])

        console.log('Selected package:', answers.package);
        console.log(chalk.bold.yellowBright(`Your recharge was successfully dono.Thanks you for choosing Jazz.`));

        //Telenor Packages
      } else if (easyload.choose === "Telenor") {
        let select = await inquirer.prompt([
          {
            type: 'list',
            name: 'packages',
            message: 'Select a Telenor package:',
            choices: [
              {
                name: 'Monthly All in One Offer',
                value: {
                  minutes: '2000 Telenor & PTCL minutes',
                  sms: '2000',
                  data: '2000 MBs',
                  validity: '30 days'
                }
              },
              {
                name: 'Weekly Ultra Plus Offer',
                value: {
                  data: '20 GBs',
                  validity: '7 days'
                }
              },
              {
                name: '4G Daily Lite Bundle',
                value: {
                  data: '50 MBs',
                  validity: '1 day'
                }
              },
            ],
          },
        ])

        console.log('Selected package:', select.packages);
        console.log(chalk.bold.yellowBright(`Your recharge was successfully dono.Thanks you for choosing Telenor.`));

        //Zong Packages
      } else {
        let ans = await inquirer.prompt([
          {
            type: 'list',
            name: 'package3',
            message: 'Select a Zong package:',
            choices: [
              {
                name: 'Zong Monthly Max',
                value: {
                  minutes: '10,000 MBs, 500 All Networks Mins, 5000 SMS',
                  validity: '30 days',
                  price: 'PKR 950'
                }
              },
              {
                name: 'Zong Weekly All-In-1 Bundle',
                value: {
                  minutes: '2500 MBs, 100 All Networks Mins, 100 SMS',
                  validity: '7 days',
                  price: 'PKR 200'
                }
              },
              {
                name: 'Daily Super Offer',
                value: {
                  minutes: '300 Zong & Warid minutes',
                  sms: '150',
                  data: '150 MBs',
                  validity: '1 day'
                }
              },
            ],
          },
        ])

        console.log('Selected package:', ans.package3);
        console.log(chalk.bold.yellowBright(`Your recharge was successfully dono.Thanks you for choosing Zong.`));

      }

      //select option 4 = Bill payments
    } else if (select.option === "Bill payments") {
      const bill = await inquirer.prompt([{
        type: "list",
        name: "type",
        message: "Please select the type of bill",
        choices: ["Electricity Bill", "Water Bill", "Internet Bill", "Gas Bill"]
      },
      {
        type: "number",
        name: "amount",
        message: "Enter the amount to pay"
      },
      {
        type: "number",
        name: "accountNumber",
        message: "Enter your account number"
      }
      ])
      console.log(chalk.bold.yellowBright(`Processing ${bill.type} payment.....`));
      console.log(chalk.bold.greenBright(`Your ${bill.type} is successfully paid.`));
      let remainingAmount = balance - bill.amount
      console.log(chalk.bold.blueBright("Your remaining amount is " + remainingAmount));


      //select option 4 = Saving
    } else if (select.option === "Saving") {
      const saving = await inquirer.prompt([{
        type: "number",
        name: "initialAmount",
        message: "How much money would you like to deposit initially?"
      },
      {
        type: "list",
        name: "savingGoal",
        message: "What is your saving goal?",
        choices: ["Vacation", "Emergency Fund", "Home Purchase", "Other"]
      },
      {
        type: "number",
        name: "monthlyContribution",
        message: "How much money do you plan to contribute monthly to your saving?"
      },
      ])
      console.log(chalk.bold.yellowBright("Okay! Your amount was automatically deducted to your monthly income and saved it to your account."));

      //select option 4 = Quit
    } else {
      const select = await inquirer.prompt([{
        type: "confirm",
        name: "option",
        message: "Do you want to exit",
      }])
      if (select.option === true) {
        break;
      }

    }
  }
}
console.log(chalk.bold.blueBright("============================================================================"));
console.log(chalk.bold.blueBright("\n                💰💲💰💲 Thanks for using my application 💰💲💰💲                              "));
console.log(chalk.bold.blueBright("\n============================================================================"));

















