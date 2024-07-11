import Head from "next/head";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import Form from "../src/components/Forms/Form";
import FormField from "../src/components/Forms/FormField";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="flex">
      <div className="w-1/2 pl-[112px] pt-[51px]">
        {/* <img src="/images/logo.png" className="w-[154px]" /> */}
        <div>
          <Form initialValues={{ mobile: "" }} onSubmit={() => ""}>
            <FormField
              name="mobile"
              placeholder="Mobile number"
              label="Mobile number"
            />
            <PhoneInput specialLabel={""} country="RU" />
          </Form>
        </div>
      </div>
      <div className="w-1/2">
        {/* <img src={"/images/login-banner.jpg"} className="w-full h-[100vh]" /> */}
      </div>
    </div>
  );
}
