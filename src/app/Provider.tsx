import StoreProvider from "./StoreProvider";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <StoreProvider>{children}</StoreProvider>
    </>
  );
};

export default Provider;
