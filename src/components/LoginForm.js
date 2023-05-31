import React from 'react'

export default function LoginForm() {
    return (
        <div>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input type="email" name="email" value={email} onChange={handleChange} required />
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handleChange} required />
                    <button type="submit">LOG IN</button>
                </form>
            </div>
            <p className="error-message">&nbsp;{error}</p>
        </div>
    )
}
