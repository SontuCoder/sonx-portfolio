import Container from "@/components/layout/Container";
import Experience from "@/components/sections/Experience/Works";
import Hero from "@/components/sections/Hero/Hero";


export default function Home() {
  return (
    <main>
      <Container>
      <Hero/>
      <Experience/>
      </Container>
    </main>
  );
}