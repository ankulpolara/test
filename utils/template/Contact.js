

 const Contact = (email,number ,text) => {
    
  return (
  `  <!DOCTYPE html>
<html lang="en">

<head>

  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #111;
      color: #fff;
      padding: 20px;
    }

    .container {
      color: #fff;
      max-width: 600px;
      margin: 0 auto;
      background-color: #333;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }

    h2 {
      color: #FFD700;
      /* Yellow */
    }

    p {
      color: #bbb;
    }

    table {
      color: #fff;
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
    }

    th,
    td {
      color: #fff;
      padding: 10px;
      border-bottom: 1px solid #555;
      text-align: left;
    }

    th {
      background-color: #444;
      color: #fff;
    }
  </style>
</head>

<body>
  <div class="container">
    <h2>Contact Form Submission</h2>
    <p>The following information was submitted through the contact form on your website:</p>

    <table>
      <tr>
        <th>Field</th>
        <th>Value</th>
      </tr>
      <tr>
        <td>Email</td>
        <td>${email}</td>
      </tr>
      <tr>
        <td>Phone Number</td>
        <td>${number}</td>
      </tr>
      <tr>
        <td>Query Message</td>
        <td>${text}</td>
      </tr>
      <!-- Add more rows for other form fields as needed -->
    </table>
  </div>
</body>

</html>`
  )
}


module.exports = Contact
