'use client';

import { useEffect } from "react";

type Props = {
  error:Error;
  reset: () => void;
}

export default function Error( {error, reset}: Props) {
  
  useEffect(() => {
    console.error('-----',error.message);
  }, []);

  return (
    <>
      <h1>error</h1>
      <button onClick={()=>{
        reset();
      }}
      >
        초기화
        </button>
    </>
  );
}