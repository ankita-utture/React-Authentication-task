import { useEffect, useActionState } from "react";
import { useNavigate } from "react-router";

export default function SignUp() {

  const navigate = useNavigate();


  const HandleFormSubmit = (previousState, formData) => {

    const userName =
      formData.get("userName");

    const userPassword =
      formData.get("userPassword");

    const userRole =
      formData.get("userRole");


    return {

      userName,

      userPassword,

      userRole,

      isLoggedin: false

    };

  };


  const [state, formAction] =
    useActionState(
      HandleFormSubmit,
      null
    );


  useEffect(() => {

    if (
      state &&
      state.userName != null &&
      state.userPassword != null &&
      state.userRole != null
    ) {

      // Get existing users

      let users =
        JSON.parse(localStorage.getItem("users")) || [];


      // Check duplicate username

      const alreadyExist =
        users.some(
          (user) =>
            user.userName === state.userName
        );


      if (alreadyExist) {

        alert("User already exists");

        return;

      }


      // Add new user

      users.push(state);


      // Save users

      localStorage.setItem(
        "users",
        JSON.stringify(users)
      );


      alert("Registration Successful");


      // Go to Login

      navigate("/login");

    }

  }, [state, navigate]);


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
                    className="bg-success text-white rounded-circle d-inline-flex justify-content-center align-items-center mb-3"
                    style={{
                      width: "70px",
                      height: "70px"
                    }}
                  >

                    <span className="fs-2">
                      📝
                    </span>

                  </div>

                  <h2 className="fw-bold">
                    Create Account
                  </h2>

                  <p className="text-muted">
                    Register your account
                  </p>

                </div>


                {/* Form */}

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

                  <div className="mb-3">

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
                      placeholder="Create a password"
                      required
                    />

                  </div>


                  {/* Role */}

                  <div className="mb-4">

                    <label
                      htmlFor="UserRole"
                      className="form-label fw-semibold"
                    >
                      Select Role
                    </label>

                    <select
                      id="UserRole"
                      name="userRole"
                      className="form-select form-select-lg"
                      required
                    >

                      <option value="">
                        Select your role
                      </option>

                      <option value="Admin">
                        Admin
                      </option>

                      <option value="SaleManager">
                        Sale Manager
                      </option>

                      <option value="User">
                        User
                      </option>

                    </select>

                  </div>


                  {/* Register */}

                  <button
                    type="submit"
                    className="btn btn-success btn-lg w-100 mb-3"
                  >
                    Register
                  </button>

                </form>


                {/* Login */}

                <div className="text-center">

                  <p className="text-muted mb-2">
                    Already have an account?
                  </p>

                  <button
                    type="button"
                    className="btn btn-outline-success w-100"
                    onClick={() =>
                      navigate("/login")
                    }
                  >
                    Back to Login
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