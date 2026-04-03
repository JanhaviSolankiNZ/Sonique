import { Layout, Header, SidebarWrapper, FooterWrapper } from "../layout/MainLayout";
import Appbar from "../components/Appbar";
import Sidebar from "../components/Sidebar";
import { MainContent } from "../layout/MainLayout";
import Section from "../components/Section";
import Card from "../components/Card";
import Footer from "../components/Footer";


const dummyData = Array.from({ length: 10 });

export default function Home() {
  return (
    <Layout>
      <Header>
        <Appbar />
      </Header>
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
      <MainContent>
        <Section title="Trending songs">
          {dummyData.map((_, i) => (
            <Card
              key={i}
              image="https://via.placeholder.com/150"
              title="Song"
              subtitle="Artist"
            />
          ))}
        </Section>
        <Section title="Popular Artists">
          {dummyData.map((_, i) => (
            <Card
              key={i}
              image="https://via.placeholder.com/150"
              title="Artist"
              subtitle="Artist"
            />
          ))}
        </Section>
      </MainContent>
      <FooterWrapper>
        <Footer/>
      </FooterWrapper>
    </Layout>
  );
}
