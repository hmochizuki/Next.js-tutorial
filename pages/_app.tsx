import React from "react";
import styled from "styled-components";
import App, { Container } from "next/app";
import GlobalNav from "../src/components/organisms/GlobalNav/GlobalNav";

/*
  カスタム共通処理
  ※ サーバーサイド側とクライアント側、両方で実行される
  ※ https://nextjs.org/docs/#custom-app
*/
export default class MyApp extends App {
  static async getInitialProps(ctx: any) {
    let pageProps = {};

    if (ctx.Component.getInitialProps) {
      pageProps = await ctx.Component.getInitialProps(ctx);
    }
    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Root>
          <GlobalNav />
          <ContentsArea>
            <Component {...pageProps} />
          </ContentsArea>
        </Root>
      </Container>
    );
  }
}

const Root = styled.div`
  margin: 0;
`;

const ContentsArea = styled.div`
  margin: 0;
  background-color: #fafafa;
`;
