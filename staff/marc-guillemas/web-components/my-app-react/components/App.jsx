const { Component } = React

class App extends Component {
    constructor() {
        super()

        this.state = {
            user: retrieveUser('aitor@gmail.com'),
            view: 'home'
        }
    }

    changeView = (_view) => this.setState({view: _view})
    // handleGoToLogin = () => this.setState({view: 'login'})

    handleRegister = (name, surname, email, password) => {
        registerUser(name, surname, email, password)

        this.setState({ view: 'login' })
    }

    handleLogin = (email, password) => {
       authenticateUser(email, password)
        const user = retrieveUser(email)
        this.setState({ view: 'home' })
        this.setState({ user: user })
    }

    render() {
        return <>
            {this.state.view === 'landing' && <Landing onRegister={this.changeView} onLogin={this.changeView}/>}
            {this.state.view === 'register' && <Register onLogin={this.changeView} onSubmit = {this.handleRegister}/>}
            {this.state.view === 'login' && <Login onRegister={this.changeView} onSubmit={this.handleLogin}/>}
            {this.state.view === 'home' && <Home user={this.state.user} />}
        </>
    }
}