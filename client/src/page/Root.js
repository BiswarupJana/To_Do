import React from "react";
import { Outlet } from "react-router-dom";
import { MainNavigation } from "../componets/MainNavigation";

export const Root = () => {
  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <Spinner message={'Loading ...'}/>} */}
        <Outlet />
      </main>
    </>
  );
};
