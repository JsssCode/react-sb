import { AuthContext } from '../../../context';
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import React, { useContext } from 'react'
import { useSelector } from 'react-redux';
import { mockUser } from '../../mock/product-mock';
import styles from './login.module.scss';

export default function Login() {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const login = (event: any) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
  }
  return (
    <div className='flex flex-column align-items-center justify-content-center flex-grow-1'>
      <div className={styles['card']}>
        <form onSubmit={login}>
          <div className='flex flex-column gap-3'>
            <InputText placeholder='Login' />
            <InputText placeholder='Password' className='my-3' type={'password'} />
            <Button className="p-button-rounded" >
              <span className='flex align-items-center justify-content-center w-full'>
                <span className='pr-2'>Log In</span> </span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
