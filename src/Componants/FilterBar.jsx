import axios from "axios"
import { useEffect, useState } from "react"

export default function FilterBar () {
    const [categories, setCategories] = useState([])


    useEffect(() => {
        axios.get("https://pde-games.herokuapp.com/api/categories").then(res => {
            setCategories(res.data.categories);
        })
    }, [])
    

    return (
        <div className="filter-bar">
            
            <select>
                <option>All Categories</option>
                {categories.map(category => {
                    return(
                        <option key={category.slug}>{category.slug}</option>
                    )
                })}
            </select>

            <select>
                <option>Sort By</option>
            </select>

            <select>
                <option>Order</option>
            </select>

        </div>
    )
}