import React from 'react';
import { BlogPost } from '../../types';
import { Calendar, User } from 'lucide-react';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img 
        src={post.imageUrl} 
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
        <div className="flex items-center text-gray-600 mb-2">
          <Calendar className="w-4 h-4 mr-2" />
          {new Date(post.date).toLocaleDateString()}
        </div>
        <div className="flex items-center text-gray-600 mb-4">
          <User className="w-4 h-4 mr-2" />
          {post.author}
        </div>
        <p className="text-gray-600">{post.content}</p>
      </div>
    </div>
  );
}