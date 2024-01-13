const counts = document.querySelectorAll('.count');
const speed = 119;

counts.forEach((counter) => {
    function upData(){
        const target = Number(counter.getAttribute('data-target'));
        const count = Number(counter.innerHTML);
        const inc = target / speed;

        if(count < target){
            counter.innerHTML = Math.floor(inc + count);
            setTimeout(upData, 100);
        }
        else{
            counter.innerHTML = target;
        }
    }
    upData()
})
