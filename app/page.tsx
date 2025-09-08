import ModernHero from "./components/ModernHero";
import ModernServices from "./components/ModernServices";
import ModernPortfolio from "./components/ModernPortfolio";
import ModernAbout from "./components/ModernAbout";
import ModernBlog from "./components/ModernBlog";
import ModernContact from "./components/ModernContact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <ModernHero />
      <ModernServices />
      <ModernPortfolio />
      <ModernAbout />
      <ModernBlog showAllPosts={false} />
      <ModernContact />
    </div>
  );
}
