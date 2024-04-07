function furtuneTeller () {

    let motherFirstName,street,favouriteColour,currentAge,number1_10;
    motherFirstName = prompt("Enter your mother first name ");
    street = prompt("Enter the street name you grew up ");
    favouriteColour = prompt("Enter you favorite colour as a child ");
    currentAge = Number(prompt("Enter your current age "));
    number1_10 = Number(prompt("Enter a number between 1 to 10 "));


    console.log( 
    `In ${number1_10} years you are going to meet your best friend named ${motherFirstName} ${street}.
    You will get married in ${currentAge + number1_10} years and have ${currentAge % number1_10} children.
    In ${Math.round(currentAge / number1_10)} years you are going to dye your hair ${ favouriteColour }.`
)


}

furtuneTeller ()



