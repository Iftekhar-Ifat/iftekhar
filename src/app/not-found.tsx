export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[70vh]">
      <div className="flex items-center space-x-3">
        <h1 className="text-2xl font-bold">404</h1>
        <div className="border-l pl-3">
          <p className="text-lg">This page could not be found.</p>
        </div>
      </div>
    </div>
  );
}
