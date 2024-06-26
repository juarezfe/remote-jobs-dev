import { useEffect, useState } from "react";
import { JobItem } from "./types";

export function useJobItems(searchTerm: string) {
  const [jobItems, setJobItems] = useState<JobItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const totalJobsCount = jobItems.length;

  const jobItemsSliced = jobItems.slice(0, 7);

  useEffect(() => {
    if (!searchTerm) return;
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(
        `https://bytegrad.com/course-assets/projects/rmtdev/api/data?search=${searchTerm}`
      );
      const data = await response.json();
      setJobItems(data.jobItems);
      setIsLoading(false);
    };
    fetchData();
  }, [searchTerm]);

  return [jobItemsSliced, isLoading, totalJobsCount] as const;
}

export function useActiveId() {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      const id = window.location.hash.slice(1);
      setActiveId(id);
    };
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return activeId;
}
