import projects from "./data/projects.json";

export default function sitemap() {
  const baseUrl = "https://awadh.tech";

  // Base routes
  const routes = ["", "/projects", "/#about", "/#skills", "/#experience", "/#contact"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
    })
  );

  // Dynamic project routes
  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  return [...routes, ...projectRoutes];
}
