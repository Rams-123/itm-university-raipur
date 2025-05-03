let baseUrl = "/institute-of-health-sciences/form-js";

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching data from ${url}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    return null;
  }
};

const populateDropdown = (
  dropdown,
  data,
  valueKey,
  textKey,
  defaultText = "Select State"
) => {
  dropdown.innerHTML = "";
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = defaultText;
  defaultOption.disabled = true;
  defaultOption.selected = true;
  dropdown.appendChild(defaultOption);

  data.forEach((item) => {
    const option = document.createElement("option");
    option.value = item[valueKey];
    option.textContent = item[textKey];
    dropdown.appendChild(option);
  });
};

const initStateCityDropdowns = async (stateId, cityId) => {
  const stateSelect = document.getElementById(stateId);
  const citySelect = document.getElementById(cityId);

  if (!stateSelect || !citySelect) {
    console.error(`Dropdowns with IDs "${stateId}" or "${cityId}" not found.`);
    return;
  }

  const data = await fetchData(`${baseUrl}/data.json`);
  if (!data) return;

  populateDropdown(stateSelect, data, "name", "name", "Select State");

  stateSelect.addEventListener("change", () => {
    const selectedState = stateSelect.value;
    const stateObj = data.find((state) => state.name === selectedState);

    if (stateObj) {
      populateDropdown(
        citySelect,
        stateObj.cities,
        "name",
        "name",
        "Select City"
      );
      citySelect.disabled = false; // Enable city dropdown
    } else {
      populateDropdown(citySelect, [], "name", "name", "Select City");
    }
  });
};

const initCountryDropdown = async (countryId, locationClass) => {
  const countrySelect = document.getElementById(countryId);

  if (!countrySelect) {
    console.error(`Dropdown with ID "${countryId}" not found.`);
    return;
  }

  const data = await fetchData(`${baseUrl}/country.json`);
  if (!data) return;

  populateDropdown(
    countrySelect,
    data,
    "countryCode",
    "countryCode",
    "Select Country"
  );
  countrySelect.value = "+91";

  countrySelect.addEventListener("change", () => {
    const countryCode = countrySelect.value;

    // Scope the search for location divs within the closest parent form
    const parentForm = countrySelect.closest("form");
    if (!parentForm) return;

    const locationDivs = parentForm.querySelectorAll(`.${locationClass}`);
    locationDivs.forEach((div) => {
      div.style.display = countryCode === "+91" ? "block" : "none";
    });
  });
};

// Initialize dropdowns for each form independently
initStateCityDropdowns("state", "city");
initStateCityDropdowns("state1", "city1");
initCountryDropdown("countrySelect", "location");
initCountryDropdown("countrySelect1", "location1");
