import axios from "axios";
import { useContext, useEffect, useState } from "react";
import type { Article, IResponeOfArticle } from "../../Types/AllTypes.interface";
import { CategoryContext } from "../../Context/ChageCategory.context";
import NewsCard from "../../components/NewsCard/NewsCard";

export default function News() {
    const categoryContext = useContext(CategoryContext);
    const [articles , setArticles] = useState<Article[]>([]);
    const [isLoading , setIsLoading] = useState<boolean>(false);
    const apiKey = "4e0b6ea325a28f1b172946eb043a8af2";

    
    useEffect(()=>{
        getAllArticles(categoryContext?.category!);
    },[categoryContext?.category]);



   async function getAllArticles(category:string){
    setIsLoading(true);
       if(category == 'all'){
     const baseUrl = `https://gnews.io/api/v4/top-headlines?category=general&apikey=${apiKey}`;
         const data = await axios.get<IResponeOfArticle>(baseUrl);
        const finalResposne = data.data;
        setArticles(finalResposne.articles);
        console.log(finalResposne)
        setIsLoading(false);
       }else{
        const baseUrl = `https://gnews.io/api/v4/top-headlines?category=${category}&apikey=${apiKey}`;
         const data = await axios.get<IResponeOfArticle>(baseUrl);
            if(data.status == 200){
                const finalData = data.data;
                setArticles(finalData.articles);
                setIsLoading(false);
            }
       }
    }




    if(isLoading){
        return <div>Loading</div>
    }


  return (
    <>
      <div className="container">
        {categoryContext?.category == 'all' ? 
        <h1 className="text-center my-3">
          Latest <span className="badge bg-danger">News</span>
        </h1> :
        
         <h1 className="text-center my-3">
          <span className="text-capitalize">{categoryContext?.category!}</span> <span className="badge bg-danger">News</span>
        </h1>

    
    
    }

        <div className="row g-2">
            {articles.map((article , index)=>{
                return <NewsCard key={index} article={article}/>
            })}
        </div>
      </div>
    </>
  );
}
