"use client";

const OfflinePage = () => {
  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center bg-gray-950 text-white px-4">
      <div className="text-center">
        <div className="text-6xl mb-6">📡</div>
        <h1 className="text-3xl font-bold tracking-tight mb-3">
          You&apos;re Offline
        </h1>
        <p className="text-gray-400 text-lg max-w-md">
          Please check your internet connection and try again.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-8 px-6 py-3 bg-sky-600 hover:bg-sky-500 rounded-lg font-medium transition"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default OfflinePage;
