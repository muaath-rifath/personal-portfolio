import React from 'react';

const Blog = () => {
    return (
        <div className="mt-16 sm:mt-32">
            <header className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                    Blog
                </h1>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                    Thoughts, ideas, and insights on various topics.
                </p>
            </header>
            <div className="mt-16 sm:mt-20">
                {/* Add your blog content here */}
            </div>
        </div>
    );
};

export default Blog;