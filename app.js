
            let hrs = 0;
            const time = document.getElementById('hr-time');
            const val = document.getElementById('hr-val');
            window.addHr = function() {
                hrs++;
                time.innerText = hrs;
                val.innerText = `$${(hrs * 50).toFixed(2)}`;
            }
        