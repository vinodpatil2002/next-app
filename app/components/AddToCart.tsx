'use client';   

const AddToCart = () => {
  return (
    <div>
        <button
                onClick={() => {
                    console.log("Add to cart clicked");
                }}
            >
                Add to cart
            </button>
    </div>
  )
}

export default AddToCart