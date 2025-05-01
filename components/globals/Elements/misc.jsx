import { GLOBAL_APP_META } from "@/helpers/app.constants";
import { APP_ROUTES } from "@/helpers/routes";
import Link from "next/link";

export const TermsOfUsageAndPrivacyText = () => {
  return (
    <Link
      className="text-center text-gray-400 underline text-xs font-light max-w-full h-max"
      href={APP_ROUTES.policies}
    >
      {`By continuing, you agree to ${GLOBAL_APP_META.APP_NAME_LOWER_CASED}'s Terms of usage, Privacy & Cookies policy`}
    </Link>
  );
};
