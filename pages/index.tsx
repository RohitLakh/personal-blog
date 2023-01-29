import HomepageFeaturePost from "@/components/HomepageFeaturePost";
import HomepageHeader from "@/components/HomepageHeader";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar home={true} />
      <div className="flex justify-center pt-32 pb-12">
        <HomepageHeader />
      </div>

      <hr />

      <div className="pt-12 px-16">
        <HomepageFeaturePost />
      </div>
    </>
  )
}
