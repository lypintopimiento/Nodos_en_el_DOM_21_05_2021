

this.onload = function (){

    const arg = document.getElementById('nombre');
    // console.log(arg.innerText.replace(/[\r\n\t]/gm, "").trim());
    console.log(arg.innerText);
    console.log(arg.innerHTML);
    console.log(arg.outerHTML);
    console.log(arg.textContent);


    // for (let i = 0; i < 1000000; i++) {
    //     const lista = document.createElement("H1");
    //     const texto = document.createTextNode(`Miguel Angel Castro Escamilla ${i}`);
    //     lista.appendChild(texto);
    //     document.body.append(lista);
    //     // console.log(lista);
    // }




    let framen = new DocumentFragment();
    let cont = 0;
    localStorage.removeItem('cont');
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(json =>{
        json.forEach(element => {
            cont++;
            const tr = document.createElement("TR");
            const td = document.createElement("TD");
            const albumId = document.createTextNode(element.albumId);
            const td2 = document.createElement("TD");
            const id = document.createTextNode(element.id);
            const td3 = document.createElement("TD");
            const p = document.createElement("P");
            const title = document.createTextNode(element.title);
            const td4 = document.createElement("TD");
            const img = document.createElement("IMG");
            td.appendChild(albumId);
            tr.appendChild(td);
            td2.append(id);
            tr.appendChild(td2);
            p.appendChild(title);
            td3.appendChild(p);
            tr.appendChild(td3);
            img.setAttribute('src',element.thumbnailUrl);
            td4.appendChild(img);
            tr.appendChild(td4);
            framen.appendChild(tr);
        });
        document.getElementById('data').append(framen);
        console.log(framen);
        localStorage.setItem('cont', cont);
        // document.body.appendChild(framen);
    })
    // cont = localStorage.getItem('cont');
    // console.log(cont);
    // fetch('https://jsonplaceholder.typicode.com/photos')
    // .then(response => response.json())
    // .then(json =>{
    //     json.forEach(element => {
    //         cont++;
    //         const tr = document.createElement("TR");
    //         const td = document.createElement("TD");
    //         const albumId = document.createTextNode(element.albumId);
    //         const td2 = document.createElement("TD");
    //         const id = document.createTextNode(cont);
    //         const td3 = document.createElement("TD");
    //         const p = document.createElement("P");
    //         const title = document.createTextNode(element.title);
    //         const td4 = document.createElement("TD");
    //         const img = document.createElement("IMG");
    //         td.appendChild(albumId);
    //         tr.appendChild(td);
    //         td2.append(id);
    //         tr.appendChild(td2);
    //         p.appendChild(title);
    //         td3.appendChild(p);
    //         tr.appendChild(td3);
    //         img.setAttribute('src',element.thumbnailUrl);
    //         td4.appendChild(img);
    //         tr.appendChild(td4);
    //         framen.appendChild(tr);
    //     });
    //     document.getElementById('data').append(framen);
    //     console.log(framen);
    //     // document.body.appendChild(framen);
    // })

    // fetch('https://jsonplaceholder.typicode.com/photos')
    // .then(response => response.json())
    // .then(json =>{
    //     json.forEach(element => {
    //         cont++;
    //         const tr = document.createElement("TR");
    //         const td = document.createElement("TD");
    //         const albumId = document.createTextNode(element.albumId);
    //         const td2 = document.createElement("TD");
    //         const id = document.createTextNode(cont);
    //         const td3 = document.createElement("TD");
    //         const p = document.createElement("P");
    //         const title = document.createTextNode(element.title);
    //         const td4 = document.createElement("TD");
    //         const img = document.createElement("IMG");
    //         td.appendChild(albumId);
    //         tr.appendChild(td);
    //         td2.append(id);
    //         tr.appendChild(td2);
    //         p.appendChild(title);
    //         td3.appendChild(p);
    //         tr.appendChild(td3);
    //         img.setAttribute('src',element.thumbnailUrl);
    //         td4.appendChild(img);
    //         tr.appendChild(td4);
    //         framen.appendChild(tr);
    //     });
    //     document.getElementById('data').append(framen);
    //     console.log(framen);
    //     // document.body.appendChild(framen);
    // })



    // fetch('https://jsonplaceholder.typicode.com/photos')
    // .then(response => response.json())
    // .then(json =>{
    //     json.forEach(element => {
    //         const lista = document.createElement("IMG");
    //         const lista2 = document.createElement("B");
    //         const texto = document.createTextNode(element.title);
    //         lista2.appendChild(texto);
    //         lista.setAttribute('src',element.url);
    //         lista.setAttribute('width','50');
    //         lista.setAttribute('title',element.title);
    //         framen.appendChild(lista2);
    //         framen.appendChild(lista);
    //     });
    //     document.body.appendChild(framen);
    // })

    
}