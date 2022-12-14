import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const authObject = { 'Project-ID': '1f512ebe-c21c-4249-8510-db906252e132', 'User-Name': username, 'User-Secret': password}

        // Set username and pw to localstorage when entered correctly to login
        try {
           await axios.get('https://api.chatengine.io/chats', { headers: authObject});

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
        } catch (error) {
            setError('Incorrect Username or Password.')
        }

    }
    
    // inputs & button
    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title"> Re:Action Instant Messenger</h1>
                <form onSubmit={handleSubmit}> 
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required/>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required/>
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>

        </div>
    )
}

export default LoginForm;