export default function ProductReviews({ params }: {
    params: {
        productId: string;
        reviewId: string;
    }
}) {
    return <h1>Review {params.reviewId} of Product {params.productId}</h1>
}