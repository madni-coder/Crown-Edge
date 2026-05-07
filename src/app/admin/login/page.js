"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./login.css";

const ADMIN_EMAIL = "asadamaan@gmail.com";
const ADMIN_PASS = "asam0909";

export default function AdminLogin() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setError("");
        setLoading(true);

        if (email.trim() === ADMIN_EMAIL && password === ADMIN_PASS) {
            // Set auth cookie (expires in 8 hours)
            const expires = new Date(Date.now() + 8 * 60 * 60 * 1000).toUTCString();
            document.cookie = `admin_auth=true; path=/; expires=${expires}; SameSite=Strict`;
            router.push("/admin");
        } else {
            setError("Invalid email or password.");
            setLoading(false);
        }
    }

    return (
        <div className="login-page">
            <div className="login-card">
                <div className="login-card__logo">
                    <span>Crown</span> Edge
                </div>
                <p className="login-card__subtitle">Admin Panel — sign in to continue</p>

                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="login-field">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            autoComplete="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="admin@example.com"
                            required
                        />
                    </div>

                    <div className="login-field">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    {error && <p className="login-error">{error}</p>}

                    <button className="login-btn" type="submit" disabled={loading}>
                        {loading ? "Signing in…" : "Sign In"}
                    </button>
                </form>
            </div>
        </div>
    );
}
