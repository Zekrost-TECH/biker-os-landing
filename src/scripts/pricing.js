    /* ── Pricing toggle ── */
    const monthlyBtn = document.getElementById('monthlyBtn');
    const annualBtn = document.getElementById('annualBtn');
    const priceAmounts = document.querySelectorAll('.pricing-price .amount');
    const periodLabels = document.querySelectorAll('.pricing-price .period');
    let isAnnual = false;
    function updatePrices() {
      priceAmounts.forEach(amount => {
        const value = isAnnual ? amount.dataset.annual : amount.dataset.monthly;
        amount.style.opacity = '0';
        setTimeout(() => {
          amount.textContent = '$' + value;
          amount.style.opacity = '1';
        }, 150);
      });
      periodLabels.forEach(label => {
        label.textContent = isAnnual ? '/año' : '/mes';
      });
      monthlyBtn.classList.toggle('active', !isAnnual);
      annualBtn.classList.toggle('active', isAnnual);
    }
    monthlyBtn.addEventListener('click', () => {
      isAnnual = false;
      updatePrices();
    });
    annualBtn.addEventListener('click', () => {
      isAnnual = true;
      updatePrices();
    });

