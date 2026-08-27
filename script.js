document.addEventListener("DOMContentLoaded", function () {

    const numberInput = document.getElementById("numberInput");
    const checkButton = document.getElementById("checkButton");
    const result = document.getElementById("result");

    checkButton.addEventListener("click", function () {

        let number = Number(numberInput.value);

        if (numberInput.value.trim() === "") {
            result.innerHTML = "<strong>Please enter a number.</strong>";
            return;
        }

        if (!Number.isInteger(number) || number < 0) {
            result.innerHTML = "<strong>Please enter a positive integer.</strong>";
            return;
        }

        // --------------------------------
        // 1. Sum of digits - WHILE LOOP
        // --------------------------------

        let tempNumber = number;
        let sum = 0;

        while (tempNumber > 0) {
            let digit = tempNumber % 10;
            sum = sum + digit;
            tempNumber = Math.floor(tempNumber / 10);
        }

        // --------------------------------
        // 2. Number of digits - FOR LOOP
        // --------------------------------

        let digitCount = 0;

        if (number === 0) {
            digitCount = 1;
        } else {

            for (let temp = number; temp > 0; temp = Math.floor(temp / 10)) {
                digitCount++;
            }
        }

        // --------------------------------
        // 3. Armstrong Number
        // --------------------------------

        let armstrongSum = 0;
        let armstrongTemp = number;

        if (number === 0) {
            armstrongSum = 0;
        } else {

            while (armstrongTemp > 0) {

                let digit = armstrongTemp % 10;

                armstrongSum =
                    armstrongSum + Math.pow(digit, digitCount);

                armstrongTemp =
                    Math.floor(armstrongTemp / 10);
            }
        }

        let isArmstrong = (armstrongSum === number);

        // --------------------------------
        // 4. Prime Number - FOR LOOP
        // --------------------------------

        let isPrime = true;

        if (number < 2) {

            isPrime = false;

        } else {

            for (let i = 2; i <= Math.sqrt(number); i++) {

                if (number % i === 0) {
                    isPrime = false;
                    break;
                }
            }
        }

        // --------------------------------
        // 5. Factors - FOR LOOP
        // --------------------------------

        let factors = [];

        if (number === 0) {

            factors.push("Every non-zero integer divides 0");

        } else {

            for (let i = 1; i <= number; i++) {

                if (number % i === 0) {
                    factors.push(i);
                }
            }
        }

        // --------------------------------
        // 6. Do-While Loop
        // --------------------------------

        let doWhileMessage = "";
        let counter = 1;

        do {
            doWhileMessage += counter + " ";
            counter++;
        } while (counter <= 3);

        // --------------------------------
        // Display Result
        // --------------------------------

        result.innerHTML = `
            <h2>Result</h2>

            <p>
                <strong>Number:</strong> ${number}
            </p>

            <p>
                <strong>Number of digits:</strong> ${digitCount}
            </p>

            <p>
                <strong>Sum of its digits:</strong> ${sum}
            </p>

            <p>
                <strong>Is it an Armstrong number?</strong>
                ${isArmstrong ? "Yes" : "No"}
            </p>

            <p>
                <strong>Is it a Prime number?</strong>
                ${isPrime ? "Yes" : "No"}
            </p>

            <p>
                <strong>Factors:</strong>
                ${factors.join(", ")}
            </p>

            <p>
                <strong>Do-While Loop Output:</strong>
                ${doWhileMessage}
            </p>
        `;

        // Console output
        console.log("Number:", number);
        console.log("Number of digits:", digitCount);
        console.log("Sum of digits:", sum);
        console.log("Armstrong:", isArmstrong);
        console.log("Prime:", isPrime);
        console.log("Factors:", factors);

    });

});