import { checkForName } from './nameChecker'; // Updated to validate URLs

// import { checkForName } from './nameChecker';

// If working on Udacity workspace, update this with the Server API URL
const serverURL = 'http://localhost:8000/analyze'; // Adjust the URL as needed

const form = document.getElementById('urlForm');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const formText = document.getElementById('name').value;

    if (Client.checkForName(formText)) {
        console.log("::: Valid URL :::");
        fetch(serverURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: formText })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Sentiment Analysis Result:', data);
            document.getElementById('results').innerHTML = `Sentiment: ${data.score_tag}`;
        })
        .catch(error => {
            console.error('Error during sentiment analysis:', error);
            document.getElementById('results').innerHTML = 'Error during sentiment analysis.';
        });
    } else {
        console.log("Invalid URL entered.");
        document.getElementById('results').innerHTML = 'Please enter a valid URL.';
    }
}


export { handleSubmit };































// // Replace checkForName with a function that checks the URL
// import { checkForName } from './nameChecker'

// // If working on Udacity workspace, update this with the Server API URL e.g. `https://wfkdhyvtzx.prod.udacity-student-workspaces.com/api`
// // const serverURL = 'https://wfkdhyvtzx.prod.udacity-student-workspaces.com/api'
// const serverURL = 'https://localhost:3000/api'

// const form = document.getElementById('urlForm');
// form.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//     event.preventDefault();

//     // Get the URL from the input field
//     const formText = document.getElementById('name').value;

//     // This is an example code that checks the submitted name. You may remove it from your code
//     checkForName(formText);
//     console.log("::: Form Submitted :::")
//     // Check if the URL is valid
 
//         // If the URL is valid, send it to the server using the serverURL constant above
      
// }

// // Function to send data to the server

// // Export the handleSubmit function
// export { handleSubmit };

