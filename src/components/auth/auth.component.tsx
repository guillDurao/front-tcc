import React, { useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Dialog, TextField } from '@mui/material';
import { StoreContext } from '../../store.context';
import '../../styles/auth.style.css'
import { Button } from '@mui/base';

const AuthPage: React.FC = () => {
    const { authStore } = useContext(StoreContext)
    const authenticated = authStore.isAuthenticated()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <Dialog open={!authenticated}>
            <div className='container'>
                <TextField 
                    className='text-field' 
                    label="Login"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <TextField 
                    className='text-field' 
                    label="Password" 
                    type="password"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} />
                <Button onClick={() => authStore.login({ email, password })}>
                    Login
                </Button>
            </div>
        </Dialog>
    )
}

const Auth = observer(AuthPage)
export { Auth };
