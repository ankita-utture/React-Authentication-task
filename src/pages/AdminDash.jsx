import { useState, useEffect } from "react";
import LogoutButton from "../Components/LogoutButton";

export default function AdminDash() {

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

      <nav className="navbar navbar-dark bg-dark shadow">

        <div className="container">

          <span className="navbar-brand fw-bold">
            👑 Admin Dashboard
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

                <span className="badge bg-dark mb-2">
                  Administrator
                </span>

                <h2 className="fw-bold">
                  Welcome, {user.userName}! 👋
                </h2>

                <p className="text-muted mb-0">
                  You are logged in as an Administrator.
                </p>

              </div>

            </div>


            <div className="row g-4">

              <div className="col-md-4">

                <div className="card border-0 shadow-sm rounded-4 h-100">

                  <div className="card-body p-4">

                    <h5 className="fw-bold">
                      👥 Users
                    </h5>

                    <h2 className="fw-bold mt-3">
                      120
                    </h2>

                    <p className="text-muted">
                      Registered users
                    </p>

                  </div>

                </div>

              </div>


              <div className="col-md-4">

                <div className="card border-0 shadow-sm rounded-4 h-100">

                  <div className="card-body p-4">

                    <h5 className="fw-bold">
                      📊 Reports
                    </h5>

                    <h2 className="fw-bold mt-3">
                      32
                    </h2>

                    <p className="text-muted">
                      Available reports
                    </p>

                  </div>

                </div>

              </div>


              <div className="col-md-4">

                <div className="card border-0 shadow-sm rounded-4 h-100">

                  <div className="card-body p-4">

                    <h5 className="fw-bold">
                      ⚙️ Settings
                    </h5>

                    <h2 className="fw-bold mt-3">
                      Manage
                    </h2>

                    <p className="text-muted">
                      System settings
                    </p>

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