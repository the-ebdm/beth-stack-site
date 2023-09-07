import html from '@kitajs/html'

export default function Search() {
  return (
    <div class="min-w-0 flex-1 px-12 lg:hidden">
      <div class="mx-auto w-full max-w-xs">
        <label for="desktop-search" class="sr-only">Search</label>
        <div class="relative text-white focus-within:text-gray-600">
          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            {`<svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
                      </svg>`}
          </div>
          <input id="desktop-search" class="block w-full rounded-md border-0 bg-white/20 py-1.5 pl-10 pr-3 text-white placeholder:text-white focus:bg-white focus:text-gray-900 focus:ring-0 focus:placeholder:text-gray-500 sm:text-sm sm:leading-6" placeholder="Search" type="search" name="search" />
        </div>
      </div>
    </div>
  )
}