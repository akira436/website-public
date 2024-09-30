simplyCountdown('.simply-countdown', {
    year: 2025,
    month: 9,
    day: 28,
    hours: 0,
    minutes: 0,
    seconds: 0,
    words: {
      days: { singular: 'hari', plural: 'hari' },
      hours: { singular: 'jam', plural: 'jam' },
      minutes: { singular: 'menit', plural: 'menit' },
      seconds: { singular: 'detik', plural: 'detik' }
    },
  });
 
window.onload = function() {
  document.body.classList.add('locked'); 
  document.getElementById('unlockButton').setAttribute('disabled', true); 
};


function unlockPage() {
  
  document.body.classList.remove('locked');
  
 
  document.getElementById('unlockButton').removeAttribute('disabled');
  
  
  const audio = document.getElementById('song');
  audio.muted = false;
  audio.play().catch(error => {
      console.error("Playback failed: ", error);
  });

 
  const targetElement = document.querySelector('#info');
  targetElement.scrollIntoView({ behavior: 'smooth' });
}

  
  const audioIconWrapper = document.querySelector('.audio-icon-wrapper');
  const audio = document.getElementById('song');
  const audioIcon = document.querySelector('.audio-icon-wrapper i');

  window.onload = function() {
    document.body.classList.add('lock-scroll');
    const audio = document.getElementById('song');
  }
  
  function toggleAudio() {
    if (audio.paused || audio.muted) {
      audio.muted = false;
      audio.play();
      audioIcon.classList.remove('bi-play-disc');
      audioIcon.classList.add('bi-pause-circle');
    } else {
      audio.muted = true;
      audioIcon.classList.remove('bi-pause-circle');
      audioIcon.classList.add('bi-play-disc');
    }
  }
  audioIconWrapper.addEventListener('click', toggleAudio);

  window.onload = function() {
    const audio = document.getElementById('song');
    audio.play().catch(error => {
        console.error("Playback failed: ", error);
    });
};
  
  const urlParams = new URLSearchParams(window.location.search);
  const nama = urlParams.get('nama') || '';
  const pronoun = urlParams.get('p') || 'Bapak/Ibu/Saudara';
  
  console.log(nama);
  
  const namaContainer = document.querySelector('.undangan h1 span');
  namaContainer.innerText = pronoun + ' ' + nama; 
  
  document.querySelector('#nama').value = nama;
  
 /**
   *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
   *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables
   */
  /*
  var disqus_config = function () {
    this.page.url = window.location.href;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = document.title; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
  };
  */

  (function() { 
    var d = document, s = d.createElement('script');
    s.src = 'https://my-wedding-xelwlhxddz.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  })();

  function copyAccountNumber(elementId) {
    var accountNumber = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(number).then(() => {
      alert('Nomor rekening berhasil disalin!');
    });
  }
