
// ---------------load more------------------------------------------------------------------
// useVisibleCards.js
import { useEffect, useState } from 'react';

const useVisibleCards = (selector, initialVisibleCount) => {
  const [visibleCards, setVisibleCards] = useState(initialVisibleCount);
  const [totalCards, setTotalCards] = useState(0);

  useEffect(() => {
    const cards = document.querySelectorAll(selector);
    setTotalCards(cards.length);

    // Hide all cards initially
    cards.forEach((card, index) => {
      card.style.display = index < visibleCards ? 'block' : 'none';
    });
  }, [visibleCards, selector]);

  const handleLoadMore = () => {
    const cards = document.querySelectorAll(selector);

    // Calculate the number of remaining cards
    const remainingCards = totalCards - visibleCards;

    // Check if there are more cards to load
    if (remainingCards > 0) {
      // Update the number of visible cards
      const newVisibleCards = visibleCards + Math.min(2, remainingCards);
      setVisibleCards(newVisibleCards);

      // Show additional cards
      cards.forEach((card, index) => {
        if (index >= visibleCards && index < newVisibleCards) {
          card.style.display = 'block';
        }
      });
    }
  };

  return { handleLoadMore, totalCards, visibleCards };
};

export default useVisibleCards;
// ---------------load more------------------------------------------------------------------