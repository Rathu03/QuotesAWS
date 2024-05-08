const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln"
  ];
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = quotes[randomIndex];
  }
  