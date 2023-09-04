

const loadCategoris = async () => {
    const categoris = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await categoris.json()
    const dataArr = data.data
    //  console.log(dataArr)

    const tabContainer = document.getElementById('tab-container')
    dataArr.forEach((categori) => {
        // console.log(categori.category)
        // console.log(categori)
        const div = document.createElement('div');

        div.innerHTML = ` 
        <a class="tab bg-gray-300 text-center  text-xl font-semibold text-black hover:bg-[#FF1F3D] items-center rounded-md" onclick="categoryId('${categori.category_id}')">${categori.category}</a>
        `
        tabContainer.appendChild(div)
    });
}
loadCategoris()

const categoryId = async (id) => {
    const getId = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    const datas = await getId.json();
    // console.log(datas.data);
    const data = datas.data;
    console.log(data)
    const noneIcon = document.getElementById('none-icon');
    if(data.length === 0){
        
        noneIcon.classList.remove('hidden')
        
    }
    else{
        noneIcon.classList.add('remove')
    }

    const detailContainer = document.getElementById('detail-container')
    detailContainer.innerHTML = '';
    data.forEach((detail) => {
        // console.log(detail)
        const div = document.createElement('div')
        div.innerHTML = `
       
           
        <img class="w-80 h-52 rounded-lg" src="${detail?.thumbnail}" alt="">

        <div class="flex items-start my-2 gap-2">
            <img class="h-10 w-10 rounded-[40px]" src="${detail?.authors[0]?.profile_picture
            }" alt="">
            <div>
                <h3 class="text-lg font-bold">${detail?.title}</h3>
                    
               <div class="flex gap-1">
                <p class="text-base  font-medium text-gray-600">${detail?.authors[0]?.profile_name}</p>
                <p>${detail?.authors[0]?.verified?`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <g clip-path="url(#clip0_13_1000)">
                  <path d="M19.375 10.0001C19.375 10.8001 18.3922 11.4595 18.1953 12.197C17.9922 12.9595 18.5063 14.022 18.1203 14.6892C17.7281 15.3673 16.5484 15.4486 15.9984 15.9986C15.4484 16.5486 15.3672 17.7282 14.6891 18.1204C14.0219 18.5064 12.9594 17.9923 12.1969 18.1954C11.4594 18.3923 10.8 19.3751 10 19.3751C9.2 19.3751 8.54062 18.3923 7.80312 18.1954C7.04062 17.9923 5.97813 18.5064 5.31094 18.1204C4.63281 17.7282 4.55156 16.5486 4.00156 15.9986C3.45156 15.4486 2.27187 15.3673 1.87969 14.6892C1.49375 14.022 2.00781 12.9595 1.80469 12.197C1.60781 11.4595 0.625 10.8001 0.625 10.0001C0.625 9.20012 1.60781 8.54075 1.80469 7.80325C2.00781 7.04075 1.49375 5.97825 1.87969 5.31106C2.27187 4.63293 3.45156 4.55168 4.00156 4.00168C4.55156 3.45168 4.63281 2.272 5.31094 1.87981C5.97813 1.49387 7.04062 2.00793 7.80312 1.80481C8.54062 1.60793 9.2 0.625122 10 0.625122C10.8 0.625122 11.4594 1.60793 12.1969 1.80481C12.9594 2.00793 14.0219 1.49387 14.6891 1.87981C15.3672 2.272 15.4484 3.45168 15.9984 4.00168C16.5484 4.55168 17.7281 4.63293 18.1203 5.31106C18.5063 5.97825 17.9922 7.04075 18.1953 7.80325C18.3922 8.54075 19.375 9.20012 19.375 10.0001Z" fill="#2568EF"/>
                  <path d="M12.7093 7.20637L9.14053 10.7751L7.29053 8.92668C6.88897 8.52512 6.2374 8.52512 5.83584 8.92668C5.43428 9.32824 5.43428 9.97981 5.83584 10.3814L8.43115 12.9767C8.82178 13.3673 9.45615 13.3673 9.84678 12.9767L14.1624 8.66106C14.564 8.25949 14.564 7.60793 14.1624 7.20637C13.7608 6.80481 13.1108 6.80481 12.7093 7.20637Z" fill="#FFFCEE"/>
                </g>
                <defs>
                  <clipPath id="clip0_13_1000">
                    <rect width="20" height="20" fill="white"/>
                  </clipPath>
                </defs>
              </svg>`:''}</p>
                
               </div>
                <p class="text-base font-normal text-gray-600">${detail?.others?.views} views</p>
            </div>
        
        `
     detailContainer.appendChild(div)
    })

}


function blog(){
    window.location.href=('blog.html')
}
