import React from "react";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

// Amplify outputs (amplify will generate amplify_outputs.json at build-time)
import outputs from "../amplify_outputs.json";
Amplify.configure(outputs);

export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main style={{ padding: 32, fontFamily: "sans-serif" }}>
          <h1>Welcome</h1>
          <p>Signed in as: {user?.attributes?.email || user?.username}</p>
          <p>We store your email + CID in the DB after you confirm signup.</p>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}
