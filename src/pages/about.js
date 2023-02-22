import Header from "../components/header";
import WorkPage from "../pages/works";
import ContactPage from "../pages/contact";
import footer from "../components/footer";


const AboutPage = () => {
    
  return `
 
  
  <div id="about" class="px-10 dark:bg-slate-900">
  <div
    class="container mx-auto py-40 flex flex-col-reverse lg:flex-row items-center gap-20"
  >
    <!-- left -->
    <div class="relative">
      <img
        class="h-1/4 absolute top-0 left-0 -z-10"
        src="./img/dots.png"
        alt=""
      />
      <div class="h-full rounded-full overflow-hidden">
        <img src="./img/picture2.jpg" alt="" />
      </div>
    </div>
    <!-- right -->
    <div class="my-auto flex flex-col gap-3">
      <h1 class="text-indigo-600 font-bold">ABOUT ME</h1>
      <h1 class="text-3xl font-medium dark:text-white">Better Design</h1>
      <h1 class="text-3xl font-medium dark:text-white">
        Better Experience
      </h1>
      <p class="text-gray-400">
        I'm a student and I still don't have enough experience .I'm a student and I still don't have enough experience
        I'm a student and I still don't have enough experience
      </p>
      <h2 class="text-gray-400 font-medium">HTML/CSS</h2>
      <div class="w-full bg-gray-200 h-1.5 rounded-md">
        <div class="w-5/6 bg-indigo-600 h-1.5 rounded-md"></div>
      </div>
      <h2 class="text-gray-400 font-medium">Javascript</h2>
      <div class="w-full bg-gray-200 h-1.5 rounded-md">
        <div class="w-1/3 bg-indigo-600 h-1.5 rounded-md"></div>
      </div>
      <h2 class="text-gray-400 font-medium">PHP</h2>
      <div class="w-full   bg-gray-200 h-1.5 rounded-md">
        <div class="w-1/3  bg-indigo-600 h-1.5 rounded-md"></div>
      </div>
    </div>
  </div>
</div>`;
    
  
};

export default AboutPage;