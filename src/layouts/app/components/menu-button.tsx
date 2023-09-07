import html from '@kitajs/html'

export default function MenuButton() {
  return (
    <div class="absolute right-0 flex-shrink-0 lg:hidden">
      {/* <!-- Mobile menu button --> */}
      <script type="text/hyperscript">
        def toggleMobileMenu()
        send change to #close-icon
        send change to #open-icon
        send change to #mobile-menu-overlay
        send change to #mobile-menu
        end
      </script>
      <button
        type="button"
        _="on every click toggleMobileMenu()"
        class="relative inline-flex items-center justify-center rounded-md bg-transparent p-2 text-primary-200 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white" aria-expanded="false">
        <span class="absolute -inset-0.5"></span>
        <span class="sr-only">Open main menu</span>
        {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
        {`<svg id="close-icon" _="on every change toggle .hidden on me then toggle .block on me" class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>`}
        {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
        {`<svg id="open-icon" _="on every change toggle .hidden on me then toggle .block on me" class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>`}
      </button>
    </div>
  )
}