import React, { Suspense, useCallback, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Loader from "./Loader";

function LoadedOutlet({ onReady }) {
  useEffect(() => {
    onReady();
  }, [onReady]);

  return <Outlet />;
}

const Layout = () => {
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false);
  const markReady = useCallback(() => setHasLoadedOnce(true), []);

  return (
    <div>
      {hasLoadedOnce && <Navbar />}
      <Suspense fallback={<Loader coverNavbar={!hasLoadedOnce} />}>
        <LoadedOutlet onReady={markReady} />
      </Suspense>
    </div>
  );
};

export default Layout;
