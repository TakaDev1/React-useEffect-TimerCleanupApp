import React, { useEffect, useState } from "react";
import DisplayCount from "./DisplayCount";

const HandleTimer = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    // クリーンアップ処理
    return () => clearInterval(timer);
  });
  return (
    <div>
      <DisplayCount count={count} />
    </div>
  );
};

export default HandleTimer;
