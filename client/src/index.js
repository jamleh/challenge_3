import React from 'react';
import ReactDom from 'react-dom';

const form =<form > 
        User Name: <input name='username' type='text' placeholder='Enter your user name here' />
        <p/>
        Password: <input name='password' type='password' placeholder='Enter your password here' />
        <p/>
        <input type='submit' value='Next' />
</form>;
ReactDom.render(form, document.getElementById("root"));
