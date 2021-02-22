import React from 'react'
import { Children } from 'react';

const AuthContext = React.createContext();

export function AuthProvider() {
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}
