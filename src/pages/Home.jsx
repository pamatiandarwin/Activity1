import { useEffect, useState } from "react"
import ItemCard from "../components/ProductCard"

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(async res => await res.json())
            .then(data => setPosts(data.products))
    }, [])
    return (

        <div className = "container">
            {posts.map((post, i) =>
                <ItemCard post={post}>
                </ItemCard>)
            }
        </div>
    )
}

export default Home