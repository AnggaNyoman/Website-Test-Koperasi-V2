import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mandarasedanakuta.co.id";
  const lastModified = new Date();

  const routes = [
    "",
    "/tentang-kami",
    "/layanan",
    "/produk",
    "/simulasi",
    "/madata-mobile",
    "/galeri",
    "/faq",
    "/kontak",
    "/daftar-anggota",
    "/kebijakan-privasi",
    "/syarat-ketentuan",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route === "/daftar-anggota" || route === "/madata-mobile" ? 0.9 : 0.8,
  }));
}
