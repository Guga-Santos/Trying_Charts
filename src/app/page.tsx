'use client'
import { getCompanies } from "@/api/companyRequests";
import Header from "@/components/Header";
import CompanyProfiler from "@/components/companyProfiler";
import { ResponseAPI } from "@/interfaces/Response.interface";
import ChartPage from "@/pages/chartPages";
import { PageContext } from "@/utils/PageContext";
import { useEffect, useState } from "react";
import data from '../mocks/fakeData.json';

export default function Home() {
  const [companies, setCompanies] = useState<ResponseAPI[] | []>([]);

  useEffect(() => {
    ;(async () => {
      const data = await getCompanies();
      setCompanies(data);
    })();
  }, []);

  return (
    <>
      <PageContext.Provider value={{}}>
        <main className="flex min-h-screen flex-col items-center justify-between p-2">
          <Header />
          { companies.map((company: ResponseAPI) => (
            <CompanyProfiler 
            logo={company.logo} 
            id={company._id} 
            key={company._id}/>
          ))}
          <ChartPage {...data.company} />
        </main>
      </PageContext.Provider>
    </>
  )
}
