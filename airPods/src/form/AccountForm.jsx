import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import commonContext from "../common/CommonContext";
import useForm from "../hookes/useForm";
import useOutsideClose from "../hookes/useOutsideClose";
import useScrollDisable from "../hookes/useScrollDisable";
import '../stylesCSS/Form.css'
const AccountForm = () => {
  const { isFormOpen, toggleForm } = useContext(commonContext);
  const { inputValues, handleInputValues, handleFormSubmit } = useForm();

  const formRef = useRef();

  useOutsideClose(formRef, () => {
    toggleForm(false);
  });

  useScrollDisable(isFormOpen);

  const [isSignupVisible, setIsSignupVisible] = useState(false);

  // Signup-form visibility toggling
  const handleIsSignupVisible = () => {
    setIsSignupVisible((prevState) => !prevState);
  };

  return (
    <>
      {isFormOpen && (
        <div className="border register_form">
          <div className="modal_centered">
            <form id="account_form" ref={formRef} onSubmit={handleFormSubmit}>
              {/*Form-Header */}
              <div className="form_head">
                <h2 className="text-secondary fw-bold ms-5 mt-3">{isSignupVisible ? "Signup" : "Login"}</h2>
                <p className="text-secondary ms-5  mt-2">
                  {isSignupVisible
                    ? "Already have an account ?"
                    : "New to Tech-Shop ?"}
                  &nbsp;&nbsp;
                  <button type="button" className=" btn login-acc-btn text-light" onClick={handleIsSignupVisible}>
                    {isSignupVisible ? "Login" : "Create an account"} 
                  </button>
                </p>
              </div>

              {/* Form-Body*/}
              <div className="form_body">
                {isSignupVisible && (
                  <div >
                    <input
                      type="text"
                      placeholder="Username"
                      name="username"
                      className="input_field "
                      value={inputValues.username || ""}
                      onChange={handleInputValues}
                      required
                    />
                  </div>
                )}

                <div >
                  <input
                    type="email"
                    name="mail"
                    placeholder="Email"
                    className="input_field"
                    value={inputValues.mail || ""}
                    onChange={handleInputValues}
                    required
                  />
                </div>

                <div >
                  <input
                    type="password"
                    name="password"
                    className="input_field" 
                    placeholder="Passwors"
                    value={inputValues.password || ""}
                    onChange={handleInputValues}
                    required
                  />
                </div>

                {isSignupVisible && (
                  <div className="input_box">
                    <input
                      type="password"
                      name="conf_password"
                      className="input_field"
                      placeholder="Confirm Password"
                      value={inputValues.conf_password || ""}
                      onChange={handleInputValues}
                      required
                    />
                  </div>
                )}

                <button type="submit" className="btn mt-3 text-light login-register-btn" style={{backgroundColor:isSignupVisible?'red' :'green'}}>
                  {isSignupVisible ? "Signup" : "Login"}
                </button>
              </div>

              {/* Form-Footer */}
              <div className="form_foot">
                <p className="text-center text-secondary mt-3 ">or login with</p>
                <div className="d-flex justify-content-around my-3">
                  <Link to="/" className=" bg-primary text-decoration-none text-light px-3 py-2" >Facebook</Link>
                  <Link to="/" className=" bg-danger text-decoration-none text-light px-3 py-2">Google</Link>
                  <Link to="/" className=" bg-info text-decoration-none text-light px-3 py-2">Twitter</Link>
                </div>
              </div>

              {/*Form-Close-Btn*/}
        <div className="modal_centered">
    
        <div className="close_btn" onClick={() => toggleForm(false)}>
            &times; 
        </div>
     
         </div>

            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AccountForm;
