export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            response: ''
        }
        this.signUp = this.signUp.bind(this)
        this.login = this.login.bind(this)
    }
    async signUp() {
        try {
            await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            this.setState({
                response: 'Account Created!'
            })
            setTimeout(() => {
                this.props.navigator.push({
                    id: 'App'
                })
            }, 1500)
        } catch (error) {
            this.setState({
                response: error.toString()
            })
        }
    }
    async login() {
        try {
            await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            this.setState({
                response: 'user login in'
            })
            setTimeout(() => {
                this.props.navigator.push({
                    id: 'App'
                })
            })

        } catch (error) {
            this.setState({
                response: error.toString()
            })
        }

    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerInputes}>
                    <TextInput
                        placeholderTextColor="gray"
                        placeholder="Email"
                        style={styles.inputText}
                      //  onChangeText={(email) => this.setState({ email })}
                        onChangeText={(email) => {console.log(email);}}
                    />
                    <TextInput
                        placeholderTextColor="gray"
                        placeholder="Password"
                        style={styles.inputText}
                        password={true}
                        onChangeText={(password) => this.setState({ password })}
                    />
                </View>
                <TouchableHighlight
                    onPress={this.login}
                    style={[styles.loginButton, styles.button]}
                >
                    <Text
                        style={styles.textButton}
                    >Login</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={this.signUp}
                    style={[styles.loginButton, styles.button]}
                >
                    <Text
                        style={styles.textButton}
                    >Signup</Text>
                </TouchableHighlight>
            </View>
        )
    }
}