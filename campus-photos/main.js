// Define faculty data directly in the JS file instead of fetching externally
const facultyData = [
  {
    id: "campus-gallery",
    data: [
      {
        id: 1,
        des: "ITM Campus Main Building",
        img: "https://media.itmuniversity.org/photo_30_cf6d67c2df.avif",
        category: "facilities",
      },
      {
        id: 2,
        des: "Student Recreation Area",
        img: "https://media.itmuniversity.org/photo_89_ef7b15285d.avif",
        category: "facilities",
      },
      {
        id: 3,
        des: "Campus Library",
        img: "https://media.itmuniversity.org/photo_51_e6ae227187.avif",
        category: "facilities",
      },
      {
        id: 4,
        des: "Technology Lab",
        img: "https://media.itm.ac.in/IMG_4401_16_11zon_8f97129c22.webp",
        category: "facilities",
      },
      {
        id: 5,
        des: "Graduation Ceremony",
        img: "https://media.itmuniversity.org/photo_15_11c60a4c7f.avif",
        category: "events",
      },
      {
        id: 6,
        des: "Sports Complex",
        img: "https://media.itmuniversity.org/photo_65_31d870868a.avif",
        category: "facilities",
      },
      {
        id: 6,
        des: "Sports Complex",
        img: "https://media.itmuniversity.org/photo_58_4a1b0df542.avif",
        category: "facilities",
      },
      {
        id: 6,
        des: "Sports Complex",
        img: "https://media.itmuniversity.org/photo_57_ba6aaa386d.avif",
        category: "facilities",
      },
      {
        id: 6,
        des: "Sports Complex",
        img: "https://media.itmuniversity.org/photo_55_1a33e520db.avif",
        category: "facilities",
      },
      {
        id: 6,
        des: "Sports Complex",
        img: "https://media.itmuniversity.org/photo_53_bbabdd62d5.avif",
        category: "facilities",
      },
      {
        id: 6,
        des: "Sports Complex",
        img: "https://media.itmuniversity.org/photo_10_859af77337.avif",
        category: "facilities",
      },
      {
        id: 6,
        des: "Sports Complex",
        img: "https://media.itmuniversity.org/photo_2_b6d87e8626.avif",
        category: "facilities",
      },
      {
        id: 6,
        des: "Sports Complex",
        img: "https://media.itmuniversity.org/photo_1_0ceeb9d2ce.avif",
        category: "facilities",
      },
      {
        id: 6,
        des: "Sports Complex",
        img: "https://media.itmuniversity.org/photo_29_d5c2d38078.avif",
        category: "facilities",
      },
    ],
  },
];

// Global variables for pagination
let currentPage = 1;
const itemsPerPage = 12;
let currentFilter = "all";
let filteredItems = [];

// Process the faculty data directly
document.addEventListener("DOMContentLoaded", function () {
  // Get all gallery items
  filteredItems = facultyData[0].data;

  // Initialize pagination
  updateGallery();

  // Initialize filtering and animation effects
  initializeGalleryEffects();
});

// Function to create HTML for each photo item
function showData(faculty) {
  return `
  <div onclick="openImageModal('${faculty.img}', '${faculty.des}')"
    class="gallery-item group border border-gray-300 rounded-lg shadow-lg cursor-pointer relative overflow-hidden transform transition-all duration-300 hover:scale-102 hover:shadow-xl"
    data-category="${faculty.category}">
    <img src="${faculty.img}" alt="${faculty.des}"
      class="w-full flex h-64 object-cover rounded-lg transition-transform duration-500 group-hover:scale-105" />
    <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start">
      <h2 class="w-full bg-[#a91d54] text-white font-medium px-3 py-2 truncate">
        ${faculty.des}
      </h2>
    </div>
  </div>
  `;
}

// Function to update gallery based on current page and filter
function updateGallery() {
  const facultyList = document.getElementById("facultyList");
  if (!facultyList) {
    console.error("Element with ID 'facultyList' not found");
    return;
  }

  // Filter items based on current filter
  let itemsToShow = facultyData[0].data;
  if (currentFilter !== "all") {
    itemsToShow = facultyData[0].data.filter(
      (item) => item.category === currentFilter
    );
  }

  filteredItems = itemsToShow;

  // Calculate pagination
  const totalPages = Math.ceil(itemsToShow.length / itemsPerPage);
  if (currentPage > totalPages && totalPages > 0) {
    currentPage = totalPages;
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, itemsToShow.length);
  const paginatedItems = itemsToShow.slice(startIndex, endIndex);

  // Generate HTML for items
  const output = paginatedItems.map(showData).join("");
  facultyList.innerHTML = output;

  // Update pagination
  renderPagination(totalPages);

  // Add animation to new items
  setTimeout(() => {
    const galleryItems = document.querySelectorAll(".gallery-item");
    galleryItems.forEach((item, index) => {
      item.style.animationDelay = `${index * 0.1}s`;
      item.classList.add("fade-in-up");
    });
  }, 10);
}

// Create numbered pagination with Previous/Next buttons
function renderPagination(totalPages) {
  const paginationContainer = document.querySelector(
    ".flex.items-center.justify-center.gap-2.mt-10.mb-6"
  );
  if (!paginationContainer) return;

  // Clear existing pagination
  paginationContainer.innerHTML = "";

  // Create pagination structure
  let paginationHTML = "";

  // Previous button
  paginationHTML += `
    <button class="pagination-prev flex items-center px-4 py-2 mr-1 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 ${
      currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
    }" 
            ${currentPage === 1 ? "disabled" : ""}>
      Previous
    </button>
  `;

  // Determine which page numbers to show
  let startPage = Math.max(1, currentPage - 2);
  let endPage = Math.min(totalPages, startPage + 4);

  if (endPage - startPage < 4 && totalPages > 5) {
    startPage = Math.max(1, endPage - 4);
  }

  // First page (if not in range)
  if (startPage > 1) {
    paginationHTML += `
      <button class="pagination-number w-10 h-10 mx-1 text-center rounded-md border border-gray-300 hover:bg-gray-100" data-page="1">1</button>
    `;

    if (startPage > 2) {
      paginationHTML += `
        <span class="mx-1 text-gray-600">...</span>
      `;
    }
  }

  // Page numbers
  for (let i = startPage; i <= endPage; i++) {
    const isActive = i === currentPage;
    paginationHTML += `
      <button class="pagination-number w-10 h-10 mx-1 text-center rounded-md ${
        isActive
          ? "bg-[#a91d54] text-white"
          : "border border-gray-300 hover:bg-gray-100"
      }" data-page="${i}">${i}</button>
    `;
  }

  // Last page (if not in range)
  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      paginationHTML += `
        <span class="mx-1 text-gray-600">...</span>
      `;
    }

    paginationHTML += `
      <button class="pagination-number w-10 h-10 mx-1 text-center rounded-md border border-gray-300 hover:bg-gray-100" data-page="${totalPages}">${totalPages}</button>
    `;
  }

  // Next button
  paginationHTML += `
    <button class="pagination-next flex items-center px-4 py-2 ml-1 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 ${
      currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
    }" 
            ${currentPage === totalPages ? "disabled" : ""}>
      Next 
    </button>
  `;

  // Add pagination to container
  paginationContainer.innerHTML = paginationHTML;

  // Add event listeners to pagination buttons
  const pageButtons =
    paginationContainer.querySelectorAll(".pagination-number");
  pageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      currentPage = parseInt(button.getAttribute("data-page"));
      updateGallery();
    });
  });

  // Add event listeners to prev/next buttons
  const prevButton = paginationContainer.querySelector(".pagination-prev");
  if (prevButton) {
    prevButton.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        updateGallery();
      }
    });
  }

  const nextButton = paginationContainer.querySelector(".pagination-next");
  if (nextButton) {
    nextButton.addEventListener("click", () => {
      if (currentPage < totalPages) {
        currentPage++;
        updateGallery();
      }
    });
  }
}

// Current image index for navigation
let currentImageIndex = 0;

// Image modal functionality - Updated to use the new modal structure
function openImageModal(src, caption) {
  const modal = document.getElementById("image-modal");
  const modalContent = document.getElementById("modal-content");
  const modalImg = document.getElementById("modal-img");

  // Set image source
  modalImg.src = src;
  modalImg.alt = caption || "Campus preview";

  // Show modal
  modal.classList.remove("hidden");
  modal.classList.add("flex");

  // Find the current image index for navigation
  currentImageIndex = filteredItems.findIndex((item) => item.img === src);

  // Add animation
  requestAnimationFrame(() => {
    modalContent.classList.remove(
      "opacity-0",
      "scale-95",
      "pointer-events-none"
    );
    modalContent.classList.add(
      "opacity-100",
      "scale-100",
      "pointer-events-auto"
    );
  });

  // Prevent scrolling when modal is open
  document.body.style.overflow = "hidden";

  // Setup keyboard navigation
  document.addEventListener("keydown", handleModalKeyboardNavigation);
}

function closeImageModal() {
  const modal = document.getElementById("image-modal");
  const modalContent = document.getElementById("modal-content");

  // Add animation for closing
  modalContent.classList.remove(
    "opacity-100",
    "scale-100",
    "pointer-events-auto"
  );
  modalContent.classList.add("opacity-0", "scale-95", "pointer-events-none");

  // Wait for animation to complete before hiding
  setTimeout(() => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.getElementById("modal-img").src = "";

    // Re-enable scrolling
    document.body.style.overflow = "auto";
  }, 300);

  // Remove keyboard event listener
  document.removeEventListener("keydown", handleModalKeyboardNavigation);
}

// Handle keyboard navigation in modal
function handleModalKeyboardNavigation(e) {
  if (e.key === "Escape") {
    closeImageModal();
  } else if (e.key === "ArrowLeft") {
    navigateToPrevImage();
  } else if (e.key === "ArrowRight") {
    navigateToNextImage();
  }
}

// Navigate to previous image
function navigateToPrevImage() {
  if (filteredItems.length <= 1) return;

  if (currentImageIndex > 0) {
    currentImageIndex--;
  } else {
    currentImageIndex = filteredItems.length - 1;
  }

  const prevItem = filteredItems[currentImageIndex];
  const modalImg = document.getElementById("modal-img");
  modalImg.src = prevItem.img;
  modalImg.alt = prevItem.des;
}

// Navigate to next image
function navigateToNextImage() {
  if (filteredItems.length <= 1) return;

  if (currentImageIndex < filteredItems.length - 1) {
    currentImageIndex++;
  } else {
    currentImageIndex = 0;
  }

  const nextItem = filteredItems[currentImageIndex];
  const modalImg = document.getElementById("modal-img");
  modalImg.src = nextItem.img;
  modalImg.alt = nextItem.des;
}

// Add navigation buttons to modal
function addNavigationButtonsToModal() {
  const modalContent = document.getElementById("modal-content");

  // Create prev button if doesn't exist
  if (!document.getElementById("modal-prev-btn")) {
    const prevBtn = document.createElement("button");
    prevBtn.id = "modal-prev-btn";
    prevBtn.className =
      "absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition";
    prevBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    `;
    prevBtn.onclick = function (e) {
      e.stopPropagation();
      navigateToPrevImage();
    };
    modalContent.appendChild(prevBtn);
  }

  // Create next button if doesn't exist
  if (!document.getElementById("modal-next-btn")) {
    const nextBtn = document.createElement("button");
    nextBtn.id = "modal-next-btn";
    nextBtn.className =
      "absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition";
    nextBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    `;
    nextBtn.onclick = function (e) {
      e.stopPropagation();
      navigateToNextImage();
    };
    modalContent.appendChild(nextBtn);
  }
}

// Initialize gallery effects
function initializeGalleryEffects() {
  // Initialize filtering buttons if they exist
  initializeFilters();

  // Initialize view toggle buttons
  initializeViewToggle();

  // Add click event to modal backdrop to close
  const modalBackdrop = document.getElementById("modal-backdrop");
  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", closeImageModal);
  }

  // Add navigation buttons to modal
  addNavigationButtonsToModal();
}

// Initialize filter buttons
function initializeFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  if (filterButtons.length) {
    filterButtons.forEach((btn) => {
      btn.addEventListener("click", function () {
        const filter = this.dataset.filter;
        currentFilter = filter;
        currentPage = 1; // Reset to first page when filter changes

        // Remove active class from all buttons
        filterButtons.forEach((b) => b.classList.remove("active-filter"));

        // Add active class to clicked button
        this.classList.add("active-filter");

        // Update gallery with new filter
        updateGallery();
      });
    });
  }
}

// Initialize view toggle buttons
function initializeViewToggle() {
  const gridViewBtn = document.getElementById("grid-view");
  const listViewBtn = document.getElementById("list-view");
  const facultyList = document.getElementById("facultyList");

  if (gridViewBtn && listViewBtn && facultyList) {
    // Grid view (default)
    gridViewBtn.addEventListener("click", function () {
      facultyList.classList.remove("grid-cols-1");
      facultyList.classList.add(
        "grid-cols-1",
        "sm:grid-cols-2",
        "md:grid-cols-3",
        "lg:grid-cols-4"
      );

      // Update active state
      gridViewBtn.classList.add("text-[#a91d54]");
      listViewBtn.classList.remove("text-[#a91d54]");

      // Refresh gallery
      updateGallery();
    });

    // List view
    listViewBtn.addEventListener("click", function () {
      facultyList.classList.remove(
        "sm:grid-cols-2",
        "md:grid-cols-3",
        "lg:grid-cols-4"
      );
      facultyList.classList.add("grid-cols-1");

      // Update active state
      listViewBtn.classList.add("text-[#a91d54]");
      gridViewBtn.classList.remove("text-[#a91d54]");

      // Refresh gallery
      updateGallery();
    });
  }
}
