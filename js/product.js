  const franceBtn = document.getElementById('France');
  const germanyBtn = document.getElementById('Germany');
  const englandBtn = document.getElementById('England');

  const franceEl = document.querySelector('.products__france');
  const germanyEl = document.querySelector('.products__germany');
  const englandEl = document.querySelector('.products__england');


  franceBtn.addEventListener('click', () => {
    germanyBtn.classList.remove('active');
    englandBtn.classList.remove('active');

    franceEl.classList.remove('none');
    germanyEl.classList.add('none');
    englandEl.classList.add('none');
  });

  germanyBtn.addEventListener('click', () => {
    franceBtn.classList.remove('active');
    germanyBtn.classList.add('active');
    englandBtn.classList.remove('active');

    germanyEl.classList.remove('none');
    franceEl.classList.add('none');
    englandEl.classList.add('none');
  });

  englandBtn.addEventListener('click', () => {
    franceBtn.classList.remove('active');
    germanyBtn.classList.remove('active');
    englandBtn.classList.add('active');

    englandEl.classList.remove('none');
    franceEl.classList.add('none');
    germanyEl.classList.add('none');
  })
