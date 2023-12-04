import React from "react";

function Login() {
  return (
    <form>
      <div class="box">
        <h1>Login/Sign</h1>
        <div className="inputs">
          <input
            type="email"
            name="email"
            value="email"
            //   onFocus="field_focus(this, 'email');"
            //   onblur="field_blur(this, 'email');"
            class="email"
          />

          <input
            type="password"
            name="email"
            value="email"
            //   onFocus="field_focus(this, 'email');"
            //   onblur="field_blur(this, 'email');"
            class="email"
          />
        </div>

        <a href="#">
          <div class="btn">Log In</div>
        </a>
        <a href="#">
          <div id="btn2">Sign Up</div>
        </a>
      </div>
    </form>
  );
}

export default Login;
