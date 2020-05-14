const { Component } = React

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            view: 'login',
            Spotytoken: "BQBV1Uezj2zxfOCE1NDtoeCFED8ZHP6QEgsKw5_z-A_TxgV1-wBTASKHxLY3sp6skd23Y4kr2XB_Y_I_STIOvhfSVnSvVXVe-UXGMQRjLx2tK3Mq8QL3NCXQmTKo7IkAgFITWfck4yU",
            token: undefined
        }
    }

    onChangeView = (_view) => this.setState({ view: _view })

    handleLogin = (_token) => {
        this.setState({ token: _token })

        this.setState({ view: 'home' })
    }

    handleRegister = () => {
        this.onChangeView('login')
    }

    handleSessionExpired = () => {
        this.onChangeView('login')
    }

    render() {
        const { state: { view, Spotytoken, token }, handleLogin, handleRegister, handleSessionExpired, onChangeView } = this;
        return <>
            {view === 'login' && <Login onSubmit={handleLogin} onRegister={onChangeView} />}
            {view === 'register' && <Register onSubmit={handleRegister} onLogin={onChangeView} />}
            {view !== "login" && view !== "register" && <Navbar onChangeView={onChangeView} />}
            {view === 'home' && <Home />}
            {view === 'browser' && <Browser token={Spotytoken} />}
            {view === 'friends' && <SearchUsers token={token} onUserSessionExpired={handleSessionExpired} />}
        </>
    }
}