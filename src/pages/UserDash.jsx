import { useState, useEffect } from "react";

export default function UserDash() {

  const [user, setUser] = useState(null);


  useEffect(() => {

    const users =
      JSON.parse(localStorage.getItem("users")) || [];


    const loggedInUser =
      users.find(
        (user) => user.isLoggedin === true
      );


    setUser(loggedInUser);

  }, []);


  return (

    <div className="bg-light min-vh-100">

      {/* Navbar */}

      <nav className="navbar navbar-dark bg-success shadow">

        <div className="container">

          <span className="navbar-brand fw-bold">
            👤 User Dashboard
          </span>

          <LogoutButton />

        </div>

      </nav>


      {/* Main */}

      <div className="container py-5">

        {user && (

          <>

            <div className="card border-0 shadow-sm rounded-4 mb-4">

              <div className="card-body p-4">

                <span className="badge bg-success mb-2">
                  User
                </span>

                <h2 className="fw-bold">
                  Welcome, {user.userName}! 👋
                </h2>

                <p className="text-muted mb-0">
                  You have successfully logged in to your User Dashboard.
                </p>

              </div>

            </div>


            <div className="row g-4">

              <div className="col-md-6">

                <div className="card border-0 shadow-sm rounded-4 h-100">

                  <div className="card-body p-4">

                    <h5 className="fw-bold">
                      📋 My Profile
                    </h5>

                    <p className="text-muted mt-3">
                      View and manage your profile information.
                    </p>

                    <button className="btn btn-success">
                      View Profile
                    </button>

                  </div>

                </div>

              </div>


              <div className="col-md-6">

                <div className="card border-0 shadow-sm rounded-4 h-100">

                  <div className="card-body p-4">

                    <h5 className="fw-bold">
                      📦 My Orders
                    </h5>

                    <p className="text-muted mt-3">
                      View your previous and current orders.
                    </p>

                    <button className="btn btn-outline-success">
                      View Orders
                    </button>

                  </div>

                </div>

              </div>

            </div>

          </>

        )}

      </div>

    </div>

  );
}