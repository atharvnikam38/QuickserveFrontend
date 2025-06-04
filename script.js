   document.addEventListener('DOMContentLoaded', function () {
      const chatbotIcon = document.querySelector('.chatbot-icon');
      const chatbotPopup = document.querySelector('.chatbot-popup');
      const chatbotOverlay = document.querySelector('.chatbot-overlay');
      const notificationBadge = document.querySelector('.notification-badge');
      const chatbotSound = document.getElementById('chatbotSound');

      // Play sound and show popup when page loads (after 2 seconds)
      setTimeout(() => {
        chatbotSound.play().catch(e => console.log("Audio play failed:", e));
        chatbotPopup.classList.add('active');
        chatbotOverlay.classList.add('active');
        notificationBadge.style.display = 'none';
      }, 2000);

      // Toggle chatbot when icon is clicked
      chatbotIcon.addEventListener('click', function (e) {
        e.stopPropagation();
        chatbotSound.play().catch(e => console.log("Audio play failed:", e));

        if (chatbotPopup.classList.contains('active')) {
          chatbotPopup.classList.remove('active');
          chatbotOverlay.classList.remove('active');
        } else {
          chatbotPopup.classList.add('active');
          chatbotOverlay.classList.add('active');
          notificationBadge.style.display = 'none';
        }
      });

      // Close chatbot when clicking outside
      document.addEventListener('click', function (e) {
        if (!chatbotPopup.contains(e.target) && e.target !== chatbotIcon) {
          chatbotPopup.classList.remove('active');
          chatbotOverlay.classList.remove('active');
        }
      });

      // Close chatbot when clicking overlay
      chatbotOverlay.addEventListener('click', function () {
        chatbotPopup.classList.remove('active');
        chatbotOverlay.classList.remove('active');
      });

      // Make chatbot icon stay fixed while scrolling
      window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 100) {
          chatbotIcon.style.transform = 'translateY(0)';
        } else {
          chatbotIcon.style.transform = 'translateY(0)';
        }
      });
    });