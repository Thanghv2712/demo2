// import { projects } from "../../data";
import { useEffect, useState } from "../../lib";
const AdminProjectsPage = () => {
    // localStorage
    const [data, setData] = useState([]);

    useEffect(() => {
        // OR
        const projects = JSON.parse(localStorage.getItem("projects")) || [];
        setData(projects);
    }, []);
    useEffect(function () {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            btn.addEventListener("click", function () {
                const id = this.dataset.id;
                const newProjects = data.filter((project) => project.id != id);

                localStorage.setItem("projects", JSON.stringify(newProjects));

                setData(newProjects);
            });
        }
    });
    const btnadd = document.querySelector("#btn-add");
    console.log(btnadd);
    useEffect(function (){
        btnadd.addEventListener("click" , () =>{
            router.navigate("/admin/projects/add");
        } ) 
    })
    


    return `
    <div class="container mx-auto bg-slate-100 rounded-lg mt-10 py-10">


<div class="flex justify-center items-center">
<button class="text-white font-bold bg-blue-500 rounded-lg py-2 px-3 hover:bg-black hover:text-red-500" id="btn-add">Thêm Mới</button>
<div class="bg-white px-10 mx-7 rounded-lg ">
<a href="#" class="brand">
    
    <span class="text-2xl text-blue-700 font-bold">AdminHub</span>
    <img src="../img/picture2.jpg" alt="" class="w-20 rounded-full my-5 ml-3">
</a>
<ul class="side-menu top">
    <li class="active py-2">
        <a href="#">
            <i class='bx bxs-dashboard ' ></i>
            <span class="text text-red-900 hover:text-red-500">Dashboard</span>
        </a>
    </li>
			
            <li class="py-2">    
        <a href="#">
            <i class='bx bxs-shopping-bag-alt' ></i>
            <span class="text text-red-900 hover:text-red-500" >Menu</span>
        </a>
    </li>
    <li class="py-2">
        <a href="#">
            <i class='bx bxs-doughnut-chart' ></i>
            <span class="text text-red-900 hover:text-red-500">About Me</span>
        </a>
    </li>
    <li class="py-2">
        <a href="#">
            <i class='bx bxs-message-dots' ></i>
            <span class="text text-red-900 hover:text-red-500">Works</span>
        </a>
    </li>
    <li class="py-2">
        <a href="#">
            <i class='bx bxs-group' ></i>
            <span class="text text-red-900 hover:text-red-500">Contact</span>
        </a>
    </li>
    </ul>
    <ul class="side-menu">
    <li>
        <a href="#">
            <i class='bx bxs-cog' ></i>
            <span class="text text-yellow-400 font-bold">Settings</span>
        </a>
    </li>
    <li>
        <a href="#" class="logout">
            <i class='bx bxs-log-out-circle' ></i>
            <span class="text text-red-400 font-bold ">Logout</span>
        </a>
    </li>
</ul>
</div>


    <div class="">
    <h1 class="text-3xl text-red-700 font-bold">Quản lý dự án</h1>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-9 py-5">
                   #
                </th>
                <th scope="col" class="px-9 py-5">
                   Name
                </th>
                <th scope="col" class="px-9 py-5">
                    Link
                </th>
                <th scope="col" class="px-9 py-5">
                    Tên Dự Án
                </th>
                <th scope="col" class="px-9 py-5">
                      <span class="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
                    <tbody>
                        ${data
                            .map((project, index) => {
                                return `
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td scope="row" class="px-5 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                ${index + 1}
                                </td>
                                
                                <td class="px-6 py-4">
                                    ${project.name}
                                </td>
                                <td class="px-6 py-4">
                                ${project.link}
                            </td>
                                <td class="px-6 py-4">
                                    ${project.DA}
                                </td>
                                <td class="px-6 py-4 text-right">
                                       <button data-name="" data-id="${
                                                    project.id
                                                }"class="btn btn-danger btn-remove">Remove</button>
                                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                            `;
                            })
                            .join("")}
                        
                    </tbody>
                </table>
                
                </div>

    </div>
    </div>
    </div>`;
};

export default AdminProjectsPage;
{/* 
 
                  
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td scope="row" class="px-5 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            1
                        </th>
                        <td class="px-6 py-4">
                            hồ văn thắng
                        </td>
                        <td class="px-6 py-4">
                            thanghvph21617@gmail.com
                        </td>
                        <td class="px-6 py-4">
                            <img src="" alt="abc">
                        </td>
                        <td class=" px-6 py-4 text-right">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td scope="row" class="px-5 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            1
                        </th>
                        <td class="px-6 py-4">
                            hồ văn thắng
                        </td>
                        <td class=" px-6 py-4">
                            thanghvph21617@gmail.com
                        </td>
                        <td class="px-6 py-4">
                            <img src="" alt="abc">
                        </td>
                        <td class="px-6 py-4 text-right">
                        <button data-name="Dat" data-id="${
                                            project.id
                                        }"class="btn btn-danger btn-remove">Remove</button>
                            <a href="/project/:id/:action" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
</div>
</div>
</div>
</div> */}
