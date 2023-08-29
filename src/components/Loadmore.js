import React,{useState} from "react";


const Loadmore=({items})=>{
    const [displayItems,setDisplayItems]=useState([]);
    const [page,setPage]=useState(0);



    const loadMore=()=>{
        const nextPage=page+1;
        const startIndex=(nextPage-1)*10;
        const endIndex=startIndex+10;

        setTimeout(()=>{
            setDisplayItems([...displayItems,items.slice(startIndex,endIndex)]);
            setPage(nextPage);
        },500);
    };

    return (
        <div>
            <ul>
                {
                    displayItems.map((item,index)=>{
                        <li key={index}>{item}</li>
                    })
                }
            </ul>
            {
                displayItems.length<items.length && (<button onClick={loadMore}>Load More</button>)
            }
        </div>
    )
}

export default Loadmore;