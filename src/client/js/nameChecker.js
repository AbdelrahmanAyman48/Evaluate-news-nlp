function checkForName(inputText) {
    console.log("::: Validating URL :::", inputText);
    const urlRegex = new RegExp(
        /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
    );
    return urlRegex.test(inputText);
}

export { checkForName };



// function checkForName(inputText) {
//     console.log("::: Running checkForName :::", inputText);
//     let names = [
//         "Picard",
//         "Janeway",
//         "Kirk",
//         "Archer",
//         "Georgiou"
//     ];

//     if(names.includes(inputText)) {
//         alert("Welcome, Captain!");
//     }
//     else {
//         alert("Enter a valid captain name");
//     }
// }

// export { checkForName };
