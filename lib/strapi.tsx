

export async function fetchFromStrapi(endpoint: string) {
    const url = `${process.env.STRAPI_URL}/api/${endpoint}?populate=*`;

    const res = await fetch(url, {
        headers: process.env.STRAPI_TOKEN ?
        { Authorization: `Bearer ${process.env.STRAPI_TOKEN}`} : {},
        next: { revalidate: 60 },
    });

    if (!res.ok) {
        console.error(`Strapi fetch failed ${res.status}`);
        throw new Error(`Failed to fetch ${endpoint}`);
    }

    return res.json();
}