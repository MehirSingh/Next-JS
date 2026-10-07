/** this is a component
 * this is made in jsx therefore we can use html 
 */


//this is how we define the type
type cardProps = { 
    title: string;
    description: string;
}

//This is how we define the component with props (DYNAMIC COMPONENT)
export default function Card({ title, description }: cardProps){ 
    return(
        <div className=" card p-4 rounded shadow-md w-fit bg-gray-900">
            <h1 className="text-lg font-bold mb-2 text-white">{title}</h1>
            <p className="text-gray-300">{description}</p>
        </div>
    )
}

 //this is the static component
// export default function newCard(){ 
//     return(
//         <div>
//             <h1>Card Title</h1>
//             <p>This is a sample card component.</p>
//         </div>
//     )
// }
