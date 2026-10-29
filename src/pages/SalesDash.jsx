import { useState, useEffect } from "react";

export default function SalesDash() {

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

      <nav className="navbar navbar-dark bg-primary shadow">

        <div className="container">

          <span className="navbar-brand fw-bold">
            💼 Sales Dashboard
          </span>

          <LogoutButton />

        </div>

      </nav>


      {/* Main Content */}

      <div className="container py-5">

        {user && (

          <>

            {/* Welcome */}

            <div className="card border-0 shadow-sm rounded-4 mb-4">

              <div className="card-body p-4">

                <h2 className="fw-bold">
                  Welcome, {user.userName}! 👋
                </h2>

                <p className="text-muted mb-0">
                  Welcome to your Sales Manager Dashboard.
                </p>

              </div>

            </div>


            {/* Cards */}

            <div className="row g-4">

              <div className="col-md-4">

                <div className="card border-0 shadow-sm rounded-4 h-100">

                  <div className="card-body p-4">

                    <h5 className="fw-bold">
                      📦 Products
                    </h5>

                    <h2 className="fw-bold mt-3">
                      25
                    </h2>

                    <p className="text-muted">
                      Total products
                    </p>

                  </div>

                </div>

              </div>


              <div className="col-md-4">

                <div className="card border-0 shadow-sm rounded-4 h-100">

                  <div className="card-body p-4">

                    <h5 className="fw-bold">
                      🛒 Orders
                    </h5>

                    <h2 className="fw-bold mt-3">
                      18
                    </h2>

                    <p className="text-muted">
                      Total orders
                    </p>

                  </div>

                </div>

              </div>


              <div className="col-md-4">

                <div className="card border-0 shadow-sm rounded-4 h-100">

                  <div className="card-body p-4">

                    <h5 className="fw-bold">
                      💰 Sales
                    </h5>

                    <h2 className="fw-bold mt-3">
                      ₹45,000
                    </h2>

                    <p className="text-muted">
                      Total sales
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