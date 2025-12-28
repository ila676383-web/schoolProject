"use client";

import ControlPanel from "./ControlPanel";

const AdminControl = () => {
  const isOk = localStorage.getItem("password");
  return (
    <>
      {isOk ? (
        <ControlPanel />
      ) : (
        <h1 className="m-auto mt-48 text-4xl font-extrabold">Нет доступа!</h1>
      )}
    </>
  );
};
export default AdminControl;
