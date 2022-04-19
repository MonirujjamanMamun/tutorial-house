import React from 'react';

const Blog = () => {
    return (
        <div className='row '>
            <div className='col card bg-gray m-3'>
                <h6>What other services does firebase provide other than authentication?</h6>
                <p> Firebase is a full package that can help in developing your mobile or web applications faster with fewer resources and more efficiently. Without authentication firebase provide many other services. For example :</p>
                    <ol>
                        <li>Cloude Firestore</li>
                        <li>Cloude storage</li>
                        <li>Hosting</li>
                        <li>Google Analytics</li>
                        <li>Remote Config</li>
                    </ol>

            </div>
            <div className='col card bg-gray m-3'>
                <h4>Difference between authorization and authentication.</h4>
                <ol>
                    <h6>Authentication:</h6>
                    <li>Authentication verifite the user</li>
                    <li>Authentication is the good identity and access management process.</li>
                    <li>The server uses authentication when someone wants to access the information</li>
                    <li>Authentication works through passwords, biometric information, and other information provided</li>
                </ol>
                <ol>
                    <h6>Authorization</h6>
                    <li>Authorization isn't visible to or changeable by the user.</li>
                    <li>Authorization always takes place after authentication.</li>
                    <li>It defines that what data and information one user can access.</li>
                </ol>
            </div>
            <div className='col card bg-gray m-3'>
                <h6>Why are you using firebase? </h6>
                <p>Firebase is more easy to use and secur other than provider. Firebase provides multiple ways of authenticating users by email, passwords, facebook, google, github etc. Firebase authentication provide backend servise, readimeat UI etc. </p>
                <h6>What other options do you have to implement authentication?</h6>
                <ol>
                    <li>Okta</li>
                    <li>AWS</li>
                    <li>Amazon Cognito</li>
                    <li>JSON Web Tocken</li>

                </ol>
            </div>
        </div>
    );
};

export default Blog;