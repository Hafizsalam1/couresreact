import React from "react";

const Login = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSubmit = (e) => {

        e.preventDefault();
        if (email == "email@gmail.com" && password == "123456"){
          alert(       
            `\nEmail: ${email}`)
        }
        else {
          alert(       
            `email/password salah`)
        }

    }


    return(
        <>
        <h3>Login page </h3>
        <form onSubmit={handleSubmit}>
        <label>email
        <input
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={"aaaa.aaa@aaa.com"}
        />
      </label>
      <label>password
        <input
          type="text" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button>
        submit
      </button>
        </form>
        </>
    )
}

export default Login