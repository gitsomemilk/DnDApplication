import React from 'react';
import "./Signuppage.css";
import NavBar from "../../Components/Navigation/Navbar/NavBar";
import Input from "../../Components/Input/Input";
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";

function Signuppage(props) {

    const {handleSubmit, formState: {errors},register} = useForm();

async function registerUser(data){
    console.log(data)

    try{

    }catch (e){
        console.error(e)
    }
}


    return (
        <>
         <NavBar></NavBar>
            <div className="signup-form-outer">
                <form onSubmit={handleSubmit(registerUser)} className="signup-form-inner" >
                    <Input
                        id="username"
                        labelText="Username:"
                        type="text"
                        name="username"
                        className="signup-input-text"
                        validationRules={{
                            required: {
                                value : true,
                                message: 'this field is required'
                            }
                        }}
                        register={register}
                        errors={errors}
                    />
                    <Input
                        id="password"
                        labelText="Password:"
                        type="password"
                        name="password"
                        className="signup-input-text"
                        validationRules={{
                            required: {
                                value : true,
                                message: 'this field is required'
                            }
                        }}
                        register={register}
                        errors={errors}
                    />
                    <Input
                        id="email"
                        labelText="E-mail:"
                        type="email"
                        name="email"
                        className="signup-input-text"
                        validationRules={{
                            required: {
                                value : true,
                                message: 'this field is required'
                            }
                        }}
                        register={register}
                        errors={errors}
                    />
                    <label htmlFor="role-selector">Dungeon Master or Player</label>
                    <br/>
                    <select
                        name="dungeon-master"
                        id="dungeon-master"
                        {...register("dungeon-master",{
                            required: {
                                value : true,
                                message: 'this field is required'
                            }
                        })}
                    >
                        <option value= "false" >
                            Dungeon Master
                        </option>
                        <option value="true" >
                            Player
                        </option>
                    </select>
                    <br/>
                    <button className="signup-button" type="submit">Signup</button>
                </form>
                <br/>
                <p>already have a account? press  <Link to="/login">here</Link> to login.</p>

            </div>
        </>
    );
}

export default Signuppage;