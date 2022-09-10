import CategoryButton from "./CategoryButton";

const Category = () => {
    const categoryArray = ['Ação', 'Aventura', 'Animação', 'Comédia', 'Crime'];
    
    return (
        <section className="category-list">
            {categoryArray.map((category) => {
                return <CategoryButton category={category} />
            })}
        </section>
    )
}

export default Category;