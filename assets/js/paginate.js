document.addEventListener("DOMContentLoaded", function () {
    // get all li elements from div "overview-item"
    const overviewItem = document.getElementsByClassName("overview-item")[0];
    const list = overviewItem.getElementsByTagName("ul")[0];

    const pagination = document.getElementById("pagination");
    const searchInput = document.getElementById("searchInput");
    const index = document.getElementById("item-list-index");
    const itemsPerPageSelector = document.getElementById("itemsPerPageSelector");
    // const itemsPerPageDisplay = document.getElementById("itemsPerPageDisplay");
    const prevPageButton = document.getElementById("prevPageButton");
    const nextPageButton = document.getElementById("nextPageButton");
    const firstPageButton = document.getElementById("firstPageButton");
    const lastPageButton = document.getElementById("lastPageButton");

    let itemsPerPage = parseInt(itemsPerPageSelector.value);
    let currentPage = 1;
    const originalList = Array.from(list.getElementsByTagName("li"));

    // Function to display a specific page of items
    function displayPage(page) {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const listItems = Array.from(list.getElementsByTagName("li"));

        listItems.forEach((item, index) => {
            if (index >= start && index < end) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    }


    // Function to show displayed items range and pagination
    function generatePagination() {
        const listItems = Array.from(list.getElementsByTagName("li"));
        const totalPages = Math.ceil(listItems.length / itemsPerPage);

        // show items range that are displayed
        let displayRangeEnd = currentPage * itemsPerPage < listItems.length ? currentPage * itemsPerPage : listItems.length;
        pagination.innerHTML = `Zeige ${currentPage * itemsPerPage - itemsPerPage + 1} - ${displayRangeEnd} von ${listItems.length} Einträgen`;

        prevPageButton.disabled = currentPage === 1;
        nextPageButton.disabled = currentPage === totalPages;
        firstPageButton.disabled = currentPage === 1;
        lastPageButton.disabled = currentPage === totalPages;
    }

    // Function to update the number of items to show per page
    function updateItemsPerPage() {
        itemsPerPage = parseInt(itemsPerPageSelector.value);
        // itemsPerPageDisplay.textContent = itemsPerPage;
        currentPage = 1;
        displayPage(currentPage);
        generatePagination();
    }

    // Function to filter items based on search input
    function filterItems() {
        const searchTerm = searchInput.value.toLowerCase();
        let filteredItemsCount = 0;
        list.innerHTML = ""; // clear the list

        originalList.forEach((item) => {
            const text = item.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                list.appendChild(item);
                filteredItemsCount++;
            }
        });

        if (filteredItemsCount === 0) {
            list.innerHTML = "<li>No results found</li>";
        }
        // console.log(filteredItemsCount)
        currentPage = 1; // Reset to the first page when searching
        displayPage(currentPage);
        generatePagination();
        // remove active class from index links
        const indexLinks = index.getElementsByTagName("a");
        for (const link of indexLinks) {
            link.classList.remove("active");
        }
    }

    // Function to generate the index sorted in ascending order
    function generateIndex() {
        const listItems = Array.from(list.getElementsByTagName("li"));
        const indexMap = {};

        listItems.forEach((item) => {
            const text = item.textContent.trim();
            const firstChar = text.charAt(0).toUpperCase();
            if (!indexMap[firstChar]) {
                indexMap[firstChar] = [];
            }
            indexMap[firstChar].push(item);
        });

        // Sort the index keys (characters) in ascending order
        const sortedIndexKeys = Object.keys(indexMap).sort();

        let indexHTML = "";
        for (const char of sortedIndexKeys) {
            indexHTML += `<a href="#" data-char="${char}">${char}</a>`;
        }
        index.innerHTML = indexHTML;

        const indexLinks = index.getElementsByTagName("a");
        for (const link of indexLinks) {
            link.addEventListener("click", function (e) {
                e.preventDefault();
                const char = this.getAttribute("data-char");
                const items = indexMap[char];
                // remove active class from all index links and add it to the clicked link
                for (const link of indexLinks) {
                    link.classList.remove("active");
                }
                this.classList.add("active");

                list.innerHTML = ""; // Clear the list
                items.forEach((item) => {
                    list.appendChild(item);
                });
                currentPage = 1; // Reset to the first page when clicking an index character
                displayPage(currentPage);
                generatePagination();
            });
        }
    }

    // Event listeners for pagination controls
    prevPageButton.addEventListener("click", function () {
        if (currentPage > 1) {
            currentPage--;
            displayPage(currentPage);
            generatePagination();
        }
    });

    nextPageButton.addEventListener("click", function () {
        const listItems = Array.from(list.getElementsByTagName("li"));
        const totalPages = Math.ceil(listItems.length / itemsPerPage);

        if (currentPage < totalPages) {
            currentPage++;
            displayPage(currentPage);
            generatePagination();
        }
    });

    firstPageButton.addEventListener("click", function () {
        currentPage = 1;
        displayPage(currentPage);
        generatePagination();
    });

    lastPageButton.addEventListener("click", function () {
        const listItems = Array.from(list.getElementsByTagName("li"));
        const totalPages = Math.ceil(listItems.length / itemsPerPage);
        currentPage = totalPages;
        displayPage(currentPage);
        generatePagination();
    });

    itemsPerPageSelector.addEventListener("change", updateItemsPerPage);

    // Initial setup
    displayPage(currentPage);
    generatePagination();
    generateIndex();

    // Event listener for search input
    searchInput.addEventListener("input", filterItems);
});
