const lights_number = 67;

const fetchLights = async () => {
    for(let i=1; i<=lights_number; i++){

        var img = document.createElement('img');

        var para = document.createElement('h6');
        const temp = `CLP - ${i}`;
        para.innerHTML = temp;

        img.classList.add('img-thumbnail');
        img.src = `./images/one${i}.jpeg`; 
        document.getElementById('lights1').appendChild(img);
        document.getElementById('lights1').appendChild(para);
    }
}
fetchLights();

