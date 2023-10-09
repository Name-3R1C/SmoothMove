import React, { useState } from "react";
import axios from "axios";
import "./Login.scss"; // Import your custom SCSS for additional styling

export default function Login({ onLogin }) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const signin = () => {
    axios
      .post("/api/signin", { user: user })
      .then((res) => {
        if (isNaN(res.data.userID)) {
          setResponseMessage(res.data);
        } else {
          setResponseMessage("");
          onLogin(res.data);
        }
      })
      .catch((e) => {
        console.error(e.data);
        setResponseMessage("An error occurred.");
      });
  };

  return (
    <div className="container-login">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-5">
          <div className="card card-login">
            <div className="card-body">
              <h2 className="card-title card-title-login">Log In</h2>

              <div className="mb-3 input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email address"
                  onChange={(event) =>
                    setUser({ ...user, email: event.target.value })
                  }
                />
              </div>
              <div className="mb-3 input-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={(event) =>
                    setUser({ ...user, password: event.target.value })
                  }
                />
              </div>
              <div className="d-flex justify-content-end">
                <button
                  type="button"
                  className="btn btn-primary float-right"
                  onClick={signin}
                >
                  Sign in
                </button>
                {responseMessage && (
                  <div className="alert alert-danger mt-3">
                    {responseMessage}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// import React, { useState } from "react";
// import axios from "axios";
// import "./Login.scss"; // Import your custom SCSS for additional styling

// export default function Login(onLogin) {
//   const [user, setUser] = useState({
//     email: "",
//     password: "",
//   });

//   const [responseMessage, setResponseMessage] = useState("");

//   const signin = () => {
//     axios
//       .post("/api/signin", { user: user })
//       .then((res) => {
//         if (isNaN(res.data.userID)) {
//           setResponseMessage(res.data);
//         } else {
//           setResponseMessage("");
//           onLogin(res.data);
//         }
//       })
//       .catch((e) => {
//         console.error(e.data);
//         setResponseMessage("An error occurred.");
//       });
//   };
//   return (
//     <div className="container-fluid h-100">
//       <div className="row h-100 justify-content-center align-items-center">
//         <div className="container login-container mt-4">
//           <div className="row justify-content-center">
//             <div className="col-md-6">
//               <div className="card login-card">
//                 <div className="card-body">
//                   <h2 className="card-title">Log In</h2>
//                   <form>
//                     <div className="mb-3">
//                       <label htmlFor="email" className="form-label">
//                         Email address
//                       </label>
//                       <input
//                         type="email"
//                         className="form-control"
//                         placeholder="Enter your email"
//                         onChange={(event) =>
//                           setUser({ ...user, email: event.target.value })
//                         }
//                       />
//                     </div>
//                     <div className="mb-3">
//                       <label htmlFor="password" className="form-label">
//                         Password
//                       </label>
//                       <input
//                         type="password"
//                         className="form-control"
//                         placeholder="Enter your password"
//                         onChange={(event) =>
//                           setUser({ ...user, password: event.target.value })
//                         }
//                       />
//                     </div>
//                     <div className="d-flex justify-content-end">
//                       <button
//                         type="button"
//                         className="btn btn-primary btn-block"
//                         onClick={signin}
//                       >
//                         Sign in
//                       </button>
//                       {responseMessage && (
//                         <div className="alert alert-danger mt-3">
//                           {responseMessage}
//                         </div>
//                       )}
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
