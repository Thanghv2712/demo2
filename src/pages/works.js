

const WorkPage = () => {
  return    `
  <!-- works -->
  <div id="works" class="py-30 dark:bg-slate-900">
    <div class="container mx-auto">
      <!-- top -->
      <div class="flex flex-col gap-3 items-center">
        
        <h1 class="text-3xl dark:text-white">Works</h1>
        <p class="w-1/2 text-center text-gray-400">
          My work is studying and designing web, doing projects as well as learning more experiences .The skills i use...
        </p>
      </div>
      <!-- bottom -->
      <div class="p-5 sm:p-0 flex flex-wrap justify-between">
        <!-- card -->
        <div
          class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-2xl my-3 md:my-10 m-1 transition-all hover:scale-110"
        >
          <img src="./img/html.png" />
        </div>
        <!-- card -->
        <div
          class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-2xl my-3 md:my-10 m-1 transition-all hover:scale-110"
        >
          <img src="./img/css.png"  />
        </div>
        <!-- card -->
        <div
          class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-2xl my-3 md:my-10 m-1 transition-all hover:scale-110"
        >
          <img src="./img/javascript.png" />
        </div>
        <!-- card -->
        <div
          class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-2xl my-3 md:my-10 m-1 transition-all hover:scale-110"
        >
          <img src="./img/tailwind.png" />
        </div>
        <!-- card -->
        <div
          class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-full my-3 md:my-10 m-1 transition-all hover:scale-110"
        >
          <img src="./img/nextjs.png" />
        </div>
        <!-- card -->
        <div
          class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-full my-3 md:my-10 m-1 transition-all hover:scale-110"
        >
          <img src="./img/github.png" class="bg-black" />
        </div>
        <!-- card -->
        <div
          class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-full my-3 md:my-10 m-1 transition-all hover:scale-110"
        >
          <img src="./img/graphql.png" />
        </div>
        <!-- card -->
        <div
          class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-full my-3 md:my-10 m-1 transition-all hover:scale-110"
        >
          <img src="./img/react.png" class="" />
        </div>
      </div>
    </div>
  </div>
  `
}

export default WorkPage;