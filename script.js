document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    const uploadBtn = document.querySelector(".upload-btn");
  
    uploadBtn.addEventListener("click", () => {
      const fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = "image/*";
  
      fileInput.onchange = () => {
        const file = fileInput.files[0];
        if (file) {
          showLoadingAndResult(file);
        }
      };
  
      fileInput.click();
    });
  
    function showLoadingAndResult(file) {
      const resultBox = document.createElement("div");
      resultBox.style.padding = "20px";
      resultBox.style.marginTop = "20px";
      resultBox.style.background = "#eef9ee";
      resultBox.style.border = "1px solid #d1e7d1";
      resultBox.style.borderRadius = "8px";
      resultBox.style.textAlign = "center";
      resultBox.innerHTML = "<strong>Analyzing leaf image...</strong> ⏳";
  
      document.body.appendChild(resultBox);
  
      setTimeout(() => {
        const diseases = ["Citrus Canker", "Scab", "Greening", "No Disease Detected"];
        const randomDisease = diseases[Math.floor(Math.random() * diseases.length)];
  
        resultBox.innerHTML = `
          <strong>Analysis Complete ✅</strong><br><br>
          <p>Result: <b>${randomDisease}</b></p>
        `;
      }, 2000);
    }
  });
  