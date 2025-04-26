
// import ShareIcon from "../icons/ShareIcon";

// interface CardProps{
//     title: string,
//     link: string,
//     type: "twitter" | "youtube"
// }

// function Card({title, link, type}: CardProps) {

//   return (
//     <div className="bg-white rounded-md border border-gray-200 p-4 max-w-72 min-h-48 min-w-72">
//       <div className="flex justify-between">
//         <div className="flex items-center text-md">
//           <div className="pr-2 text-gray-500">
//             <ShareIcon />
//           </div>
//           {title}
//         </div>
//         <div className="flex items-center">
//           <div className="pr-2 text-gray-500">
//             <a href={link} target="_blank">
//                 <ShareIcon />
//             </a>
//           </div>
//           <div className="text-gray-500">
//             <ShareIcon />
//           </div>
//         </div>
//       </div>

//       <div className="pt-4">
//         {type === "twitter" && <blockquote className="twitter-tweet">
//             <a href={link.replace("x.com","twitter.com")}></a>
//         </blockquote>}
//         {type === "youtube" && <iframe className="w-full" src={link.replace("watch","embed").replace("?v=","/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> } 
//       </div>
//     </div>
//   );
// }

// export default Card;

import ShareIcon from "../icons/ShareIcon";

interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube";
}

function Card({ title, link, type }: CardProps) {
  return (
    <div className="bg-white rounded-md border border-gray-200 p-4 max-w-72 min-h-48 min-w-72">
      <div className="flex justify-between">
        <div className="flex items-center text-md">
          <div className="pr-2 text-gray-500">
            <ShareIcon />
          </div>
          {title}
        </div>
        <div className="flex items-center">
          <div className="pr-2 text-gray-500">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <ShareIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="pt-4">
        {type === "twitter" && (
          <blockquote className="twitter-tweet">
            <a href={link.replace("x.com", "twitter.com")}></a>
          </blockquote>
        )}

        {type === "youtube" && (
          <iframe
            className="w-full"
            src={link.replace("watch", "embed").replace("?v=", "/")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
}

export default Card;

