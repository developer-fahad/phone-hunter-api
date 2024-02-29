const defaultLoad = async (names) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${names}`);
    const data = await res.json();
    const phones = data.data;
    defaultDisplay(phones);
}
defaultLoad('iphone');
// defaultLoad('samsung');
// defaultLoad('oppo');
// defaultLoad('huawei');

const defaultDisplay = (phns) =>{
    const myPhoneContainer = document.getElementById('default-phone-container');
    myPhoneContainer.innerText = '';
    console.log(phns);
    phns.forEach(phn =>{
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card px-12 bg-base-100 shadow-xl`;
        phoneCard.innerHTML = `
        <figure><img src="${phn.image}" alt="${phn.image}" /></figure>
        <div class="card-body">
            <div>
            <h2 class="text-lg font-bold text-center">${phn.phone_name}</h2>
            </div>
            <p class="text-center">If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-center">
            <button class="btn btn-primary">Show Details</button>
            </div>
        </div>
        `;
        myPhoneContainer.appendChild(phoneCard);
    })
}
const loadPhone = async (searchText) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones);

}
const displayPhones = phones =>{
    document.getElementById('default-phone-container').innerText = '';
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.innerText = '';

    const defaultPhoneContainer = document.getElementById('default-phone-container');
    // phoneContainer.innerHTML = '';
    // phoneContainer.textContent= '';
    // const showAllContainer = document.getElementById('show-all-container');
    // if(phones.length >= 12){
    //     showAllContainer.classList.remove('hidden');
    // }
    
    phones = phones.slice(0, 12);
    const showAllContainer = document.getElementById('show-all-container');
    if(phones.length >= 12){
        showAllContainer.classList.remove('hidden');
    }
    else{
        showAllContainer.classList.add('hidden');
    }
    phones.forEach(phone =>{
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card px-12 bg-base-100 shadow-xl`;
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="${phone.image}" /></figure>
        <div class="card-body">
            <div>
            <h2 class="text-lg font-bold text-center">${phone.phone_name}</h2>
            </div>
            <p class="text-center">If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-center">
            <button class="btn btn-primary">Show Details</button>
            </div>
        </div>
        `;
        phoneContainer.appendChild(phoneCard);
    })
    toggleLoading(false);
}
// Handle Search Functions
const handleSearch = () =>{
    toggleLoading(true);
    const searchFieldText = document.getElementById('search-field').value;
    // console.log(searchFieldText);
    loadPhone(searchFieldText);
}

// const handleSearch2 = () =>{
//     toggleLoading(true);
//     const searchFieldText = document.getElementById('search-field2').value;
//     // console.log(searchFieldText);
//     loadPhone(searchFieldText);
// }

const toggleLoading = (isLoading) =>{
    const loading = document.getElementById('loading');
    if(isLoading){
        loading.classList.remove('hidden');
    }
    else{
        loading.classList.add('hidden');
    }
}


// defaultLoad(phn);
