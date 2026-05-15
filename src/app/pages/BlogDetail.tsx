import { useParams, Link } from "react-router";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { blogs } from "../data/blogs";

export function BlogDetail() {
  const { blogId } = useParams();
  const blog = blogs.find(b => b.id === blogId);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link
            to="/media#blog"
            className="inline-block px-8 py-4 bg-[#36AC43] text-white rounded-xl hover:bg-[#2d8c36] transition-colors font-bold text-lg"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogs.filter(b => b.id !== blogId).slice(0, 3);

  return (
    <div className="w-full">
      {/* Hero Image */}
      <section
        className="relative min-h-[600px] bg-cover bg-center flex items-end"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('${blog.image}')`,
        }}
      >
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 pb-16 text-white w-full">
          <Link
            to="/media#blog"
            className="inline-flex items-center gap-2 text-white hover:text-[#36AC43] transition-colors mb-8 text-lg"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Blog
          </Link>
          <div className="flex items-center gap-6 mb-6 text-lg">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-5 h-5" />
              <span>{blog.category}</span>
            </div>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">{blog.title}</h1>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="prose prose-lg max-w-none">
            {blog.content.map((paragraph, index) => (
              <p key={index} className="text-xl text-gray-700 mb-8 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Share Section */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Share this article</h3>
            <div className="flex gap-4">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#1DA1F2] text-white rounded-lg hover:bg-[#1a8cd8] transition-colors font-semibold text-lg"
              >
                Twitter
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#4267B2] text-white rounded-lg hover:bg-[#365899] transition-colors font-semibold text-lg"
              >
                Facebook
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(blog.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#0077B5] text-white rounded-lg hover:bg-[#006399] transition-colors font-semibold text-lg"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="text-4xl font-bold mb-12 text-gray-900">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-10">
              {relatedPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-2 text-base text-gray-500 mb-4">
                      <Calendar className="w-5 h-5 text-[#36AC43]" />
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#36AC43] transition-colors leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{post.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#36AC43] to-[#2d8c36] text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Go Solar?</h2>
          <p className="text-2xl mb-10">
            Let our experts help you design the perfect solar solution for your needs.
          </p>
          <Link
            to="/contact"
            className="inline-block px-12 py-5 bg-white text-[#36AC43] rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 font-bold text-2xl"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
