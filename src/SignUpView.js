import MySignUpFormComponent from './SignUpForm';
import  logo  from './img/logo.png'



const SignUpView = () => {
   
    return (
        <>
            
            <div className='form-container'>
                <img src={logo} alt="The Dog Company Logo" />
                <h2>Registrate!</h2>
                <hr />
                <MySignUpFormComponent />
            </div>
        </>
    )
}

export default SignUpView
