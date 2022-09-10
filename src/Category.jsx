import { useEffect, useState } from "react";
import { getGenres } from "./API/api";
import CategoryButton from "./CategoryButton";

const Category = () => {
    const categoryArray = ['Ação', 'Aventura', 'Animação', 'Comédia', 'Crime'];

   

    const [categorias, setCategorias] =  useState([]);

    useEffect(() => {
        getGenres()
        .then(data => {
            console.log(data)
            setCategorias(data.data.genres)
        })
    })
    
    return (
        <section className="category-list">
            {categorias ? categorias.map((category) => {
                return <CategoryButton category={category} />
            }) : null}
        </section>
    )
}

export default Category;