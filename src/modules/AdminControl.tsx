"use client";

import { useEffect, useState } from "react";
import ControlPanel from "./ControlPanel";

const AdminControl = () => {
  const [isOk, setIsOk] = useState<boolean | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsOk(!!token);
  }, []);

  if (isOk === null) return null;

  return isOk ? (
    <ControlPanel />
  ) : (
    <h1 className="m-auto mt-48 text-4xl font-extrabold">Нет доступа!</h1>
  );
};

export default AdminControl;
