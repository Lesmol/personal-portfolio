import { socialLinks } from "@/data/socials";
import CustomSocialLink from "./customSocialLink";

function ReachOut() {
  return (
    <div className="mt-10 w-full">
      <h1 className="text-xl font-bold md:text-2xl">Reach out</h1>
      <p className="mb-4 text-sm text-primary md:text-base">
        I always look forward to meeting new people, so you can say &#34;Hi&#34;
        any time or day!
      </p>
      <div className="mt-3 flex flex-wrap gap-4">
        {socialLinks.map((link) => (
          <CustomSocialLink
            key={link.name}
            title={link.name}
            href={link.href}
            className={link.iconClass}
            d={link.iconPath}
          />
        ))}
      </div>
    </div>
  );
}

export default ReachOut;
