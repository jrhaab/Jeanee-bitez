import { MainInstance } from "@/components/globals/Elements/main";
import { SectionInstance } from "@/components/globals/Elements/section";
import {
  HeadingInstance,
  ParagraphInstance,
  TitleInstance,
} from "@/components/globals/Elements/typography";

export default function UsagePolicies() {
  return (
    <MainInstance>
      <SectionInstance customclassName={"overflow-y-auto gap-y-10 px-10"}>
        {/*TERMS AND CONDITIONS*/}
        <div className="w-full flex flex-col gap-y-4">
          <HeadingInstance
            type={""}
            content={"1. TERMS AND CONDITIONS"}
            customclassName={""}
          />
          <div className="flex flex-col justify-start items-start gap-y-2 w-full">
            <TitleInstance
              content={"1.1. Acceptance of Terms"}
              customclassName={""}
            />
            <ParagraphInstance
              content={
                "By accessing or using this website and related services, including grocery shopping for yoghurt, meals, and pastries, you agree to be bound by these Terms and Conditions. If you do not agree, you may not use the website."
              }
              customclassName={""}
            />
            <TitleInstance content={"1.2. Eligibility"} customclassName={""} />
            <ParagraphInstance
              content={
                "You must be at least 18 years of age to access our services. By using our platform, you confirm you meet this requirement."
              }
              customclassName={""}
            />

            <TitleInstance
              content={"1.3. Services Provided"}
              customclassName={""}
            />
            <ParagraphInstance
              content={"We provide users with access to:"}
              customclassName={""}
            />
            <ul className="w-full list-disc text-sm">
              <li>Grocery shopping for yoghurt, meals, and pastries</li>
              <li>Online ordering and delivery scheduling</li>
              <li>Order tracking and customer support</li>
              <li>Business-to-customer shopping facilitation</li>
              We reserve the right to alter, suspend, or discontinue any part of
              the service without prior notice.
            </ul>
            <TitleInstance
              content={"1.4. User Responsibilities"}
              customclassName={""}
            />
            <ParagraphInstance content={"You agree to:"} customclassName={""} />
            <ul className="w-full list-disc text-sm">
              <li>Provide accurate registration and order information</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Refrain from misusing or abusing the service</li>
            </ul>
            <TitleInstance
              content={"1.5. Payments and Pricing"}
              customclassName={""}
            />
            <ParagraphInstance
              content={
                "All purchases are billed in [insert currency] and include applicable taxes. Prices are subject to change based on market conditions and supplier rates."
              }
              customclassName={""}
            />
            <TitleInstance
              content={"1.6. Intellectual Property"}
              customclassName={""}
            />
            <ParagraphInstance
              content={
                "All platform content, including branding, visuals, and functionality, is the exclusive property of [Company Name] and protected under relevant laws."
              }
              customclassName={""}
            />
            <TitleInstance
              content={"1.7. Limitation of Liability"}
              customclassName={""}
            />
            <ParagraphInstance
              content={"We are not liable for:"}
              customclassName={""}
            />
            <ul className="w-full list-disc text-sm">
              <li>Product delays caused by third-party logistics</li>
              <li>
                Allergic reactions or product-related issues not disclosed
              </li>
              <li>Any indirect damages resulting from use of our services</li>
            </ul>
            <TitleInstance content={"1.8. Termination"} customclassName={""} />
            <ParagraphInstance
              content={
                "We reserve the right to suspend or terminate accounts that violate these terms."
              }
              customclassName={""}
            />
          </div>
        </div>
        {/*TERMS OF USAGE*/}
        <div className="w-full flex flex-col gap-y-4">
          <HeadingInstance
            type={""}
            content={"2. TERMS OF USAGE"}
            customclassName={""}
          />
          <div className="flex flex-col justify-start items-start gap-y-2 w-full">
            <TitleInstance
              content={"2.1. Acceptable Use"}
              customclassName={""}
            />
            <ParagraphInstance
              content={"You agree not to:"}
              customclassName={""}
            />
            <ul className="w-full list-disc text-sm">
              <li>Use the site for fraudulent purchases or spam orders</li>
              <li>Attempt to bypass payment or delivery systems</li>
              <li>Order tracking and customer support</li>
              <li>
                Engage in any activity that would damage, disable, or overload
                the website infrastructure
              </li>
              We reserve the right to alter, suspend, or discontinue any part of
              the service without prior notice.
            </ul>
            <TitleInstance content={"2.2. User Content"} customclassName={""} />
            <ParagraphInstance
              content={
                "You grant us a non-exclusive license to use any feedback, reviews, or suggestions you submit regarding our services."
              }
              customclassName={""}
            />

            <TitleInstance
              content={"2.3. Product Availability"}
              customclassName={""}
            />
            <ParagraphInstance
              content={
                "Product availability may vary by region. We make every effort to keep product listings accurate and up-to-date."
              }
              customclassName={""}
            />

            <TitleInstance
              content={"2.4. Modification of Terms"}
              customclassName={""}
            />
          </div>
        </div>
        {/*PRIVACY POLICY*/}
        <div className="w-full flex flex-col gap-y-4">
          <HeadingInstance
            type={""}
            content={"3. PRIVACY POLICY"}
            customclassName={""}
          />
          <div className="flex flex-col justify-start items-start gap-y-2 w-full">
            <TitleInstance
              content={"3.1. Information We Collect"}
              customclassName={""}
            />
            <ParagraphInstance content={"We collect:"} customclassName={""} />
            <ul className="w-full list-disc text-sm">
              <li>
                Personal Information: Name, email, phone, delivery address
              </li>
              <li>
                Transaction Data: Orders, payment info, product preferences
              </li>
              <li>Technical Data: Browser type, IP address, device type</li>
              <li>Cookies and Analytics Data</li>
            </ul>
            <TitleInstance
              content={"3.2. How We Use Information"}
              customclassName={""}
            />
            <ul className="w-full list-disc text-sm">
              <li>To fulfill grocery and meal orders</li>
              <li>To personalize shopping experience</li>
              <li>To improve services and detect fraud</li>
              <li>
                For customer support and promotional communications (with
                consent)
              </li>
            </ul>
            <TitleInstance content={"3.3. Data Sharing"} customclassName={""} />
            <ParagraphInstance
              content={"We share limited data with:"}
              customclassName={""}
            />
            <ul className="w-full list-disc text-sm">
              <li>Payment gateways</li>
              <li>Delivery partners</li>
              <li>Analytics and CRM service providers</li>
              <li>Legal authorities when required</li>
            </ul>
            <TitleInstance
              content={"3.4. Data Security"}
              customclassName={""}
            />
            <ParagraphInstance content={"We use:"} customclassName={""} />
            <ul className="w-full list-disc text-sm">
              <li>SSL encryption</li>
              <li>Role-based access controls</li>
              <li>Secure data storage practices</li>
              <li>Legal authorities when required</li>
            </ul>
            <TitleInstance content={"3.5. Your Rights"} customclassName={""} />
            <ParagraphInstance
              content={"You have the right to:"}
              customclassName={""}
            />
            <ul className="w-full list-disc text-sm">
              <li>Access your personal data</li>
              <li>Update or correct inaccurate info</li>
              <li>Delete your account</li>
              <li>
                Object to data processing{" "}
                {`(in specific
                cases)`}
              </li>
            </ul>
          </div>
        </div>
        {/*COOKIES POLICY*/}
        <div className="w-full flex flex-col gap-y-4">
          <HeadingInstance
            type={""}
            content={"4. COOKIES POLICY"}
            customclassName={""}
          />
          <div className="flex flex-col justify-start items-start gap-y-2 w-full">
            <TitleInstance
              content={"4.1. What Are Cookies?"}
              customclassName={""}
            />
            <ParagraphInstance
              content={
                "Cookies are small text files used to store information on your device to improve functionality and experience."
              }
              customclassName={""}
            />

            <TitleInstance
              content={"4.2. Types of Cookies We Use"}
              customclassName={""}
            />
            <ul className="w-full list-disc text-sm">
              <li>
                Essential Cookies: Required for platform function (e.g. cart,
                login)
              </li>
              <li>
                Performance Cookies: Track browsing behavior to improve
                performance
              </li>
              <li>Functional Cookies: Remember user preferences</li>
              <li>
                Marketing Cookies: Display relevant ads based on browsing
                behavior
              </li>
            </ul>
            <TitleInstance
              content={"4.4. Third-Party Cookies"}
              customclassName={""}
            />
            <ParagraphInstance
              content={
                "Cookies from third parties (e.g., Google Analytics, Facebook Pixel, payment processors) may be used to track usage and conversion data."
              }
              customclassName={""}
            />

            <TitleInstance
              content={"4.5. Managing Cookies"}
              customclassName={""}
            />
            <ParagraphInstance
              content={
                "You may disable cookies via your browser settings. However, some features may not function properly if cookies are disabled."
              }
              customclassName={""}
            />
          </div>
        </div>
      </SectionInstance>
    </MainInstance>
  );
}
