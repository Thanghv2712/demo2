import MainHome from './index'

const Header = () => {
  return `
  <div
  class="h-1/2 lg:h-screen bg-gradient-to-t from-indigo-200 dark:from-slate-800 dark:to-slate-900 relative overflow-hidden"
>
  <!-- navbar -->
  <nav class="w-full fixed top-0 bg-white z-10 dark:bg-slate-900">
    <div class="container mx-auto py-5 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <img class="w-10" src="./img/HVT.png" alt="" /> 
        <span class="text-2xl font-bold text-indigo-900 dark:text-white"
          >HVT.</span
        >
      </div>
      <ul
        class="hidden md:flex space-x-10 text-gray-600 dark:text-gray-100 font-bold text-sm uppercase"
      >
        <li class="hover:text-gray-500">
          <a href="#">homepage</a>
        </li>
        <li class="hover:text-gray-500">
          <a href="#about">about me</a>
        </li>
    
        <li class="hover:text-gray-500">
          <a href="#works">works</a>
        </li>
        <li class="hover:text-gray-500">
          <a href="#contact">contact</a>
        </li>
      </ul>
      <img
        id="moon"
        src="./img/moon.png"
        class="hidden md:block w-5 cursor-pointer"
        alt=""
      />
      <div id="hamburger" class="space-y-1 md:hidden cursor-pointer z-20">
        <div class="w-6 h-0.5 bg-black"></div>
        <div class="w-6 h-0.5 bg-black"></div>
        <div class="w-6 h-0.5 bg-black"></div>
      </div>
      <ul
        id="menu"
        class="hidden bg-indigo-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center"
      >
        <li>
          <a id="hLink" href="#">homepage</a>
        </li>
        <li>
          <a id="hLink" href="#about">about me</a>
        </li>
       
        <li>
          <a id="hLink" href="#works">works</a>
        </li>
        <li>
          <a id="hLink" href="#contact">contact</a>
        </li>
      </ul>
    </div>
  </nav>
  <!-- intro content -->
  <!-- image -->
  <img
    class="absolute bottom-0 right-0 lg:left-0 mx-auto h-5/6 object-cover"
    src="./img/Untitled.png"
    alt=""
  />
  <!-- circle -->
  <div
    class="hidden lg:block absolute -bottom-1/4 right-0 left-0 mx-auto w-big h-big bg-indigo-900 rounded-full -z-10"
  ></div>
  <!-- animated text -->
  <div
    class="absolute top-1/3 left-5 text-xl sm:left-10 sm:text-4xl md:left-1/4 md:text-6xl lg:left-5 xl:left-48 xl:text-7xl font-bold"
  >
    <span class="text-gray-600">WEB</span>
    <p id="text" class="text-red-500"></p>
  </div>
  <!-- texts -->
  <div
    class="hidden lg:flex flex-col gap-5 rounded-md shadow-lg absolute top-0 bottom-0 m-auto right-10 bg-white dark:bg-slate-900 dark:shadow-slate-800 p-6 h-fit w-1/3"
  >
    <h1 class="text-4xl font-bold text-indigo-900">Hi, I'm HO VAN THANG</h1>
    <p class="text-gray-400">
      I am currently studying at fpt poly . My hobbies are code and playing sports .
    </p>
    <a
      class="bg-indigo-600 text-white text-xl px-3 py-2 rounded-md font-semibold w-fit"
      href="#contact"
      >Hire Me</a
    >
  </div>
</div>
  `
}

export default Header;