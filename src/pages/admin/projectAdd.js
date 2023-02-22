import { useEffect, router } from "../../lib";

const AdminProjectsAddPage = () => {
    const projects = JSON.parse(localStorage.getItem("projects")) || [];
    useEffect(() => {
        const form = document.querySelector("#form-add");
        const projectName = document.querySelector("#project-name");
        const projectLink = document.querySelector("#project-link");
        const projectDA = document.querySelector("#project-DA");

        form.addEventListener("submit", function (e) {
            e.preventDefault();
            // Tạo proejct mới
            const project = {
                id: projects.length + 1,
                name: projectName.value,
                link: projectLink.value,
                DA: projectDA.value,
            };
            // thêm dự án vào mảng projects
            projects.push(project);

            // lưu vào localStorage
            localStorage.setItem("projects", JSON.stringify(projects));
            // chuyển trang về trang quản lý dự án
            router.navigate("/admin/projects");
        });
    });
    return `<div class="container mx-auto  mt-10">

    <form action="" class="" id="form-add">
        <div action="" id="form-group">
            <label for="" class="bg-blue-500 py-1 px-3 text-white rounded-lg hover:bg-red-700 ">Name</label> <br>
            <input type="text" class="border border-2 w-full py-2 my-5" id="project-name" />
        </div>
        <div action="" id="form-group">
            <label for="" class="bg-blue-500 py-1 px-3 text-white rounded-lg hover:bg-red-700">Link</label>
            <input type="text" class="border border-2 w-full py-2 my-5" id="project-link" />
        </div>

        <div action="" id="form-group">
            <label for="" class="bg-blue-500 py-1 px-3 text-white rounded-lg hover:bg-red-700">Tên Dự Án</label>
            <input type="" class="border border-2 w-full py-2 my-5" id="project-DA" />
        </div>

        <button class="btn btn-primary text-white bg-black font-bold hover:bg-red-700 py-3 px-4 rounded-lg">Thêm dự án</button>
    </form>

</div>
`;
};

export default AdminProjectsAddPage;
