const scrollContainer = document.querySelector("main");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    const sections = container.querySelectorAll(".section_2");

    function showSectionsSequentially() {
      sections.forEach((section, index) => {
        setTimeout(() => {
          section.classList.add("visible");
        }, index * 600);
      });
    }

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          showSectionsSequentially();
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5
    });

    observer.observe(container);
  });
  
  
  
  