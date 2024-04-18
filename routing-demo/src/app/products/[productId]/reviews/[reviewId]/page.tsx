
import { notFound } from "next/navigation";

export default function ProductReviews({ params }: {
    params: {
        productId: string;
        reviewId: string;
    }
}) {

    if (parseInt(params.reviewId) > 1000) {
        notFound(); // from next navigation
    }

    return (
        <h1>
            Review {params.reviewId} of Product {params.productId}
        </h1>
    );
}