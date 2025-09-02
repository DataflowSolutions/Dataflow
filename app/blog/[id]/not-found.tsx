import Link from "next/link";
import { ArrowLeft, BookOpen, Clock, Calendar } from "lucide-react";
import { allPosts } from "../../../lib/blogData";

export default function NotFound() {
  // Get first 3 blog posts to show as suggestions
  const suggestedPosts = allPosts.slice(0, 3);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("sv-SE", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background-muted">
      {/* Navigation placeholder */}
      <div className="h-20"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-background border border-border rounded-lg shadow-lg p-12 mb-8 text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-lg mx-auto mb-6 flex items-center justify-center">
            <BookOpen className="w-10 h-10 text-white" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Artikeln hittades inte
          </h1>

          <p className="text-lg text-text-secondary mb-8">
            Tyvärr kunde vi inte hitta den artikel du letar efter. Den kan ha
            flyttats eller tagits bort.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#blog"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg font-medium transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Tillbaka till blogg
            </Link>

            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-transparent text-text-primary hover:bg-muted rounded-lg font-medium transition-colors border border-border"
            >
              Hem
            </Link>
          </div>
        </div>

        {/* Suggested Articles */}
        {suggestedPosts.length > 0 && (
          <div className="bg-background border border-border rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-text-primary mb-6 text-center">
              Kanske något av dessa artiklar intresserar dig?
            </h2>

            <div className="grid gap-6">
              {suggestedPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="block p-4 border border-border rounded-lg hover:bg-muted transition-colors"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>

                    <div className="flex-grow">
                      <h3 className="font-semibold text-text-primary mb-2 hover:text-primary transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-text-secondary text-sm mb-3 line-clamp-2">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center space-x-4 text-xs text-text-muted">
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {formatDate(post.publishedAt)}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {post.readTime}
                        </div>
                        <div className="px-2 py-1 bg-primary/10 text-primary rounded-md">
                          {post.category}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
