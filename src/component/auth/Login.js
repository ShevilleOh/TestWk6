import React, {useState} from 'react';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const { email, password} = formData

    const handleChange = text => e => {
        setFormData({ ...formData, [text]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log("button clicked");
        console.log(email, password);
    };

    return (
        <div className={"login"}>
            <div className={"container"}>
                <div className={"row"}>
                    <div className="col-mid-8 m-auto">
                        <h1 className="display-4 text-center">Login</h1>
                        <p className={"lead text-center"}>
                            Login to your DevConnector account
                        </p>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type={"email"}
                                    className={"form-control form-control-lg"}
                                    placeholder="Email"
                                    name={"email"}
                                    value={email}
                                    onChange={handleChange('email')}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type={"password"}
                                    className={"form-control form-control-lg"}
                                    placeholder="Password"
                                    name={"password"}
                                    value={password}
                                    onChange={handleChange('password')}
                                />
                            </div>
                            <input
                                type="submit"
                                className="btn btn-info btn-block mt-4"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;