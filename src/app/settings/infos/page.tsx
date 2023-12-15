import { pageGuard } from "@/lib/page-guard";
import { UserInfos } from "../_components/userInfos";


const IndexPage = async () => {
  await pageGuard();

  return(
    <div className="flex justify-center">
      <UserInfos/>
    </div>
  );
};

export default IndexPage;
