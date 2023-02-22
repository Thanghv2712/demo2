const app = document.querySelector("#app");
import HomePage from "./src/pages/home";
import AboutPage from "./src/pages/about";
import { render , router } from "./src/lib";
import WorkPage from "./src/pages/works";
import ContactPage from "./src/pages/contact" ;
import AdminProjectsPage from "./src/pages/admin/project";
import AdminProjectsAddPage from "./src/pages/admin/projectAdd";
import AdminProjectEditPage from "./src/pages/admin/project-edit";


router.on("/admin/projects", () => render(AdminProjectsPage, app));
router.on("/", () => render(HomePage, app));
router.on("/about", () => render(AboutPage, app));
router.on("/works", () => render(WorkPage, app ));
router.on("/contact", () => render(contactPage, app ));
router.on("/admin/projects/add", () => render(AdminProjectsAddPage, app));
router.on("/admin/projects/edit", () => render(AdminProjectEditPage, app));

router.resolve();
