import { IoMdCheckmarkCircle } from "react-icons/io";

const CategoryButton = ({category}) => {
    return ( 
        <button className="category-button" >
            
           {category.name} <IoMdCheckmarkCircle className="icone" />
        </button>
     );
}
 
export default CategoryButton;