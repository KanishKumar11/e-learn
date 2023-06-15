import "../styles/globals.css";

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <title>EduWeb - Getting Quality Education is now more easy</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="title" content="Eduweb" />
      <meta
        name="description"
        content="Getting Quality Education is now more easy."
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;500;600;700;800&family=Poppins:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <link rel="icon" href="./favicon.svg" />
    </head>
    <body>{children}</body>
  </html>
);

export default RootLayout;
