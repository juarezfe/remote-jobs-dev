import { useState } from "react";
import Background from "./Background";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";
import SearchForm from "./SearchForm";
import Sidebar from "./Sidebar";
import JobItemContent from "./JobItemContent";
import JobList from "./JobList";
import { useActiveId, useJobItems } from "../lib/hooks";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [jobItems, isLoading, totalJobsCount] = useJobItems(searchTerm);

  return (
    <>
      <Background />
      <Header>
        <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </Header>
      <Container>
        <Sidebar>
          <JobList jobItems={jobItems} isLoading={isLoading} />
        </Sidebar>
        <JobItemContent />
      </Container>
      ˇ
      <Footer totalJobsCount={totalJobsCount} />
    </>
  );
}

export default App;
