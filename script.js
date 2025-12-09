(() => {
  const timeEl = document.getElementById('time');
  const ampmEl = document.getElementById('ampm');
  const dateEl = document.getElementById('date');
  const toggleFormatBtn = document.getElementById('toggleFormat');
  const showSecondsBtn = document.getElementById('showSeconds');

  let use24 = false;
  let showSeconds = true;

  function pad(n){ return n.toString().padStart(2,'0'); }

  function updateClock(){
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    let ampm = 'AM';

    if(!use24){
      ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12;
    }

    const h = pad(hours);
    const m = pad(minutes);
    const s = pad(seconds);

    timeEl.textContent = showSeconds ? `${h}:${m}:${s}` : `${h}:${m}`;
    ampmEl.textContent = use24 ? '' : ampm;

    const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const formattedDate = `${monthNames[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
    dateEl.textContent = formattedDate;
  }

  toggleFormatBtn.addEventListener('click', () => { use24 = !use24; updateClock(); });
  showSecondsBtn.addEventListener('click', () => { showSeconds = !showSeconds; updateClock(); });

  // initial + interval
  updateClock();
  setInterval(updateClock, 1000);
})();
