import React from 'react';

const Login = ({loginmessage}) => {
    var alert="";
    if(loginmessage){
      alert="alert alert-danger";
    }
    return (
        <>
        <div className='login-area'>
          <div className='container'>
            <div className='row'>
              <div className='login-form  p-5'>
                <h3>Enter your Client ID and Secret Key</h3>
                <p>*** We call APIs only, we don&apos;t store any data</p>
                
                <div className={alert}>{loginmessage}</div>
                <form id='loginForm' action='/dashboard'  method='GET'>
                  <div className='row'>
                    <div className='mb-3 col-lg-12 col-md-12'>
                      <div className='form-group'>
                        <input
                          type='text'
                          name='accountid'
                          id='accountid'
                          className='form-control'
                          required
                          placeholder='Account ID/Munchkin ID *'
                        />
                      </div>
                    </div>
                    <div className='mb-3 col-lg-12 col-md-12'>
                      <div className='form-group'>
                        <input
                          type='text'
                          name='clientid'
                          id='clientid'
                          className='form-control'
                          required
                          placeholder='Client ID*'
                        />
                      </div>
                    </div>
                    <div className='mb-3 col-lg-12 col-md-12'>
                      <div className='form-group '>
                        <input
                          type='text'
                          name='secretkey'
                          id='secretkey'
                          className='form-control'
                          required
                          placeholder='Secret Key*'
                        />
                      </div>
                    </div>
                    <div className='mb-3 col-lg-12 col-md-12'>
                      <button type='submit' className='btn btn-primary'>
                        Enter the Dashboard
                        <i className='ri-arrow-right-line'></i>
                        <span></span>
                      </button>
                    </div>
                  </div>
                </form>
                <p>
                ** We are in beta version so please test in your sandbox Marketo before running into the live version.
                </p>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
                .login-form {
                    text-align: center;
                    max-width: 700px;
                    margin: auto;
                }
                
                .login-form h3 {
                    font-size: 28px;
                    margin-bottom: 45px;
                }
                
                .login-form .form-group {
                    margin-bottom: 20px;
                }
                
                .login-form .form-group .form-control {
                    display: block;
                    width: 100%;
                    height: 60px;
                    outline: 0;
                    background-color: #F4F8FC;
                    border: 1px solid #E6EDF6;
                    border-radius: 5px;
                    -webkit-box-shadow: none;
                            box-shadow: none;
                    padding: 15px;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                    font-size: 15px;
                }
                
                .login-form .form-group .form-control::-webkit-input-placeholder {
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                    color: var(--paragraph-color);
                }
                
                .login-form .form-group .form-control:-ms-input-placeholder {
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                    color: var(--paragraph-color);
                }
                
                .login-form .form-group .form-control::-ms-input-placeholder {
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                    color: var(--paragraph-color);
                }
                
                .login-form .form-group .form-control::placeholder {
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                    color: var(--paragraph-color);
                }
                
                .login-form .form-group .form-control:focus {
                    outline: 0;
                    background-color: var(--white-color);
                    border-color: var(--optional-color);
                    -webkit-box-shadow: none;
                            box-shadow: none;
                }
                
                .login-form .form-group .form-control:focus::-webkit-input-placeholder {
                    color: transparent;
                }
                
                .login-form .form-group .form-control:focus:-ms-input-placeholder {
                    color: transparent;
                }
                
                .login-form .form-group .form-control:focus::-ms-input-placeholder {
                    color: transparent;
                }
                
                .login-form .form-group .form-control:focus::placeholder {
                    color: transparent;
                }
                
                .login-form .form-group textarea.form-control {
                    height: auto;
                    padding: 15px;
                    line-height: 1.5rem;
                }
                
                .login-form .form-group .help-block.with-errors ul {
                    color: red;
                    margin-bottom: 0;
                    margin-top: 10px;
                    text-align: left;
                }
                
                .login-form .form-group .help-block.with-errors ul li {
                    font-size: 14px;
                }
                
                .login-form #msgSubmit {
                    margin: 0;
                    font-size: 1.3rem;
                }
                
                .login-form #msgSubmit.text-danger, .login-form #msgSubmit.text-success {
                    margin-top: 25px;
                    font-size: 18px;
                    font-weight: 500;
                }
                
                .login-form .btn-primary {
                    padding: 15px 25px;
                }
            `}</style>
        
            
        </>
    )
}

export default Login