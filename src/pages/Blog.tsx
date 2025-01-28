import React from 'react';
import BlogCard from '../components/blog/BlogCard';
import { blogs } from '../data/blogs';

export default function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 bg-[#F6EFE9]">
      <h1 className="text-5xl font-extrabold text-center text-[#823D14] mb-12">Wedding Stories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogs.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
