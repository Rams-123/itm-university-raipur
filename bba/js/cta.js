document.addEventListener("DOMContentLoaded", function () {
  const path = window.location.pathname;
  let url;

  if (path === "/business-school/") {
    url = path.replace(/[-\/\s]/g, "");
  } else {
    url = path.split("/business-school/")[1].replace(/[-\/\s]/g, "");
    url = url.replace(/[-\/\s]/g, "");
  }

  const cta = `
            <section class="flex w-full">
                <div class="w-full text-center py-20">
                    <h1 class="font-Bebas-Neue text-[#a91d54] text-2xl md:text-3xl lg:text-4xl mb-6">TAKE THE NEXT STEP</h1>
                    <div class="flex flex-col md:flex-row justify-center gap-4 px-4 py-6">
                        <button
                            class="bg-[#a91d54] text-white py-2 px-6 rounded-full focus:outline-none focus:shadow-outline"
                            type="button" onclick="openModal()">
                            Enquire Now
                        </button>
                        
                        <!-- Changed the button to an anchor tag with target="_blank" -->
                        <a href="https://calendar.app.google/YMpePJXsdmiB8Wyt7" target="_blank"
                            class="bg-[#221f21] text-white py-2 px-6 rounded-full focus:outline-none focus:shadow-outline text-center">
                            Schedule Callback
                        </a>

                        <button
                        onclick="applyNow(window.location.href + '?utm_source=web&utm_medium=${url}page&utm_campaign=applynow')"
                            class="bg-orange-400 text-white py-2 px-6 rounded-full focus:outline-none focus:shadow-outline"
                            type="button">
                            Apply
                        </button>
                    </div>
                </div>
            </section>

    `;

  const ctaContainer = document.getElementById("cta-container");
  ctaContainer.innerHTML = cta;
});
