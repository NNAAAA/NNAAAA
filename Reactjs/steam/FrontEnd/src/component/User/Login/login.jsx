export default function Login() {
    return (
        <section className='login'>
            <form action='' className='form-input'>
                <div className="form-input__title">
                    Login
                </div>
                <div className="form-input__items">
                    <div className="item">
                        <label htmlFor="user-name">User</label>
                        <input type="text" id='user-name' />
                    </div>
                    <div className="item">
                        <label htmlFor="">Password</label>
                        <input type="password" id="password" />
                    </div>
                </div>
            </form>
        </section>
    )
}