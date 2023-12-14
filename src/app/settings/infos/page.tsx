import { pageGuard } from "@/lib/page-guard";

const IndexPage = async () => {
  await pageGuard();
};

export default IndexPage;
