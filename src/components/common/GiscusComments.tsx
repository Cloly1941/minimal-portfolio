'use client';

// ** React
import Giscus from '@giscus/react';

export default function GiscusComments() {

    return (
        <Giscus
            repo={process.env.NEXT_PUBLIC_GISCUS_REPO as `${string}/${string}`}
            repoId={process.env.NEXT_PUBLIC_GISCUS_REPO_ID!}
            category={process.env.NEXT_PUBLIC_GISCUS_CATEGORY}
            categoryId={process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID}
            mapping="pathname"
            strict="0"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="top"
            theme='light'
            lang="en"
            loading="lazy"
        />
    );
}
