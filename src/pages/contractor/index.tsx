import { Layout } from "@/components/local/Layout";

import { contractorGuard } from "@/utils/middleware";

export const getServerSideProps = contractorGuard(async (ctx) => {
  console.log(ctx);

  return {
    props: {}
  };
});

const ContractorPage = () => (
  <Layout>
    Contractor page
  </Layout>
)

export default ContractorPage;
