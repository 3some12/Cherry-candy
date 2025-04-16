document.addEventListener("DOMContentLoaded", function () {
    handleSpecials();        // Page2
    handleFormValidation();  // Page3
    handleAddToCart();       // Page2
    animateCandy();          // Index
  });
  

  function animateCandy() {
    const candy = document.getElementById("fallingCandy");
    if (!candy) return;
    setTimeout(() => {
      candy.classList.add("visible");
    }, 500);
  }
  

  function handleSpecials() {
    const dailySpecial = document.getElementById("dailySpecial");
    if (!dailySpecial) return;
  
    const specials = [
      "🍬 Cherry Lollipop - Buy 1 Get 1 Free!",
      "🧸 Gummy Bears - Free Sample Today!",
      "🍓 Fruit Chews - 10% Off!"
    ];
  
    const index = new Date().getDay() % specials.length;
    dailySpecial.textContent = specials[index];
  }
  

  function handleAddToCart() {
    const buttons = document.querySelectorAll(".add-cart");
    if (!buttons) return;
  
    buttons.forEach((btn) => {
      btn.addEventListener("click", function () {
        const candyName = this.getAttribute("data-name");
        alert(`🛒 ${candyName} has been added to your cart!`);
      });
    });
  }

  function handleFormValidation() {
    const form = document.querySelector("#contactForm");
    if (!form) return;
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const candy = form.candy.value;
      const quantity = parseInt(form.quantity.value);
      const purpose = form.querySelector("input[name='purpose']:checked");
      const message = form.message.value.trim();
  
      let errorMessages = [];
  
      if (!name) errorMessages.push("Name is required.");
      if (!email.match(/^[^@]+@[^@]+\.[a-z]{2,}$/i)) errorMessages.push("Valid email is required.");
      if (!candy) errorMessages.push("Please select a candy.");
      if (isNaN(quantity) || quantity < 1) errorMessages.push("Quantity must be 1 or more.");
      if (!purpose) errorMessages.push("Please select a purpose.");
  
      if (errorMessages.length > 0) {
        alert("⚠️ Please fix the following:\n\n" + errorMessages.join("\n"));
        return false;
      }
  

      alert(`🎉 Thank you ${name}! Your order for ${quantity} ${candy}(s) is on the way!\nWe’ll reply to ${email} soon! 🍭`);
      form.reset();
    });
  }
  