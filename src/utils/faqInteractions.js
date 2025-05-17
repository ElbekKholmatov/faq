// This file contains utility functions for FAQ interactions

/**
 * Initialize FAQ interactions after the component mounts
 */
export const initFAQInteractions = () => {
  // Get all FAQ items
  const faqItems = document.querySelectorAll('.faq-item');
  
  // Add click event listeners to each question
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    
    if (question && answer) {
      // Set initial height for animation purposes
      if (item.classList.contains('active')) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
      
      question.addEventListener('click', () => {
        // Toggle active class
        const isActive = item.classList.contains('active');
        
        // Close all other items first (optional, for accordion style)
        faqItems.forEach(otherItem => {
          if (otherItem !== item && otherItem.classList.contains('active')) {
            otherItem.classList.remove('active');
            otherItem.querySelector('.faq-answer').style.maxHeight = '0';
          }
        });
        
        // Toggle current item
        if (isActive) {
          item.classList.remove('active');
          answer.style.maxHeight = '0';
        } else {
          item.classList.add('active');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    }
  });
};

/**
 * Filter FAQ items based on search query
 * @param {string} query - The search query
 */
export const filterFAQItems = (query) => {
  const faqItems = document.querySelectorAll('.faq-item');
  const normalizedQuery = query.toLowerCase().trim();
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question').textContent.toLowerCase();
    const answer = item.querySelector('.faq-answer').textContent.toLowerCase();
    
    if (question.includes(normalizedQuery) || answer.includes(normalizedQuery)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
};