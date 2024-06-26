import Link from "next/link";

import PostPreviewCondensed from "./post-preview-condensed"

export default function Blog({ posts }) {
    return (
        <section id="blog" className="blog-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-10">
                        <div className="section-title text-center">
                            <h2>Latest Blog Posts</h2>
                            <p>Climate Women Media Action has a community of independent journalists who submit their stories, articles and blogs that are periodically published here.
                            </p>
                            <p>
                                <Link href={`/blog`} className="main-btn btn-hover mt-5">
                                    View All Blog Posts
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {posts.map(post => <PostPreviewCondensed
                        key={post.slug}
                        title={post.title}
                        coverImage={post.featuredImage}
                        coverImageAlt={post.featuredImageAlt}
                        date={post.published}
                        author={post.author}
                        slug={post.slug}
                        excerpt={post.summary}
                    />)}
                </div>
            </div>
        </section>
    )
}