import { useEffect } from "react";

type SchemaType =
  | "Organization"
  | "FAQPage"
  | "Service"
  | "LocalBusiness"
  | "WebSite";

interface JsonLdProps {
  type: SchemaType;
  data: Record<string, unknown>;
}

const JsonLd = ({ type, data }: JsonLdProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    script.id = `jsonld-${type}`;
    const existing = document.getElementById(`jsonld-${type}`);
    if (existing) existing.remove();
    document.head.appendChild(script);
    return () => {
      script.remove();
    };
  }, [type, data]);

  return null;
};

export default JsonLd;
