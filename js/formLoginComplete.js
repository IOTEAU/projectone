
function setErrorMsg(error) {
    return {
        loginMessage: error
    }
}

export default class Login extends Component {

    render() {
        return (
            <div>
                <div>
                    <form>
                        <div className="form-group">
                            <label>User</label>
                        </div>
                        <button className="btn btn-primary" onClick={() => { logOut() }}>Logout</button>
                    </form>
                </div>
            </div>
        )
    }
}