/*document.addEventListener("DOMContentLoaded", () => {
  const horizontalScroll = document.querySelector("#horizontal-scroll");
  const headings = document.querySelectorAll(".scroll-item");
  const imageGroups = document.querySelectorAll(".image-group");

  if (horizontalScroll && headings.length > 0) {
      console.log('horizontalScroll and headings found!');

      horizontalScroll.addEventListener("scroll", () => {
          let scrollPosition = horizontalScroll.scrollLeft;
          console.log('scroll position: ', scrollPosition);

          headings.forEach((heading, index) => {
              const rect = heading.getBoundingClientRect();
              console.log('heading rect: ', rect);

              if (rect.left >= 0 && rect.right <= window.innerWidth) {
                  console.log(`Heading ${heading.innerText} is in view`);
                  heading.style.opacity = "1";
                  imageGroups[index].classList.add("active");
              } else {
                  heading.style.opacity = "0.5";
                  imageGroups[index].classList.remove("active");
              }
          });
      });
  } else {
      console.error('horizontalScroll or headings not found!');
  }
});*/

/*document.addEventListener("DOMContentLoaded", () => {
    const horizontalScroll = document.querySelector("#horizontal-scroll");
    const headings = document.querySelectorAll(".scroll-item");
    const imageGroups = document.querySelectorAll(".image-group");
  
    // Update image visibility based on scroll position
    horizontalScroll.addEventListener("scroll", () => {
      headings.forEach((heading, index) => {
        const rect = heading.getBoundingClientRect();
        const isVisible = rect.left >= 0 && rect.right <= window.innerWidth;
  
        if (isVisible) {
          imageGroups.forEach((group, i) => {
            group.classList.toggle("active", i === 0);
          });
        }
      });
    });
  });*/

  /*document.addEventListener("DOMContentLoaded", () => {
    const horizontalScroll = document.querySelector("#horizontal-scroll");
    const headings = document.querySelectorAll(".scroll-item");
    const imageGroups = document.querySelectorAll(".image-group");
  
    horizontalScroll.addEventListener("scroll", () => {
      const scrollPosition = horizontalScroll.scrollLeft;
      const scrollWidth = horizontalScroll.scrollWidth - horizontalScroll.clientWidth;
  
      // Calculate the active index based on scroll position
      const index = Math.round((scrollPosition / scrollWidth) * (headings.length - 1));
  
      // Update active image group
      imageGroups.forEach((group, idx) => {
        if (idx === index) {
          group.style.transform = "translateY(0)"; // Bring the active group into view
        } else {
          group.style.transform = `translateY(${(idx - index) * 100}%)`;
        }
      });
    });
  });*/

/*  document.addEventListener("DOMContentLoaded", () => {
    const horizontalScroll = document.querySelector("#horizontal-scroll");
    const headings = document.querySelectorAll(".scroll-item");
    const imageGroups = document.querySelectorAll(".image-group");

    // Existing horizontal scroll logic
    horizontalScroll.addEventListener("scroll", () => {
      const scrollPosition = horizontalScroll.scrollLeft;
      const scrollWidth = horizontalScroll.scrollWidth - horizontalScroll.clientWidth;

      // Calculate the active index based on scroll position
      const index = Math.round((scrollPosition / scrollWidth) * (headings.length - 1));

      // Update active image group
      imageGroups.forEach((group, idx) => {
        if (idx === index) {
          group.style.transform = "translateY(0)"; // Bring the active group into view
        } else {
          group.style.transform = `translateY(${(idx - index) * 100}%)`;
        }
      });
    });

    // Drag-to-scroll functionality
    let isDragging = false;
    let startX, scrollLeft;

    horizontalScroll.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.pageX - horizontalScroll.offsetLeft;
        scrollLeft = horizontalScroll.scrollLeft;
    });

    horizontalScroll.addEventListener("mouseleave", () => {
        isDragging = false;
    });

    horizontalScroll.addEventListener("mouseup", () => {
        isDragging = false;
    });

    horizontalScroll.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - horizontalScroll.offsetLeft;
        const walk = (x - startX) * 2; // Adjust scroll speed by changing multiplier
        horizontalScroll.scrollLeft = scrollLeft - walk;
    });
});*/

/*document.addEventListener("DOMContentLoaded", () => {
    const horizontalScroll = document.querySelector("#horizontal-scroll");
    const headings = document.querySelectorAll(".scroll-item");
    const imageGroups = document.querySelectorAll(".image-group");
  
    // Existing horizontal scroll logic
    horizontalScroll.addEventListener("scroll", () => {
      const scrollPosition = horizontalScroll.scrollLeft;
      const scrollWidth = horizontalScroll.scrollWidth - horizontalScroll.clientWidth;
  
      // Calculate the active index based on scroll position
      const index = Math.round((scrollPosition / scrollWidth) * (headings.length - 1));
  
      // Update active image group
      imageGroups.forEach((group, idx) => {
        if (idx === index) {
          group.style.transform = "translateY(0)"; // Bring the active group into view
        } else {
          group.style.transform = `translateY(${(idx - index) * 100}%)`;
        }
      });
    });
  
    // Drag-to-scroll functionality
    let isDragging = false;
    let startX, scrollLeft;
  
    horizontalScroll.addEventListener("mousedown", (e) => {
      isDragging = true;
      startX = e.pageX - horizontalScroll.offsetLeft;
      scrollLeft = horizontalScroll.scrollLeft;
    });
  
    horizontalScroll.addEventListener("mouseleave", () => {
      isDragging = false;
    });
  
    horizontalScroll.addEventListener("mouseup", () => {
      isDragging = false;
    });
  
    horizontalScroll.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - horizontalScroll.offsetLeft;
      const walk = (x - startX) * 2; // Adjust scroll speed by changing multiplier
      horizontalScroll.scrollLeft = scrollLeft - walk;
    });
  
    // Custom cursor functionality
    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    const dot = document.createElement("div");
    dot.classList.add("dot");
    cursor.appendChild(dot);
    document.body.appendChild(cursor);
  
    // Update cursor position
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });
  
    // Cursor animation on drag
    horizontalScroll.addEventListener("mousedown", () => {
      cursor.classList.add("active");
    });
    document.addEventListener("mouseup", () => {
      cursor.classList.remove("active");
    });
  });*/

  /*document.addEventListener("DOMContentLoaded", () => {
    const horizontalScroll = document.querySelector("#horizontal-scroll");
    const headings = document.querySelectorAll(".scroll-item");
    const imageGroups = document.querySelectorAll(".image-group");
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    // Custom cursor styles
    const style = document.createElement('style');
    style.innerHTML = `
        .custom-cursor {
            position: absolute;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: transparent;
            border: 2px solid #1e90ff;
            pointer-events: none;
            transform: translate(-50%, -50%);
            transition: width 0.2s, height 0.2s, background-color 0.2s;
        }
        .custom-cursor.dragging {
            background-color: #1e90ff;
            width: 15px;
            height: 15px;
        }
    `;
    document.head.appendChild(style);

    // Track mouse movements for custom cursor
    document.addEventListener("mousemove", (e) => {
        cursor.style.left = `${e.pageX}px`;
        cursor.style.top = `${e.pageY}px`;
    });

    // Existing horizontal scroll logic
    horizontalScroll.addEventListener("scroll", () => {
        const scrollPosition = horizontalScroll.scrollLeft;
        const scrollWidth = horizontalScroll.scrollWidth - horizontalScroll.clientWidth;

        // Calculate the active index based on scroll position
        const index = Math.round((scrollPosition / scrollWidth) * (headings.length - 1));

        // Update active image group
        imageGroups.forEach((group, idx) => {
            if (idx === index) {
                group.style.transform = "translateY(0)"; // Bring the active group into view
            } else {
                group.style.transform = `translateY(${(idx - index) * 100}%)`;
            }
        });
    });

    // Drag-to-scroll functionality
    let isDragging = false;
    let startX, scrollLeft;

    horizontalScroll.addEventListener("mousedown", (e) => {
        isDragging = true;
        cursor.classList.add('dragging');
        startX = e.pageX - horizontalScroll.offsetLeft;
        scrollLeft = horizontalScroll.scrollLeft;
    });

    horizontalScroll.addEventListener("mouseleave", () => {
        isDragging = false;
        cursor.classList.remove('dragging');
    });

    horizontalScroll.addEventListener("mouseup", () => {
        isDragging = false;
        cursor.classList.remove('dragging');
    });

    horizontalScroll.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - horizontalScroll.offsetLeft;
        const walk = (x - startX) * 2; // Adjust scroll speed by changing multiplier
        horizontalScroll.scrollLeft = scrollLeft - walk;
    });

    // Allow scrolling anywhere on the page
    let isPageDragging = false;
    let pageStartX, pageScrollLeft;

    document.addEventListener("mousedown", (e) => {
        isPageDragging = true;
        pageStartX = e.pageX;
        pageScrollLeft = horizontalScroll.scrollLeft;
        cursor.classList.add('dragging');
    });

    document.addEventListener("mouseup", () => {
        isPageDragging = false;
        cursor.classList.remove('dragging');
    });

    document.addEventListener("mousemove", (e) => {
        if (!isPageDragging) return;
        e.preventDefault();
        const x = e.pageX;
        const walk = (x - pageStartX) * 2; // Adjust scroll speed
        horizontalScroll.scrollLeft = pageScrollLeft - walk;
    });
});
*/
/*document.addEventListener("DOMContentLoaded", () => {
    const horizontalScroll = document.querySelector("#horizontal-scroll");
    const headings = document.querySelectorAll(".scroll-item");
    const imageGroups = document.querySelectorAll(".image-group");
    const cursor = document.querySelector(".custom-cursor"); // Custom cursor element

    // Existing horizontal scroll logic
    horizontalScroll.addEventListener("scroll", () => {
        const scrollPosition = horizontalScroll.scrollLeft;
        const scrollWidth = horizontalScroll.scrollWidth - horizontalScroll.clientWidth;

        // Calculate the active index based on scroll position
        const index = Math.round((scrollPosition / scrollWidth) * (headings.length - 1));

        // Update active image group
        imageGroups.forEach((group, idx) => {
            if (idx === index) {
                group.style.transform = "translateY(0)"; // Bring the active group into view
            } else {
                group.style.transform = `translateY(${(idx - index) * 100}%)`;
            }
        });
    });

    // Drag-to-scroll functionality
    let isDragging = false;
    let startX, scrollLeft;

    horizontalScroll.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.pageX - horizontalScroll.offsetLeft;
        scrollLeft = horizontalScroll.scrollLeft;
        cursor.classList.add("dragging");  // Show dragging state
    });

    horizontalScroll.addEventListener("mouseleave", () => {
        isDragging = false;
        cursor.classList.remove("dragging");
    });

    horizontalScroll.addEventListener("mouseup", () => {
        isDragging = false;
        cursor.classList.remove("dragging");
    });

    horizontalScroll.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - horizontalScroll.offsetLeft;
        const walk = (x - startX) * 2; // Adjust scroll speed by changing multiplier
        horizontalScroll.scrollLeft = scrollLeft - walk;
    });

    // Custom cursor functionality
    document.addEventListener("mousemove", (e) => {
        cursor.style.left = `${e.pageX}px`;
        cursor.style.top = `${e.pageY}px`;
    });

    document.addEventListener("mousedown", () => {
        cursor.classList.add("clicked");
    });

    document.addEventListener("mouseup", () => {
        cursor.classList.remove("clicked");
    });
}); code with surfing through headings
*/
/*document.addEventListener("DOMContentLoaded", () => {
    const horizontalScroll = document.querySelector("#horizontal-scroll");
    const headings = document.querySelectorAll(".scroll-item");
    const imageGroups = document.querySelectorAll(".image-group");
  
    let isDragging = false;
    let startX, scrollLeft;
  
    // Listen for mouse down to start dragging
    document.addEventListener("mousedown", (e) => {
      isDragging = true;
      startX = e.pageX - horizontalScroll.offsetLeft;
      scrollLeft = horizontalScroll.scrollLeft;
      document.body.style.cursor = 'grabbing';  // Custom cursor on drag
    });
  
    // Stop dragging when mouse is released or leaves
    document.addEventListener("mouseup", () => {
      isDragging = false;
      document.body.style.cursor = 'default'; // Reset cursor
    });
    
    document.addEventListener("mouseleave", () => {
      isDragging = false;
      document.body.style.cursor = 'default'; // Reset cursor
    });
  
    // Perform scroll while dragging
    document.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - horizontalScroll.offsetLeft;
      const walk = (x - startX) * 2;  // Adjust scroll speed
      horizontalScroll.scrollLeft = scrollLeft - walk;
    });
  
    // Prevent scroll on mouse wheel (mousepad issue)
    window.addEventListener("wheel", (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault(); // Prevent default vertical scroll
        horizontalScroll.scrollLeft += e.deltaY * 2; // Scroll horizontally instead
      }
    }, { passive: false });
  
    // Existing horizontal scroll logic
    horizontalScroll.addEventListener("scroll", () => {
      const scrollPosition = horizontalScroll.scrollLeft;
      const scrollWidth = horizontalScroll.scrollWidth - horizontalScroll.clientWidth;
  
      const index = Math.round((scrollPosition / scrollWidth) * (headings.length - 1));
  
      imageGroups.forEach((group, idx) => {
        if (idx === index) {
          group.style.transform = "translateY(0)"; // Bring the active group into view
        } else {
          group.style.transform = `translateY(${(idx - index) * 100}%)`;
        }
      });
    });
  }); allowing scrolling through anywhere on screen
  */
  
  /*document.addEventListener("DOMContentLoaded", () => {
    const horizontalScroll = document.querySelector("#horizontal-scroll");
    const headings = document.querySelectorAll(".scroll-item");
    const imageGroups = document.querySelectorAll(".image-group");

  
    let isDragging = false;
    let startX, scrollLeft;
  
    // Listen for mouse down to start dragging
    document.addEventListener("mousedown", (e) => {
      isDragging = true;
      startX = e.pageX - horizontalScroll.offsetLeft;
      scrollLeft = horizontalScroll.scrollLeft;
      document.body.classList.add("dragging");  // Add dragging class to change cursor
    });
  
    // Stop dragging when mouse is released or leaves
    document.addEventListener("mouseup", () => {
      isDragging = false;
      document.body.classList.remove("dragging");  // Remove dragging class to reset cursor
    });
  
    document.addEventListener("mouseleave", () => {
      isDragging = false;
      document.body.classList.remove("dragging");  // Remove dragging class to reset cursor
    });
  
    // Perform scroll while dragging
    document.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - horizontalScroll.offsetLeft;
      const walk = (x - startX) * 2;  // Adjust scroll speed
      horizontalScroll.scrollLeft = scrollLeft - walk;
    });
  
    // Prevent scroll on mouse wheel (mousepad issue)
    window.addEventListener("wheel", (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault(); // Prevent default vertical scroll
        horizontalScroll.scrollLeft += e.deltaY * 2; // Scroll horizontally instead
      }
    }, { passive: false });
  
    // Existing horizontal scroll logic
    horizontalScroll.addEventListener("scroll", () => {
      const scrollPosition = horizontalScroll.scrollLeft;
      const scrollWidth = horizontalScroll.scrollWidth - horizontalScroll.clientWidth;
  
      const index = Math.round((scrollPosition / scrollWidth) * (headings.length - 1));
  
      imageGroups.forEach((group, idx) => {
        if (idx === index) {
          group.style.transform = "translateY(0)"; // Bring the active group into view
        } else {
          group.style.transform = `translateY(${(idx - index) * 100}%)`;
        }
      });
    });
  });*/
  
  document.addEventListener("DOMContentLoaded", () => {
    const horizontalScroll = document.querySelector("#horizontal-scroll");
    const headings = document.querySelectorAll(".scroll-item");
    const imageGroups = document.querySelectorAll(".image-group");
    const customCursor = document.querySelector(".custom-cursor");

    let isDragging = false;
    let startX, scrollLeft;

    // Update cursor position
    document.addEventListener("mousemove", (e) => {
        customCursor.style.left = `${e.pageX - 15}px`;
        customCursor.style.top = `${e.pageY - 15}px`;
    });

    // Mouse down event for starting drag
    document.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.pageX - horizontalScroll.offsetLeft;
        scrollLeft = horizontalScroll.scrollLeft;
        customCursor.classList.add("dragging");
    });

    // Mouse up event to stop dragging
    document.addEventListener("mouseup", () => {
        isDragging = false;
        customCursor.classList.remove("dragging");
    });

    // Mouse leave event to stop dragging
    document.addEventListener("mouseleave", () => {
        isDragging = false;
        customCursor.classList.remove("dragging");
    });

    // Mouse move event for dragging and scrolling
    /*document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - horizontalScroll.offsetLeft;
        const walk = (x - startX) * 2; // Adjust scroll speed
        horizontalScroll.scrollLeft = scrollLeft - walk;
    });*/
    document.addEventListener("mousemove", (e) => {
      // Existing dragging functionality
      if (isDragging) {
          e.preventDefault();
          const x = e.pageX - horizontalScroll.offsetLeft;
          const walk = (x - startX) * 2; // Adjust scroll speed
          horizontalScroll.scrollLeft = scrollLeft - walk;
          return;
      }
  
      // Ripple effect logic
      const waterEffect = document.querySelector('.water-effect');
      const x = (e.pageX / window.innerWidth) * 100;
      const y = (e.pageY / window.innerHeight) * 100;
      waterEffect.style.backgroundPosition = `${x}% ${y}%`;
  });
  

    // Prevent default scroll on mouse wheel
    window.addEventListener("wheel", (e) => {
        if (e.deltaY !== 0) {
            e.preventDefault();
            horizontalScroll.scrollLeft += e.deltaY * 2;
        }
    }, { passive: false });

    // Horizontal scroll logic
    horizontalScroll.addEventListener("scroll", () => {
        const scrollPosition = horizontalScroll.scrollLeft;
        const scrollWidth = horizontalScroll.scrollWidth - horizontalScroll.clientWidth;
        const index = Math.round((scrollPosition / scrollWidth) * (headings.length - 1));

        imageGroups.forEach((group, idx) => {
            if (idx === index) {
                group.style.transform = "translateY(0)"; // Bring the active group into view
            } else {
                group.style.transform = `translateY(${(idx - index) * 100}%)`;
            }
        });
    });
});