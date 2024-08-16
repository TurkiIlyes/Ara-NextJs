import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import HomePage from "@/components/Home/HomePage";

import { getServerSession } from "next-auth";
import authOptions from "@/lib/NextAuth/authOptions";

const Home = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div className=" relative h-[500vh]">
      <Header session={session} />
      <main>
        <HomePage />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
