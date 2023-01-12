import React from 'react'

const Login = () => {
  return (
   <div className="vw-100 vh-100 d-flex justify-content-center align-items-center text-center" style={{backgroundColor:'#f1f2f3'}}>
     <main className="form-signin " style={{minWidth:'300px',width:"30%"}}>
      <form>
        <img className="mb-4" src="Infinity-1s-171px.gif" alt="" width="100" height="80" />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating my-2">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
      </form>
    </main>
   </div>
  )
}

export default Login