"use client";
import { useEffect } from "react";


function CallbackPage() {

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    console.log(code);

  }, []);
  return <h1>OK</h1>;
}

export default CallbackPage;
