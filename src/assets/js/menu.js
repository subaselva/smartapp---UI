document.addEventListener("DOMContentLoaded", function () {
  const filters = document.querySelectorAll("#menu-filters .nav-link");
  const items = document.querySelectorAll(".menu-container .menu-item");

  filters.forEach(filter => {
    filter.addEventListener("click", function (e) {
      e.preventDefault();

      // remove active class
      filters.forEach(f => f.classList.remove("active"));
      this.classList.add("active");

      const category = this.getAttribute("data-filter");

      items.forEach(item => {
        if (category === "all" || item.classList.contains(category)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});
