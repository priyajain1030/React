import React, {useState} from "react";


function LoginComponent(){

    const [form, getformdata] = useState({name1: 'priya', email : 'pj@1030', password: 'pass'});
    const loginUser = (event) => {
        event.preventDefault();
        console.log(form);
    };

    const setformdata = (value, name) => {
        getformdata((previousState) => { return {...previousState, [name]: value} })
        console.log("hi chnaged");
    }
    return(
        <div>
            <h1> My Register Form</h1>
       
            <div className="container">
                <div className="row">
                    <div className="col">
                    <form onSubmit={loginUser}>

                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Name</label>
                        <input type="text" value={form.name1} onChange={(event) => setformdata(event.target.value, 'name1')} class="form-control" id="exampleFormControlInput1" placeholder="Name here"></input>
                    </div>

                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" value={form.email} onChange={(event) => setformdata(event.target.value, 'email')}  class="form-control" id="exampleFormControlInput1" placeholder="Email Here"></input>
                    </div>

                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Password</label>
                        <input type="password" value={form.password} class="form-control" id="exampleFormControlInput1" placeholder="Password"></input>
                    </div>

                    
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Mobile</label>
                        <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Mobile"></input>
                    </div>

                    <button class= "btn btn-primary">Submit
                    </button>
                    </form>
                    </div>
                </div>
                
                
            </div>  
         
           
        </div>
    )

}

export default LoginComponent;