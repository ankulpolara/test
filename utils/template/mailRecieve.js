

const mailRecieve = (email, number, text) => {

    return (
        ` <html lang="en">
        <head>
           
           
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #111;
                    color: #fff;
                    padding: 20px;
                }
        
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    background-color: #333;
                    padding: 20px;
                    border-radius: 5px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
                }
        
                h2 {
                    color: #FFD700; /* Yellow */
                }
        
                p {
                    color: #bbb;
                }
        
                .confirmation-message {
                    margin-top: 20px;
                    color: #00FF00; /* Green */
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h2>Contact Form Submission Confirmation</h2>
                <p>Thank you for submitting the contact form on our website. We have received your information.</p>
        
                <div class="confirmation-message">
                    <p>Your query is important to us, and we will get back to you as soon as possible.</p>
                </div>
            </div>
        </body>
        </html>="currentTime"></p>
              <script src="script.js"></script>
          </body>
        </html>`
    )
}


module.exports = mailRecieve;
