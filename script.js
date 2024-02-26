window.addEventListener("scroll", function(){
    var header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 50)
})

function renderItems(items){
    const itemsElement = document.getElementById('items');
    if (items.length > 0){
        items.forEach(item => {
            let itemHTML = document.createElement('div');
            itemHTML.innerHTML = `
                <div class="item">
                    <div class="item-img">
                        <img src="${item.img}" />
                        ${item.tag !== "" 
                            ? `<div class="tag">${item.tag}</div>`
                            : `<div></div>`
                        } 
                    </div>
                    <div class="item-text">
                        <h6>${item.name}</h6>
                        <h5>${item.price}</h5>
                    </div>
                </div>`;
            itemsElement.append(itemHTML);
        })
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const starElement = document.getElementById('star');
    const numberOfStar = 5;

    let starHTML = '';
    for (let i = 0; i< numberOfStar; i++){
        starHTML += '<i class="fas fa-star"></i>';
    }

    if (starElement) {
        starElement.innerHTML = starHTML;
      }
    
    let items = [];
    fetch('./items.json').then(res => res.json())
        .then(data => {
            items.push(data);
            renderItems(items[0]);
        })
        .catch(err => {
            console.error('Error fetching data:', err);
        });
});
