import Navbar from "@/components/shared/Navbar";

const AuthLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center">
        {children}
      </main>
    </>
  );
};

export default AuthLayout;
