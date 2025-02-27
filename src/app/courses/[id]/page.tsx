 
export default function CourseDetailPage({ params }: { params: { id: string } }) {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-3xl font-bold mb-6">Course ID: {params.id}</h1>
        {/* Placeholder for course details, videos, quizzes */}
      </div>
    );
  }