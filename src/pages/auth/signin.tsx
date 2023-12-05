import { Layout } from "@/components/local/Layout";
import { SigninForm } from "@/components/local/SigninForm";


const SigningPage = () => (
  <Layout>
    <div className="flex min-h-screen items-center">
      <SigninForm />
    </div>
  </Layout>
)

export default SigningPage;
