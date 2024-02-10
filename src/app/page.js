import Footer from "./components/footer";

import Navbar from "./components/navbar";

export default function Page() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100"></div>
      <Footer />
    </div>
  );
};