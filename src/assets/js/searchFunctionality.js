var searchForm = document.getElementById("search-form");
var searchAgainForm = document.getElementById("search-again-form");
var searcher = document.getElementById("searcher");
var search = document.getElementById("search-field");
var results = document.getElementById("results");
var searchAgain = document.getElementById("search-again-field");

searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    submitSearch();
});

searchAgainForm.addEventListener("submit", (event) => {
    event.preventDefault();
})

async function submitSearch() {
    for (var i = 100; i > 0; i--) {
        await sleep(2);
        searcher.style.opacity = i + "%";
    }
    searcher.style.display = "none";
    searchAgain.value = search.value;
    results.style.display = "block";
    for (var i = 0; i < 100; i++) {
        await sleep(2);
        results.style.opacity = i + "%";
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}