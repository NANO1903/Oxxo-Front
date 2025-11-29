export default async function ProductPage({ params }: { params: { id: string } }) {
    const { id: productId } = (await params) as { id: string };
    if (!productId) return null;

    return "ID here " + productId;
}