import { useEffect, useActionState } from "react";
import { useNavigate } from "react-router";

export default function LoginPage() {

  const navigate = useNavigate();

  // Check if any user is registered
  useEffect(() => {

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    if (users.length === 0) {
      navigate("/signup");
    }

  }, [navigate]);


  const HandleFormSubmit = (previousState, formData) => {

    const enteredUserName =
      formData.get("userName");

    const enteredPassword =
      formData.get("userPassword");

    // Get all registered users
    let users =
      JSON.parse(localStorage.getItem("users")) || [];


    // Find the user
    const loggedInUser = users.find(
      (user) =>
        user.userName === enteredUserName
    );


    // Username doesn't exist
    if (!loggedInUser) {

      alert("Please Register First");

      return;

    }


    // Password doesn't match
    if (
      loggedInUser.userPassword !== enteredPassword
    ) {

      alert("Invalid Password");

      return;

    }


    // Make only this user logged in
    users = users.map((user) => ({
      ...user,
      isLoggedin:
        user.userName === enteredUserName
    }));


    // Save updated users
    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );


    alert("Login Successful");


    // Navigate according to role
    if (loggedInUser.userRole === "Admin") {

      navigate("/dashboard");

    }
    else if (
      loggedInUser.userRole === "SaleManager"
    ) {

      navigate("/sales");

    }
    else if (
      loggedInUser.userRole === "User"
    ) {

      navigate("/user");

    }

  };


  const [state, formAction] =
    useActionState(
      HandleFormSubmit,
      null
    );


  return (

    <div className="bg-light min-vh-100 d-flex align-items-center">

      <div className="container">

        <div className="row justify-content-center">

          <div className="col-12 col-sm-10 col-md-7 col-lg-5">

            <div className="card shadow-lg border-0 rounded-4">

              <div className="card-body p-4 p-md-5">

                {/* Heading */}

                <div className="text-center mb-4">

                  <div
                    className="bg-primary text-white rounded-circle d-inline-flex justify-content-center align-items-center mb-3"
                    style={{
                      width: "70px",
                      height: "70px"
                    }}
                  >

                    <span className="fs-2">
                      🔐
                    </span>

                  </div>

                  <h2 className="fw-bold">
                    Welcome Back
                  </h2>

                  <p className="text-muted">
                    Login to continue
                  </p>

                </div>


                {/* Login Form */}

                <form action={formAction}>

                  {/* Username */}

                  <div className="mb-3">

                    <label
                      htmlFor="UserName"
                      className="form-label fw-semibold"
                    >
                      Username
                    </label>

                    <input
                      type="text"
                      id="UserName"
                      name="userName"
                      className="form-control form-control-lg"
                      placeholder="Enter your username"
                      required
                    />

                  </div>


                  {/* Password */}

                  <div className="mb-4">

                    <label
                      htmlFor="UserPassword"
                      className="form-label fw-semibold"
                    >
                      Password
                    </label>

                    <input
                      type="password"
                      id="UserPassword"
                      name="userPassword"
                      className="form-control form-control-lg"
                      placeholder="Enter your password"
                      required
                    />

                  </div>


                  {/* Login Button */}

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg w-100 mb-3"
                  >
                    Login
                  </button>

                </form>


                {/* Register Section */}

                <div className="text-center">

                  <p className="text-muted mb-2">
                    Don't have an account?
                  </p>

                  <button
                    type="button"
                    className="btn btn-outline-primary w-100"
                    onClick={() =>
                      navigate("/signup")
                    }
                  >
                    Create New Account
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}