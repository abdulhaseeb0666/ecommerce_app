import ProductCategories from "@/app/components/ProductCategories"

const layout = ({children} : {children: React.ReactNode}) => {
    return (
        <div>
            <ProductCategories />
            <h1>{children}</h1>
        </div>
    )
}

export default layout
