import React from "react";
import Link from "next/link";
import styled, { css } from "styled-components";

const AppHead = styled.div`
  display: flex;
  border: 1px solid #ddd;
`;

const Logo = styled.div`
  flex: 1;
`;

const Login = styled.div`
  flex: 1;
  text-align: right;
`;

const dummy = {
  isLoggedIn: false
};

const Header = () => {
  return (
    <AppHead>
      <Logo>
        <Link href="/">
          <a>로고</a>
        </Link>
      </Logo>
      <Login>
        {dummy.isLoggedIn ? (
          <div>아이디</div>
        ) : (
          <>
            <Link href="/login">
              <a>로그인</a>
            </Link>
            <Link href="/join">
              <a>회원가입</a>
            </Link>
          </>
        )}
      </Login>
    </AppHead>
  );
};

export default Header;
