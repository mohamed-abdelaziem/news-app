import type { Article } from "../../Types/AllTypes.interface"
import staticNewsImage from "../../../../public/images/download.jpg";
type Props = {
  article: Article
}
export default function NewsCard(props:Props) {



  return (
    <>
    <div className="col-12 col-md-6 col-lg-4 ">
            <div className="card bg-secondary text-white">
              <img src={props.article.urlToImage?props.article.urlToImage:staticNewsImage}  alt="..." />
              <div className="card-body">
                <h5 className="card-title">{props.article?.title?.slice(0,50)}</h5>
                <p className="card-text">
                 {props.article?.description?  props.article?.description?.slice(0,30) : ' elit. Maxime, deserunt porro architecto voluptate accusamus provident corrupti quis maiores perferendis. Nisi.'.slice(0,30)}
                </p>
                <a href={props.article.url} className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
    </>
  )
}
