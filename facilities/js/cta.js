document.addEventListener("DOMContentLoaded", function () {
  const cta = `
              <section class="flex w-full bg-[#a61c55]">
                  <div class="w-full text-center py-20">
                      <h1 class="font-Bebas-Neue text-white text-2xl md:text-3xl lg:text-4xl mb-6">TAKE THE NEXT STEP</h1>
                      <div class="flex flex-col md:flex-row justify-center gap-4 px-4">
                          <button
                              class="bg-orange-400 text-white py-2 px-6 rounded-full focus:outline-none focus:shadow-outline"
                              type="button" onclick="openModal()">
                              Enquire Now
                          </button>
                          
                          <!-- Changed the button to an anchor tag with target="_blank" -->
                          <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2NTghbHhsLSFwm1hMlvoGEM9T2WoJoV15Wm0WcDcuBcGO-2rki3bn2AgySVYio0D2iJn1ZSb9X" target="_blank"
                              class="bg-orange-400 text-white py-2 px-6 rounded-full focus:outline-none focus:shadow-outline text-center">
                              Schedule Callback
                          </a>
  
                          <button
                          onclick="applyNow()"
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
