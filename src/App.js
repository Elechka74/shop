import { Layout, Menu, Space } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate, Outlet } from "react-router-dom";
import { api } from './components/Api/api';
import { AuthForm } from "./components/AuthForm/AuthForm";
import { RegForm } from './components/RegForm/RegForm'

const { Header, Content, Footer } = Layout;

function App() {
  const navigate = useNavigate();

  const [isAuth, setIsAuth] = useState(false);
  const [isRegForm, setIsRegForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // проверка авторизован ли пользователь через токен
    const token = localStorage.getItem('token')
    if (token) {
      setIsAuth(true)
      navigate('products')
    }
  }, [])

  const onSignIn = async (values) => {
    const res = await api.auth(values);
    const responce = await res.json();
    const token = responce.token;

    console.log('Запрос авторизации')
    console.log('response ' + res)

    if (token) {
      setIsAuth(true)
      localStorage.setItem('token', responce.token)
      navigate('products')
    } else {
      const error = responce.message;
      setErrorMessage(error)
    }
  }

  const onSignUp = async (values) => {
    const res = await api.reg(values);
    const responce = await res.json();

    console.log('Запрос регистрации')
    console.log('response ' + responce)

    const isRegistered = responce.name != undefined

    if (isRegistered) {
      await onSignIn({'email': values.email, 'password': values.password})
    } else {
      const error = responce.message;
      setErrorMessage(error)
    }
  }

  const menuItems = [
    {
      key: `products`,
      label: `Products`,
    },
    {
      key: `users`,
      label: `Users`,
    }
  ]

  const handleRoute = (event) => {
    navigate(event.key)
  }

  return (
    <Layout className='layout'>
      <div className='wrapper'>
        <Header style={{ position: 'sticky', top: 0, zIndex: 10, width: '100%' }}>

          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['products']}
            items={menuItems}
            onClick={handleRoute}

          />
        </Header>
        <Content>
          <Outlet />

          {!isAuth && !isRegForm && <AuthForm onFinish={onSignIn} />}

          {isRegForm && <RegForm onFinish={onSignUp} />}

          {errorMessage && <div className="errorMessage"> {errorMessage} </div>}

          {!isAuth && !isRegForm && <button onClick={() => { setIsRegForm(true) }}>
            Нет аккаунта? Зарегистрироваться</button>}
          {isRegForm && <button onClick={() => { setIsRegForm(false) }}>
            Назад к авторизации</button>}
        </Content>
        <Footer style={{ textAlign: 'center', position: 'sticky', bottom: 0, zIndex: 10, width: '100%' }}>Текст футера</Footer>
      </div>
    </Layout>


  );
}

export default App;
