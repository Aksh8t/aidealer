import React from 'react';
import {
    SignInButton, SignUpButton, SignedOut, SignedIn, UserButton
} from "@clerk/nextjs";

const Header = () => {
    return (
        <div>
            <SignedOut>
                <SignInButton />
                <SignUpButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
    );
};

export default Header;
