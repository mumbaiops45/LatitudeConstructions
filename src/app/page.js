import Home from "./components/Home";
import Hero from "./components/Hero";
import Whywe from "./components/Whywe";
import Work from "./components/Work";
import Review from "./components/Review";
import FAQSection from "./components/Faqs";

export default function Page() {
  return (
    <div >
      <Hero/>
      <Home/>
      <Whywe/>
      <Work/>
      <Review/>
      <FAQSection/>
    </div>
  );
}
