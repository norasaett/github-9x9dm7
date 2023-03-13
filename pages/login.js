import DefaultLayout from "@/components/layouts/Default";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <DefaultLayout>
      <div>
        <div>Email</div>
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div>
        <div>Password</div>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div>
        <button>Login</button>
      </div>
    </DefaultLayout>
  );
}
