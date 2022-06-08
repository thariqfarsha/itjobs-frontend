import React from "react";
import Router from "next/router";
import cookies from "next-cookies";

const login = "/auth/login";

export default (WrappedComponent) => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

  hocComponent.getInitialProps = async (context) => {
    // console.log(context);
    let dataCookie = cookies(context);
    // console.log(!dataCookie);
    if (!dataCookie?.token) {
      if (context.res) {
        context.res?.writeHead(302, {
          Location: login,
        });
        context.res?.end();
      } else {
        Router.replace(login);
      }
    } else if (WrappedComponent.getInitialProps) {
      const wrappedProps = await WrappedComponent.getInitialProps({
        ...context,
        auth: dataCookie,
      });
      return { ...wrappedProps, dataCookie };
    }
    return { dataCookie };
  };
  return hocComponent;
};
