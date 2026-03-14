import axios from "axios";
import { useContext, useEffect, useState } from "react";
import type { Article, IResponeOfArticle } from "../../Types/AllTypes.interface";
import { CategoryContext } from "../../Context/ChageCategory.context";
import NewsCard from "../../components/NewsCard/NewsCard";

export default function News() {
    const categoryContext = useContext(CategoryContext);
    const [articles , setArticles] = useState<Article[]>([]);
    const [isLoading , setIsLoading] = useState<boolean>(false);
    const apiKey = import.meta.env.VITE_API_KEY;

    
    useEffect(()=>{
        getAllArticles(categoryContext?.category!);
    },[categoryContext?.category]);



   async function getAllArticles(category:string){
    setIsLoading(true);
       if(category == 'all'){
     const baseUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
         const data = await axios.get<IResponeOfArticle>(baseUrl);
        const finalResposne = data.data;
        setArticles(finalResposne.articles);
        setIsLoading(false);
       }else{
        const baseUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
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
