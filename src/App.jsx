import React from "react";

class App extends React.Component {

    state = {
        email:"",
        agreement:false,
    }

    emailValue = (e) => {
        this.setState({
            email:e.target.value
        })
    }
    agreementFunc = (e) => {
        this.setState({
            agreement:e.target.checked,
        })
    }
    
    submitDatas = () => {
        const regEX =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        const{email, agreement} = this.state
        if(regEX.test(email) && agreement == true){
                alert("congratulations✔")
        }else{
            alert("Error😤")
        }
    }


  render() {
    const{email, agreement} = this.state
    return (
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h1>CONTACT US</h1>
          </div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={email}
                  onChange={this.emailValue}
                />
                <small id="emailHelp" className="form-text text-muted">
                  We`ll never share your email with anyone else.
                </small>
              </div>
             
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  value={agreement}
                  onChange={this.agreementFunc}
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" className="btn btn-primary" onClick={this.submitDatas}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
