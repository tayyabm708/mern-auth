import React from "react";

function Home() {
  return (
    <div className="px-4 py-12 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-800 ">Welcome to my Authentication App</h1>
      <p className="mb-4 text-slate-700 ">
        A powerful and seamless solution for managing user authentication is
        built on the robust MERN stack (MongoDB, Express, React, Node.js). This
        app leverages the Firebase API to facilitate secure and efficient Google
        login integration, ensuring a smooth user experience.
      </p>
      <p className="mb-4 text-slate-700 ">With our Authentication App, you can easily:</p>
      <ul className=" text-slate-700 ">
        <li>
          <strong>Sign In:</strong> Quickly sign in using your Google account,
          simplifying the login process and enhancing security.
        </li>
        <li>
          <strong>Sign Out:</strong> Effortlessly sign out from your account,
          ensuring your session remains secure.
        </li>
        <li>
          <strong>Update Account:</strong> Modify your account details with
          ease, keeping your information up-to-date.
        </li>
        <li>
          <strong>Delete Account:</strong> Remove your account when necessary,
          giving you full control over your data.
        </li>
        <li>
          <strong>Authentication:</strong> Enjoy robust authentication features,
          ensuring only authorized users can access your app.
        </li>
      </ul>

      <p className="mb-4 mt-4 text-slate-700 ">
        This app not only enhances user management but also sets the foundation for future developments. Designed to serve as a boilerplate for all forthcoming MERN projects, it ensures a consistent and reliable user profiling module across various applications.
    </p>
      
     
    </div>
  );
}

export default Home;
